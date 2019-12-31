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
            label: 'Type',
            route: '/core/type',
          },
          {
            label: 'Color',
            route: '/core/color',
          },
          {
            label: 'Grid',
            route: '/core/grid',
          },
          {
            label: 'Flex',
            route: '/core/flex',
          },
        ]
      },
      {
        label: 'Components',
        route: '/components',
        children: [
          {
            label: 'Button',
            route: '/components/button',
          },
          {
            label: 'Link',
            route: '/components/link',
          },
          {
            label: 'List',
            route: '/components/list',
          },
          {
            label: 'Table',
            route: '/components/table',
          },
          {
            label: 'Blockquote',
            route: '/components/blockquote',
          },
          {
            label: 'Image',
            route: '/components/image',
          },
          {
            label: 'Input',
            route: '/components/input',
          },
          {
            label: 'ValidatedInput',
            route: '/components/validatedinput',
          },
          {
            label: 'TextArea',
            route: '/components/textarea',
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
            label: 'Checkbox',
            route: '/components/checkbox',
          },
          {
            label: 'RadioButton',
            route: '/components/radioButton',
          },
          {
            label: 'RadioGroup',
            route: '/components/radioGroup',
          },
          {
            label: 'Slider',
            route: '/components/slider',
          },
          {
            label: 'Autocomplete',
            route: '/components/autocomplete',
          },
          {
            label: 'Hero',
            route: '/components/hero',
          },
          {
            label: 'Card',
            route: '/components/card',
          },
          {
            label: 'Tabs',
            route: '/components/tabs',
          },
          {
            label: 'Accordion',
            route: '/components/accordion',
          },
          {
            label: 'Carousel',
            route: '/components/carousel',
          },
          {
            label: 'Modal',
            route: '/components/modal',
          },
          {
            label: 'Tooltip',
            route: '/components/tooltip',
          },
          {
            label: 'Separator',
            route: '/components/separator',
          },
          {
            label: 'Alert',
            route: '/components/alert',
          },
          {
            label: 'Progress',
            route: '/components/Progress',
          },
          {
            label: 'Video',
            route: '/components/Video',
          },
          {
            label: 'Audio',
            route: '/components/audio',
          },
        ],
      }
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