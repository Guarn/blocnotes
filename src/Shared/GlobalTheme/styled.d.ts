import 'styled-components';
import {
  BodyColors,
  TextColors,
  BorderColors,
  ShadowColors,
} from './interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: BodyColors;
    text: TextColors;
    border: BorderColors;
    shadow: ShadowColors;
    name: string;
  }
}
