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
            { label: 'Services', to: '/services', children: [
              { label: 'Service 1', to: '/services/service-1' },
              { label: 'Service 2', to: '/services/service-2' },
            ]},
            { label: 'Care plan', to: '/care-plan' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ],
          secondaryMenu: [
            { label: 'Request appointment', to: '/request-appointment' },
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
            { label: 'Item 1', to: '/item-1' },
            { label: 'Item 2', to: '/item-2' },
            { label: 'Item 3', to: '/item-3' },
          ],
          secondaryMenu: []
        }
      },
    ]
  },
}