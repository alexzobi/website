

type Shade = {
  dark?: string;
  default: string;
  medium?: string;
  light?: string;
};

// type Color =
//   'dark'
//   | 'light'

// type ColorType = {
//   dark: Shade,
//   light: Shade,
// };

const color = {
  dark: {
    default: '#000',
    medium: '##8F8F8F',
    light: '#CFCFCF'
  },
  light: {
    default: '#fff',
  }
};

export default color;