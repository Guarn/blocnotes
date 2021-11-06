/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export interface IconeSVGParams {
  couleurPrincipale?: string;
  couleurSecondaire?: string;
}
export const JourNuit = ({ couleurPrincipale }: IconeSVGParams) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <path
      id="Icon_weather-moon-alt-first-quarter"
      data-name="Icon weather-moon-alt-first-quarter"
      d="M4.488,26.318a22.166,22.166,0,0,1,1.779-8.736,22.712,22.712,0,0,1,4.8-7.177A22.735,22.735,0,0,1,26.978,3.828a22.1,22.1,0,0,1,8.736,1.779,22.8,22.8,0,0,1,7.2,4.8,22.735,22.735,0,0,1,6.577,15.913,22.1,22.1,0,0,1-1.779,8.736,22.8,22.8,0,0,1-4.8,7.2,22.041,22.041,0,0,1-7.2,4.8,22.337,22.337,0,0,1-17.472,0,22.712,22.712,0,0,1-7.177-4.8,22.041,22.041,0,0,1-4.8-7.2A22.166,22.166,0,0,1,4.488,26.318ZM26.6,46.449h.38a19.669,19.669,0,0,0,7.817-1.6,20.21,20.21,0,0,0,6.417-4.3,20.547,20.547,0,0,0,4.3-6.417,19.329,19.329,0,0,0,1.6-7.817,19.644,19.644,0,0,0-1.6-7.8,20.21,20.21,0,0,0-4.3-6.417,20.547,20.547,0,0,0-6.417-4.3,19.329,19.329,0,0,0-7.817-1.6H26.6Z"
      transform="translate(-4.488 -3.828)"
      fill={couleurPrincipale || '#5d5d5d'}
    />
  </svg>
);
