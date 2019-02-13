const colors = {
  brightGreen: 'hsla(140, 100%, 50%, 1)',
  lightGreen: 'hsla(149,73%,50%,1)',
  green: 'hsla(142,78%,33%,1)',
  darkGreen: 'hsla(120, 70%, 5%,1)',
  darkestGreen: 'hsla(110, 75%, 2%,1)',
  pink: '#f77',
  white: 'hsla(243,10%, 90%, 1)',
  offwhite: 'hsla(243,100%,93%, 1)',
}

const fontSizes = {
  h1: '2rem',
  p: '1.4rem',
}

export const dark = {
  textShadow: 'textShadow 2.6s infinite',

  monitor: {
    frame: colors.darkestGreen,
    screen: colors.darkGreen,
  },

  navigation: {
    border: colors.green,
    borderShadow: '#07661e',
    fontColor: colors.lightGreen,
    border_active: colors.offwhite,
    borderShadow_active: '#92a19f',
  },

  terminal_header: {
    background: colors.brightGreen,
    border: '#00cd30',
    fontColor: '#000',
  },

  content_header: {
    background: '#037744',
    border: '#458695',
    fontColor: '#bcf5e4',
    borderShadow: '#b7d2a0',
  },
  content_container: {
    border: '#05b96b',
    border_top: colors.brightGreen,
    background: '#091d0d',
    font_color: colors.white,
  },
  skill_level: {
    border: colors.lightGreen,
    background: colors.lightGreen,
    background_half: '#091d0d',
  },

  content_item: {
    background: 'hsla(154, 95%, 24%, 0.5)',
    background_active: 'hsla(154, 95%, 24%, 1)',
    border_bottom: '#05b96b', //used only for file component
    border: colors.white,
    fontColor: colors.white,
    link_color: colors.lightGreen,
    link_hovered: colors.brightGreen,
    image_frame: {
      color: '#031603',
      'box-shadow':
        '0 -4px #dbd8ff, 0 -8px, 4px 0 #dbd8ff, 4px -4px, 8px 0, 0 4px #dbd8ff, 0 8px, -4px 0 #dbd8ff, -4px 4px, -8px 0, -4px -4px, 4px 4px',
      background: '#dbd8ff',
    },
  },
  loading_bar: {
    background: colors.green,
    border: colors.green,
    title_font_color: colors.green,
    font_color: '#037744',
  },

  settings: {
    checkbox_background_active: '#00b757',
    checkbox_background: '#00482b',
    checkbox_font_color_active: '#00482b',
    checkbox_font_color: '#00b757',
  },

  scrollbar: {
    width: '18px',
    background: '#081007',
    'border-right': '1px solid #05b96b',
    'border-left': '1px solid #05b96b',
  },
  scrollbar_thumb: {
    background: '#007648',
    padding: '1px',
    width: '16px',
  },
}

export const light = {
  textShadow: 'textShadow 2.6s infinite',

  monitor: {
    frame: 'grey',
    screen: 'lightgray',
  },
  navigation: {
    border: 'blue',
    borderShadow: 'darkblue',
    fontColor: 'cyan',
    border_active: 'lightblue',
    borderShadow_active: 'blue',
  },
  terminal_header: {
    background: 'blue',
    border: 'red',
    fontColor: '#000',
  },

  content_header: {
    background: 'purple',
    border: 'red',
    fontColor: '#bcf5e4',
    borderShadow: 'pink',
  },

  content_container: {
    border: 'red',
    border_top: 'purple',
    background: 'pink',
    font_color: 'black',
  },

  skill_level: {
    border: colors.pink,
    background: colors.pink,
    background_half: 'pink',
  },

  content_item: {
    background: 'hsla(14, 95%, 24%, 0.5)',
    background_active: 'hsla(14, 95%, 24%, 1)',
    border_bottom: 'red', //used only for file component
    border: '#000',
    fontColor: '#0f0',
    link_color: '#000',
    link_hovered: '#21d077',
    image_frame: {
      color: '#031603',
      'box-shadow':
        '0 -4px #dbd8ff, 0 -8px, 4px 0 #dbd8ff, 4px -4px, 8px 0, 0 4px #dbd8ff, 0 8px, -4px 0 #dbd8ff, -4px 4px, -8px 0, -4px -4px, 4px 4px',
      background: '#dbd8ff',
    },
  },
  loading_bar: {
    background: 'red',
    border: 'red',
    title_font_color: 'red',
    font_color: 'purple',
  },
  settings: {
    checkbox_background: 'purple',
    checkbox_background_active: 'red',
    checkbox_font_color: 'white',
    checkbox_font_color_active: 'black',
  },
  scrollbar: {
    width: '18px',
    background: '#081007',
    'border-right': '1px solid blue',
    'border-left': '1px solid blue',
  },
  scrollbar_thumb: {
    background: 'red',
    padding: '1px',
    width: '16px',
  },
}
