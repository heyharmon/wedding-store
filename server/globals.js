export default {
  header: {
    blocks:[
      {
        id: 'akl24je292',
        group: 'Navbar',
        name: 'Navbar',
        data: {
          section: null,
          logo: {
            file: {
              name: 'The image title',
              src: '/images/icon-camera.svg',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            }
          },
          menu: [
            { label: 'Services', destination: '/services', children: [
              { label: 'Service 1', destination: '/services/service-1' },
              { label: 'Service 2', destination: '/services/service-2' },
            ]},
            { label: 'Care plan', destination: '/care-plan' },
            { label: 'About', destination: '/about' },
            { label: 'Contact', destination: '/contact' },
          ],
          secondaryMenu: [
            { label: 'Request appointment', destination: '/request-appointment' },
          ]
        }
      },
    ]
  },
  footer: {
    blocks:[
      {
        id: 'akl24je293',
        group: 'Footer',
        name: 'Footer',
        data: {
          section: null,
          logo: {},
          menu: [
            { label: 'Item 1', destination: '/item-1' },
            { label: 'Item 2', destination: '/item-2' },
            { label: 'Item 3', destination: '/item-3' },
          ],
          secondaryMenu: []
        }
      },
    ]
  },
}