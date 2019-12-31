module.exports = {
  siteMetadata: {
    title: `Upstart Documentation`,
    description: `asdfadsf`,
    menu: [
      {
        label: 'Core',
        route: '/core',
        children: [
          {
            label: 'Color',
            route: '/core/color',
          },
          {
            label: 'Type',
            route: '/core/type',
          },
        ]
      },
      {
        label: 'Base',
        route: '/base',
        children: [
          {
            label: 'Badge',
            route: '/base/badge'
          },
          {
            label: 'Blockquote',
            route: '/base/blockquote',
          },
          {
            label: 'Link',
            route: '/base/link',
          },
          {
            label: 'List',
            route: '/base/list',
          },
          {
            label: 'Progress',
            route: '/base/Progress',
          },
          {
            label: 'Separator',
            route: '/base/separator',
          },
          {
            label: 'Table',
            route: '/base/table',
          },
          {
            label: 'Tooltip',
            route: '/base/tooltip',
          },
        ]
      },
      {
        label: 'Forms',
        route: '/forms',
        children: [
          {
            label: 'Autocomplete',
            route: '/components/autocomplete',
          },
          {
            label: 'Button',
            route: '/components/button',
          },
          {
            label: 'Checkbox',
            route: '/components/checkbox',
          },
          {
            label: 'Input',
            route: '/components/input',
          },
          {
            label: 'Radio',
            route: '/components/radio',
          },
          {
            label: 'RadioGroup',
            route: '/components/radioGroup',
          },
          {
            label: 'Select',
            route: '/components/select',
          },
          {
            label: 'Switch',
            route: '/components/switch',
          },
          {
            label: 'TextArea',
            route: '/components/textarea',
          },
          {
            label: 'ValidatedInput',
            route: '/components/validatedinput',
          },
        ],
      },
      {
        label: 'Containers',
        route: '/containers',
        children: [
          {
            label: 'Accordion',
            route: '/containers/accordion',
          },
          {
            label: 'Card',
            route: '/containers/card',
          },
          {
            label: 'Carousel',
            route: '/containers/carousel',
          },
          {
            label: 'Flex',
            route: '/containers/flex',
          },
          {
            label: 'Grid',
            route: '/containers/grid',
          },
          {
            label: 'Hero',
            route: '/containers/hero',
          },
          {
            label: 'Modal',
            route: '/containers/modal',
          },
          {
            label: 'Slider',
            route: '/containers/slider',
          },
          {
            label: 'Tabs',
            route: '/containers/tabs',
          },
        ],
      },
      {
        label: 'Messaging',
        route: '/messaging',
        children: [
          {
            label: 'Alert',
            route: '/messaging/alert',
          },
          {
            label: 'Toasts',
            route: '/messaging/toasts',
          },
        ]
      },
      {
        label: 'Media',
        route: '/media',
        children: [
          {
            label: 'Audio',
            route: '/media/audio',
          },
          {
            label: 'Image',
            route: '/media/image',
          },
          {
            label: 'Video',
            route: '/media/Video',
          },
        ],
      },

    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
  ]
}