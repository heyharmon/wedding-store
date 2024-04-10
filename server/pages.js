export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  {
    title: 'Homepage',
    path: '/',
    blocks: [
      {
        id: 'slsna4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          wrapper: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              image: null,
              overlay: true
            }
          },
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h1',
              content: 'Hello world',
              size: '5xl',
            },
            body: {
              element: 'p',
              content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
              size: 'xl',
            },
            images: [
              {
                file: {
                  name: 'The image title',
                  src: 'https://placehold.co/1280x720/white/grey',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                width: null,
                height: null,
              }
            ]
          },
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          wrapper: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/gradient-purple-pink.jpg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
              },
              overlay: true
            }
          },
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'The about feature',
            },
            body: {
              content: 'The body content is here. Lorem ipsum dolar sit amit.',
              size: 'lg',
            },
            buttons: [
              {
                label: 'Call to action',
                destination: '/homepage',
              },
              {
                label: 'Learn more',
                destination: '/page-1',
                variant: 'ghost',
              }
            ],
            images: [
              {
                file: {
                  name: 'The image title',
                  src: 'https://placehold.co/600x400/white/grey',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                width: null,
                height: null,
              }
            ]
          },
        }
      },
      {
        id: 'akl24je43',
        group: 'Feature',
        name: 'FeatureBoxed',
        data: {
          wrapper: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/gradient-purple-pink.jpg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                }
              },
              overlay: true
            }
          },
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'Boost your productivity. Start using our app today.',
            },
            body: {
              element: 'p',
              content: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
              size: 'lg',
            },
            buttons: [],
            images: [
              {
                file: {
                  name: 'The image title',
                  src: 'https://placehold.co/600x400/white/grey',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                width: null,
                height: null,
              }
            ],
            background: {
              image: {
                file: {
                  name: 'The image title',
                  src: '/images/gradient-purple-pink.jpg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                }
              },
              overlay: true
            }
          },
        }
      },
      {
        id: 'akl24je292',
        group: 'Feature',
        name: 'FeatureRepeater',
        data: {
          wrapper: null,
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'Stay on top of customer support',
            },
            body: {
              size: 'lg',
              content: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
            },
            buttons: [],
            image: {
              file: null,
              overlay: false,
              width: null,
              height: null,
            },
          },
          collection: [
            {
              title: {
                element: 'p',
                content: 'Unlimited inboxes',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
              },
              buttons: [
                { label: 'Learn more', destination: '/' },
              ],
              image: {
                file: {
                  id: 1,
                  name: 'The image title',
                  src: '/images/icon-camera.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                overlay: false,
                width: null,
                height: null,
              }
            },
            {
              title: {
                element: 'p',
                content: 'Manage team members',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
              },
              buttons: [
                { label: 'Learn more', destination: '/' },
              ],
              image: {
                file: {
                  id: 1,
                  name: 'The image title',
                  src: '/images/icon-heart.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                overlay: false,
                width: null,
                height: null,
              }
            },
            {
              title: {
                element: 'p',
                content: 'Spam report',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
              },
              buttons: [
                { label: 'Learn more', destination: '/' },
              ],
              image: {
                file: {
                  id: 1,
                  name: 'The image title',
                  src: '/images/icon-map.svg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                overlay: false,
                width: null,
                height: null,
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
          wrapper: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              image: null,
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
                id: 1,
                name: 'The image title',
                src: 'https://placehold.co/100x100',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              },
              overlay: false,
              width: null,
              height: null,
            },
          }
        }
      },
      {
        id: 'akl24je22',
        group: 'Card',
        name: 'CardRepeater',
        data: {
          wrapper: null,
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'From the blog',
            },
            body: {
              size: 'lg',
              content: 'Learn how to grow your business with our expert advice.',
            },
            buttons: [],
            image: {
              file: null,
              overlay: false,
              width: null,
              height: null,
            },
          },
          collection: [
            {
              content: {
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'Boost your conversion rate',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
                image: {
                  file: {
                    id: 1,
                    name: 'The image title',
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  },
                  overlay: false,
                  width: null,
                  height: null,
                }
              }
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'How to use search engines',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
                image: {
                  file: {
                    id: 1,
                    name: 'The image title',
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  },
                  overlay: false,
                  width: null,
                  height: null,
                }
              }
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'Improve your customer experience',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
                image: {
                  file: {
                    id: 1,
                    name: 'The image title',
                    src: 'https://placehold.co/400x300',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  },
                  overlay: false,
                  width: null,
                  height: null,
                }
              }
            },
          ]
        }
      },
    ]
  }
]