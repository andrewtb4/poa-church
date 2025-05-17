import requests
import sys
from datetime import datetime
import json

class POAChurchAPITester:
    def __init__(self, base_url="https://691aa821-994b-4e3c-95a0-22baed7ff275.preview.emergentagent.com"):
        self.base_url = base_url
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

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "/api",
            200
        )

    def test_status_endpoint_get(self):
        """Test the GET status endpoint"""
        return self.run_test(
            "GET Status Endpoint",
            "GET",
            "/api/status",
            200
        )

    def test_status_endpoint_post(self):
        """Test the POST status endpoint"""
        client_name = f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        return self.run_test(
            "POST Status Endpoint",
            "POST",
            "/api/status",
            200,
            data={"client_name": client_name}
        )

def main():
    # Setup
    tester = POAChurchAPITester()
    
    # Run tests
    root_success, root_response = tester.test_root_endpoint()
    status_get_success, status_get_response = tester.test_status_endpoint_get()
    status_post_success, status_post_response = tester.test_status_endpoint_post()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    # Return success if all tests passed
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())