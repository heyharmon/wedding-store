export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  {
    title: 'Home',
    path: '/',
    blocks: [
      {
        id: 'slsna4asdf',
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
              content: 'Home',
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
  // About
  //////////////////////////////////
  {
    title: 'About',
    path: '/about',
    blocks: [
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
        id: 'akl24je292',
        group: 'Feature',
        name: 'FeatureRepeater',
        data: {
          section: null,
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h2',
              content: 'Stay on top of customer support',
            },
            body: {
              size: 'lg',
              content: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
            },
            buttons: [],
            image: null,
          },
          features: [
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
      },
      {
        id: 'ghj24d4re',
        group: 'Testimonial',
        name: 'Testimonial',
        data: {
          section: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              overlay: true
            }
          },
          testimonial: {
            quote: {
              content: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
            },
            author: {
              content: 'Judith Black',
            },
            extra: {
              content: 'CEO of Workcation',
            },
            image: {
              file: {
                name: 'The image title',
                src: 'https://placehold.co/100x100',
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
        group: 'Card',
        name: 'CardRepeater',
        data: {
          section: null,
          content: {
            pretitle: {
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              as: 'h2',
              content: 'From the blog',
            },
            body: {
              size: 'lg',
              content: 'Learn how to grow your business with our expert advice.',
            },
            buttons: [],
            image: null,
          },
          cards: [
            {
              content: {
                pretitle: {
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  as: 'p',
                  content: 'Boost your conversion rate',
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
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  }
                }
              }
            },
            {
              content: {
                pretitle: {
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  as: 'p',
                  content: 'How to use search engines',
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
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  }
                }
              }
            },
            {
              content: {
                pretitle: {
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  as: 'p',
                  content: 'Improve your customer experience',
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
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  }
                }
              }
            },
          ]
        }
      },
    ]
  }
]