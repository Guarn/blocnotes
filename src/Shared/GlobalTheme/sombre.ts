import { DefaultTheme } from 'styled-components';

const themeSombre: DefaultTheme = {
  body: {
    normal: '#3A3C41',
    assombri: '#3E3E3E',
    pale: '#313131',
    builder_menu: '#455563',
    builder_elements: '#474747',
  },
  border: { normal: '', assombri: '#2F2F2F', pale: '#575757' },
  text: {
    normal: '#F2F2F2',
    pale: '#676767',
    color1: '#C1C1C1',
    color1_pale: '',
    color2: '',
    color2_pale: '',
    color3: '',
    color3_pale: '',
  },
  shadow: {
    transparent_clair_005: '',
    transparent_clair_01: '',
    transparent_clair_02: 'rgba(255,255,255,0.2)',
    transparent_sombre_005: '',
    transparent_sombre_01: '',
    transparent_sombre_02: 'rgba(0,0,0,0.2)',
  },
  name: 'Theme clair',
};

export default themeSombre;
