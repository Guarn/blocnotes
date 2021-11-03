export interface Theme {
  body: BodyColors;
  text: TextColors;
  shadow: ShadowColors;
}

export interface BodyColors {
  normal: string;
  assombri: string;
  pale: string;
}
export interface TextColors {
  normal: string;
  pale: string;
  color1: string;
  color1_pale: string;
  color2: string;
  color2_pale: string;
  color3: string;
  color3_pale: string;
}

export interface ShadowColors {
  transparent_clair_005: string;
  transparent_clair_01: string;
  transparent_clair_02: string;
  transparent_sombre_005: string;
  transparent_sombre_01: string;
  transparent_sombre_02: string;
}
