module.exports = {
  siteMetadata: {
    title: `Upstart Documentation`,
    description: `asdfadsf`,
    menuItems: [
      {
        label: 'Type',
        route: '/core/type',
        menu: 'core'
      },
      {
        label: 'Color',
        route: '/core/color',
        menu: 'core'
      },
      {
        label: 'Grid',
        route: '/core/grid',
        menu: 'core'
      },
      {
        label: 'Button',
        route: '/components/button',
        menu: 'components'
      },
      {
        label: 'Link',
        route: '/components/link',
        menu: 'components'
      },
      {
        label: 'List',
        route: '/components/list',
        menu: 'components'
      },
      {
        label: 'Table',
        route: '/components/table',
        menu: 'components'
      },
      {
        label: 'Blockquote',
        route: '/components/blockquote',
        menu: 'components'
      },
      {
        label: 'Image',
        route: '/components/image',
        menu: 'components'
      },
      {
        label: 'TextInput',
        route: '/components/textinput',
        menu: 'components'
      },
      {
        label: 'NumberInput',
        route: '/components/numberinput',
        menu: 'components'
      },
      {
        label: 'CurrencyInput',
        route: '/components/currencyinput',
        menu: 'components'
      },
      {
        label: 'PhoneInput',
        route: '/components/phoneinput',
        menu: 'components'
      },
      {
        label: 'EmailInput',
        route: '/components/emailinput',
        menu: 'components'
      },
      {
        label: 'DateInput',
        route: '/components/dateinput',
        menu: 'components'
      },
      {
        label: 'ValidatedInput',
        route: '/components/validatedinput',
        menu: 'components'
      },
      {
        label: 'TextArea',
        route: '/components/textarea',
        menu: 'components'
      },
      {
        label: 'Select',
        route: '/components/select',
        menu: 'components'
      },
      {
        label: 'Switch',
        route: '/components/switch',
        menu: 'components'
      },
      {
        label: 'Checkbox',
        route: '/components/checkbox',
        menu: 'components'
      },
      {
        label: 'RadioButton',
        route: '/components/radioButton',
        menu: 'components'
      },
      {
        label: 'RadioGroup',
        route: '/components/radioGroup',
        menu: 'components'
      },
      {
        label: 'Slider',
        route: '/components/slider',
        menu: 'components'
      },
      {
        label: 'Autocomplete',
        route: '/components/autocomplete',
        menu: 'components'
      },
      {
        label: 'Hero',
        route: '/components/hero',
        menu: 'components'
      },
      {
        label: 'Card',
        route: '/components/card',
        menu: 'components'
      },
      {
        label: 'Tabs',
        route: '/components/tabs',
        menu: 'components'
      },
      {
        label: 'Accordion',
        route: '/components/accordion',
        menu: 'components'
      },
      {
        label: 'Carousel',
        route: '/components/carousel',
        menu: 'components'
      },
      {
        label: 'Modal',
        route: '/components/modal',
        menu: 'components'
      },
      {
        label: 'Tooltip',
        route: '/components/tooltip',
        menu: 'components'
      },
      {
        label: 'Separator',
        route: '/components/separator',
        menu: 'components'
      },
      {
        label: 'Alert',
        route: '/components/alert',
        menu: 'components'
      },
      {
        label: 'Progress',
        route: '/components/Progress',
        menu: 'components'
      },
      {
        label: 'Video',
        route: '/components/Video',
        menu: 'components'
      },
      {
        label: 'Audio',
        route: '/components/audio',
        menu: 'components'
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      },
    },
  ]
}