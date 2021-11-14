import { DefaultTheme } from 'styled-components';

const themeClair: DefaultTheme = {
  body: {
    normal: '#F2F2F2',
    assombri: '#EAEAEA',
    pale: 'white',
  },
  border: { normal: '', assombri: '#D7D7D7', pale: '#c6c6c6' },
  text: {
    normal: '#3A3C41',
    pale: '#BCBCBC',
    color1: '#7E7E7E',
    color1_pale: '',
    color2: '',
    color2_pale: '',
    color3: '',
    color3_pale: '',
  },
  shadow: {
    transparent_clair_005: '',
    transparent_clair_01: '',
    transparent_clair_02: '',
    transparent_sombre_005: '',
    transparent_sombre_01: '',
    transparent_sombre_02: '',
  },
} as const;

export default themeClair;
