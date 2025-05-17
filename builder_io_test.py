import requests
import sys
import json

class BuilderIOTester:
    def __init__(self, base_url="https://691aa821-994b-4e3c-95a0-22baed7ff275.preview.emergentagent.com"):
        self.base_url = base_url
        self.builder_api_key = "7d7f0d54afce4d3e897cc56acdd6e36f"
        self.builder_api_url = f"https://cdn.builder.io/api/v3/query/{self.builder_api_key}/page"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                    return False, response.json()
                except:
                    return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_builder_io_content(self, path="/"):
        """Test if Builder.io has content for a specific path"""
        url = self.builder_api_url
        params = {
            "omit": "meta.componentsUsed",
            "apiKey": self.builder_api_key,
            "noTraverse": "false",
            "userAttributes": json.dumps({
                "urlPath": path,
                "host": self.base_url.replace("https://", ""),
                "device": "desktop"
            }),
            "options.page.model": "page"
        }
        
        self.tests_run += 1
        print(f"\n🔍 Testing Builder.io content for path: {path}...")
        
        try:
            response = requests.get(url, params=params)
            
            success = response.status_code == 200
            if success:
                content = response.json()
                if content and "results" in content and len(content["results"]) > 0:
                    self.tests_passed += 1
                    print(f"✅ Passed - Builder.io has content for path: {path}")
                    return True, content
                else:
                    print(f"❌ Failed - Builder.io has no content for path: {path}")
                    print(f"Response: {json.dumps(content, indent=2)}")
                    return False, content
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                print(f"Response: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

def main():
    # Setup
    tester = BuilderIOTester()
    
    # Test Builder.io content for different paths
    paths = ["/", "/visit", "/groups", "/media", "/giving", "/non-existent-path"]
    
    for path in paths:
        success, content = tester.test_builder_io_content(path)
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    # Return success if all tests passed
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())