import { Builder } from '@builder.io/react';
import MegaMenuHeader from './components/MagicPatterns/MegaMenuHeader';
import MagicFooter from './components/MagicPatterns/MagicFooter';
import HeroSection from './components/MagicPatterns/HeroSection';

// Register the MagicPatterns components with Builder.io
export function registerMagicPatternsComponents() {
  Builder.registerComponent(MegaMenuHeader, {
    name: 'MegaMenuHeader',
    inputs: [
      {
        name: 'logoText',
        type: 'string',
        defaultValue: 'POA Church',
      },
      {
        name: 'menuItems',
        type: 'list',
        subFields: [
          {
            name: 'label',
            type: 'string',
          },
          {
            name: 'link',
            type: 'string',
          },
          {
            name: 'submenu',
            type: 'list',
            subFields: [
              {
                name: 'label',
                type: 'string',
              },
              {
                name: 'link',
                type: 'string',
              },
            ],
          },
        ],
        defaultValue: [
          {
            label: 'Visit',
            link: '/visit',
          },
          {
            label: 'POA Groups',
            link: '/groups',
          },
          {
            label: 'Sermons',
            link: '/media',
          },
          {
            label: 'Give',
            link: '/giving',
          },
          {
            label: 'Learn',
            link: '/learn',
            submenu: [
              {
                label: 'New Believers',
                link: '/learn/new-believers',
              },
              {
                label: 'Bible Studies',
                link: '/learn/bible-studies',
              },
              {
                label: 'Growth Track',
                link: '/learn/growth-track',
              },
              {
                label: 'Leadership',
                link: '/learn/leadership',
              },
            ],
          },
        ],
      },
    ],
  });

  Builder.registerComponent(MagicFooter, {
    name: 'MagicFooter',
    inputs: [
      {
        name: 'newsletterTitle',
        type: 'string',
        defaultValue: 'Subscribe To Our Newsletter',
      },
      {
        name: 'quickLinks',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'links',
            type: 'list',
            subFields: [
              {
                name: 'label',
                type: 'string',
              },
              {
                name: 'url',
                type: 'string',
              },
            ],
          },
        ],
        defaultValue: [
          {
            title: 'Pages',
            links: [
              { label: 'Visit POA', url: '/visit' },
              { label: 'POA Groups', url: '/groups' },
              { label: 'Media', url: '/media' },
              { label: 'Give', url: '/giving' },
              { label: 'Story', url: '/about/story' },
              { label: 'Meet Our Pastors', url: '/about/pastors' },
            ],
          },
          {
            title: 'Quicklinks',
            links: [
              { label: 'POA Kids', url: '/kids' },
              { label: 'Refuge Student Ministries', url: '/students' },
              { label: 'Ministries Discover POA', url: '/ministries/discover' },
              { label: 'Prayer Request', url: '/prayer' },
              { label: 'Adult Ministries', url: '/ministries/adults' },
              { label: 'Restoration', url: '/ministries/restoration' },
            ],
          },
        ],
      },
    ],
  });

  Builder.registerComponent(HeroSection, {
    name: 'HeroSection',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Join a Spirit-Filled Community in the Heart of Alexandria',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Welcome to The Pentecostals of Alexandria Where Lives Are Changed. Guide your community toward healing with step-by-step guidance to activate prayer ministries and form interest groups.',
      },
      {
        name: 'buttonText',
        type: 'string',
        defaultValue: 'Get Started Today',
      },
      {
        name: 'buttonLink',
        type: 'string',
        defaultValue: '/visit',
      },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
      },
    ],
  });
}

// Export components directly for use in React code
export { MegaMenuHeader, MagicFooter, HeroSection };