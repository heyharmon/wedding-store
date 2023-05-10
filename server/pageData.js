export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  {
    title: 'Home',
    slug: 'homepage',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsn4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          pretitle: {
            as: 'span',
            content: 'This is the pretitle',
            size: 'base',
          },
          title: {
            as: 'h1',
            content: 'Hello world.',
            size: '5xl',
          },
          subtitle: {
            as: 'p',
            content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
            size: 'xl',
          },
          background: {
            image: {
              src: 'https://tailwindui.com/img/beams-home@95.jpg'
            },
          },
          padding: {
            paddingTop: '6xl',
            paddingBottom: '6xl',
          },
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {},
      },
      {
        id: 'aklkh23l45',
        group: 'Navigation',
        name: 'NavFooter',
        data: {},
      },
    ]
  },

  //////////////////////////////////
  // Page 1
  //////////////////////////////////
  {
    title: 'Example page one',
    slug: 'page-1',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsn4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          pretitle: {
            as: 'span',
            content: 'This is the pretitle',
            size: 'base',
          },
          title: {
            as: 'h1',
            content: 'Hello world.',
            size: '5xl',
          },
          subtitle: {
            as: 'p',
            content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
            size: 'xl',
          },
          padding: {
            paddingTop: '6xl',
            paddingBottom: '6xl',
          },
          background: {
            overlay: true,
          }
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          image: {
            src: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
            alt: 'The image alt',
          }
        },
      },
      {
        id: 'akjh245r',
        group: 'Feature',
        name: 'FeatureWithTwoColGrid',
        data: {},
      },
      {
        id: 'nmva3e4r',
        group: 'Hero',
        name: 'HeroVertical',
        data: {
          theme: 'theme-2',
          title: 'Hello world. Enrich your online business.',
          subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat fcommodo. Elit sunt amet fugiat.',
          padding: {
            top: '6xl',
            bottom: '6xl',
          },
          image: {
            src: 'https://tailwindui.com/img/component-images/project-app-screenshot.png'
          },
          background: {
            image: {
              src: 'https://tailwindui.com/img/beams-home@95.jpg'
            },
          },
        },
      },
      {
        id: 'aklkh23l45',
        group: 'Navigation',
        name: 'NavFooter',
        data: {},
      },
    ]
  }
]