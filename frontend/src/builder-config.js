// Builder.io configuration

// Use a Builder.io space public API key (required)
export const BUILDER_PUBLIC_API_KEY = 'YOUR_BUILDER_API_KEY';

// Define your content model names
export const BUILDER_MODELS = {
  PAGE: 'page',
  NAVIGATION: 'navigation',
  SECTION: 'section',
  HERO: 'hero',
  FEATURE: 'feature',
  TESTIMONIAL: 'testimonial',
  CTA: 'cta',
};

// Define your custom sections (components)
export const BUILDER_COMPONENTS = [
  {
    name: 'Hero',
    inputs: [
      { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'] },
      { name: 'title', type: 'string', defaultValue: 'Hero Title' },
      { name: 'subtitle', type: 'string' },
      { name: 'ctaText', type: 'string' },
      { name: 'ctaLink', type: 'string' },
      { name: 'secondaryCtaText', type: 'string' },
      { name: 'secondaryCtaLink', type: 'string' },
      { name: 'overlayOpacity', type: 'number', defaultValue: 0.5 },
      { name: 'textAlignment', type: 'string', enum: ['left', 'center', 'right'], defaultValue: 'left' },
      { name: 'height', type: 'string', defaultValue: 'h-screen' },
    ],
  },
  {
    name: 'FeatureSection',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Feature Section Title' },
      { name: 'subtitle', type: 'string' },
      { name: 'features', type: 'list', subFields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'icon', type: 'string' }, // Assuming icon from a library
        { name: 'link', type: 'string' },
      ]},
      { name: 'backgroundColor', type: 'string', defaultValue: 'white' },
    ],
  },
  {
    name: 'TestimonialSection',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Testimonials' },
      { name: 'subtitle', type: 'string' },
      { name: 'testimonials', type: 'list', subFields: [
        { name: 'quote', type: 'string' },
        { name: 'author', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'image', type: 'file' },
      ]},
    ],
  },
  {
    name: 'CallToAction',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Ready to get started?' },
      { name: 'subtitle', type: 'string' },
      { name: 'buttonText', type: 'string', defaultValue: 'Contact Us' },
      { name: 'buttonLink', type: 'string' },
      { name: 'backgroundColor', type: 'string', defaultValue: 'dark' },
    ],
  },
];

// Register your components with Builder.io
export const registerBuilderComponents = (builder) => {
  BUILDER_COMPONENTS.forEach((component) => {
    builder.registerComponent(
      // Dynamic import of the component
      () => import(`./components/${component.name}`),
      {
        name: component.name,
        inputs: component.inputs,
      }
    );
  });
};