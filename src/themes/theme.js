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
  p: '1.5rem',
}

const query = {
  tablet: '768px',
  mobile: '650px',
  small: '425px',
}

export const dark = {
  query: { ...query },
  fontSizes: { ...fontSizes },
  colors: { ...colors },

  textShadow: 'textShadow 2.6s infinite',

  monitor: {
    frame: colors.darkestGreen,
    screen: colors.darkGreen,
  },

  navigation: {
    border: colors.green,
    borderShadow: '#07661e',
    fontColor: colors.lightGreen,
    fontColor_active: colors.lightGreen,
    border_active: colors.offwhite,
    borderShadow_active: '#92a19f',
  },

  terminal_header: {
    background: colors.brightGreen,
    innerBackground: 'hsla(154, 95%, 24%, 0.5)',
    border: colors.brightGreen,
    fontColor: colors.darkGreen,
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
    fontColor_alternate: colors.green,
    link_color: colors.lightGreen,
    link_hovered: colors.brightGreen,
    tag_background: colors.darkGreen,
    tag_color: colors.lightGreen,
    tag_border: colors.lightGreen,
    tag_border_inset: '#07661e',
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

const lightColors = {
  gray_light: 'hsla(0,0%,90%)',
  gray: 'hsla(0,0%,40%)',
  gray_dark: 'hsla(0,0%,35%)',
  white: 'hsl(0, 0%, 100%)',
  off_white: 'hsl(0,0%,95%)',
  blue: 'hsl(217, 89%, 61%)',
  blue_dark: 'hsl(217, 89%, 51%)',
  red: 'hsl(7, 72%, 53%)',
  green: 'hsl(153,100%,31%)',
  green_light: 'hsl(153,100%,41%)',
  yellow: 'hsl(44, 100%, 48%)',
}

export const light = {
  query: { ...query },
  fontSizes: { ...fontSizes },
  textShadow: 'textShadow 2.6s infinite',

  monitor: {
    frame: lightColors.gray_light,
    screen: lightColors.white,
  },
  navigation: {
    border: lightColors.gray,
    borderShadow: lightColors.gray_dark,
    fontColor: lightColors.gray_dark,
    fontColor_active: lightColors.green,
    border_active: lightColors.green,
    borderShadow_active: lightColors.green,
  },
  terminal_header: {
    background: lightColors.blue,
    border: lightColors.blue_dark,
    fontColor: lightColors.white,
  },

  content_header: {
    background: lightColors.blue,
    border: lightColors.blue_dark,
    fontColor: lightColors.white,
    borderShadow: lightColors.blue_dark,
  },

  content_container: {
    border: lightColors.yellow,
    border_top: lightColors.yellow,
    background: lightColors.white,
    font_color: lightColors.gray_dark,
  },

  skill_level: {
    border: lightColors.red,
    background: colors.offwhite,
    background_half: 'pink',
    color: colors.white,
  },

  content_item: {
    background: lightColors.off_white,
    background_active: lightColors.white,
    border_bottom: lightColors.green, //used only for file component
    border: lightColors.green,
    fontColor: lightColors.gray_dark,
    link_color: lightColors.green,
    link_hovered: lightColors.green_light,
    image_frame: {
      color: lightColors.blue,
      'box-shadow': `0 -4px ${lightColors.off_white}, 0 -8px, 4px 0 ${
        lightColors.off_white
      }, 4px -4px, 8px 0, 0 4px ${lightColors.off_white}, 0 8px, -4px 0 ${
        lightColors.off_white
      }, -4px 4px, -8px 0, -4px -4px, 4px 4px`,
      background: lightColors.off_white,
    },
  },
  loading_bar: {
    background: lightColors.green_light,
    border: lightColors.green,
    title_font_color: lightColors.yellow,
    font_color: lightColors.blue,
  },
  settings: {
    checkbox_background: lightColors.red,
    checkbox_background_active: lightColors.green,
    checkbox_font_color: lightColors.white,
    checkbox_font_color_active: lightColors.white,
  },
  scrollbar: {
    width: '18px',
    background: lightColors.off_white,
    'border-right': `1px solid ${lightColors.blue}`,
    'border-left': `1px solid ${lightColors.blue}`,
  },
  scrollbar_thumb: {
    background: `${lightColors.blue}`,
    padding: '1px',
    width: '16px',
  },
}
