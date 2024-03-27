export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  // {
  //   title: 'Home',
  //   slug: 'homepage',
  //   blocks: [
  //     {
  //       id: 'j4l2tnl',
  //       group: 'Navigation',
  //       name: 'NavNavbar',
  //       data: {},
  //     },
  //     {
  //       id: 'kj2h345',
  //       group: 'Hero',
  //       name: 'Hero',
  //       data: {
  //         theme: null,
          
  //         // Content
  //         pretitle: {
  //           as: 'p',
  //           content: 'This is the pretitle',
  //           size: 'base',
  //         },
  //         title: {
  //           as: 'h1',
  //           content: 'The hero',
  //           size: '5xl',
  //         },
  //         subtitle: {
  //           as: 'p',
  //           content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
  //           size: 'xl',
  //         },
  //         buttons: [
  //           {
  //             label: 'Call to action',
  //             to: '/homepage',
  //           },
  //           {
  //             label: 'Learn more',
  //             to: '/page-1',
  //             variant: 'text',
  //           }
  //         ],
  //         image: {
  //           file: null,
  //           width: null,
  //           height: null,
  //         },
  //         invert: false,

  //         // Section
  //         background: {
  //           file: null,
  //           overlay: false,
  //         },
  //         padding: {
  //           paddingTop: '6xl',
  //           paddingBottom: '6xl',
  //         },
  //         // orientation: null,
  //       },
  //     },
  //     {
  //       id: '34lkj4',
  //       group: 'Hero',
  //       name: 'Hero',
  //       data: {
  //         theme: null,
  //         pretitle: {
  //           as: 'p',
  //           content: 'This is the pretitle',
  //           size: 'base',
  //         },
  //         title: {
  //           as: 'h1',
  //           content: 'The hero',
  //           size: '5xl',
  //         },
  //         subtitle: {
  //           as: 'p',
  //           content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
  //           size: 'xl',
  //         },
  //         buttons: [
  //           {
  //             label: 'Call to action',
  //             to: '/homepage',
  //           },
  //           {
  //             label: 'Learn more',
  //             to: '/page-1',
  //             variant: 'text',
  //           }
  //         ],
  //         image: {
  //           file: {
  //             id: 25,
  //             name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
  //             path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
  //             size: '1.51 MB',
  //             alt: 'The image alt',
  //             description: 'The image description',
  //             caption: 'The image caption',
  //           },
  //           width: null,
  //           height: null,
  //         },
  //         background: {
  //           file: {
  //             id: 25,
  //             name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
  //             path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
  //             size: '1.51 MB',
  //             alt: 'The image alt',
  //             description: 'The image description',
  //             caption: 'The image caption',
  //           },
  //           overlay: true,
  //         },
  //         padding: {
  //           paddingTop: '6xl',
  //           paddingBottom: '6xl',
  //         },
  //         invert: false,
  //       },
  //     },
  //     {
  //       id: 'akl24jl5l',
  //       group: 'Feature',
  //       name: 'Feature',
  //       data: {
  //         image: {
  //           file: {
  //             id: 25,
  //             name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
  //             path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
  //             size: '1.51 MB',
  //             alt: 'The image alt',
  //             description: 'The image description',
  //             caption: 'The image caption',
  //           },
  //           width: null,
  //           height: null,
  //         },
  //       },
  //     },
  //     {
  //       id: 'aklkh23las',
  //       group: 'Navigation',
  //       name: 'NavFooter',
  //       data: {},
  //     },
  //   ]
  // },

  //////////////////////////////////
  // About
  //////////////////////////////////
  {
    title: 'About',
    path: '/about',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsna4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          section: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {}
          },
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h1',
              content: 'About',
              size: '5xl',
            },
            body: {
              as: 'p',
              content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
              size: 'xl',
            },
          }
        },
      },
    ]
  },

   //////////////////////////////////
  // About / Contact
  //////////////////////////////////
  {
    title: 'Contact',
    path: '/about/contact',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsna4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          section: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {}
          },
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h1',
              content: 'Contact',
              size: '5xl',
            },
            body: {
              as: 'p',
              content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
              size: 'xl',
            },
          }
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          section: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              file: {
                name: 'The image title',
                src: '/images/gradient-purple-pink.jpg',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              },
              overlay: true
            }
          },
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h2',
              content: 'The about feature',
            },
            body: {
              content: 'The body content is here. Lorem ipsum dolar sit amit.',
              size: 'xl',
            },
            buttons: [
              {
                label: 'Call to action',
                to: '/homepage',
              },
              {
                label: 'Learn more',
                to: '/page-1',
                variant: 'ghost',
              }
            ],
            image: {
              file: {
                name: 'The image title',
                src: 'https://placehold.co/600x400/white/grey',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              }
            },
          }
        }
      },
      {
        id: 'akl24je43',
        group: 'CallToAction',
        name: 'CallToAction',
        data: {
          section: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              file: null,
              overlay: true
            }
          },
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h2',
              content: 'Boost your productivity. Start using our app today.',
            },
            body: {
              as: 'p',
              content: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
            },
            buttons: [],
            image: {
              file: {
                name: 'The image title',
                src: 'https://placehold.co/600x400',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              }
            },
          }
        }
      },
      {
        id: 'akl24je22',
        group: 'Feature',
        name: 'FeatureRepeater',
        data: {
          section: null,
          repeaterContent: [
            {
              title: {
                as: 'p',
                content: 'Unlimited inboxes',
                size: 'base'
              },
              body: {
                as: 'p',
                content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
              },
              buttons: [
                { label: 'Learn more', to: '/' },
              ],
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/icon-camera.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                }
              }
            },
            {
              title: {
                as: 'p',
                content: 'Manage team members',
                size: 'base'
              },
              body: {
                as: 'p',
                content: 'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
              },
              buttons: [
                { label: 'Learn more', to: '/' },
              ],
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/icon-heart.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                }
              }
            },
            {
              title: {
                as: 'p',
                content: 'Spam report',
                size: 'base'
              },
              body: {
                as: 'p',
                content: 'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
              },
              buttons: [
                { label: 'Learn more', to: '/' },
              ],
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/icon-map.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                }
              }
            },
          ]
        }
      }
    ]
  }
]