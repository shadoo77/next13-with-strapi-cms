import 'react';
import { IIconExtendedProps } from '.';

const Logo = ({
  width = '268',
  height = '245',
  viewBox = '0 0 268 245',
  fillColor = '#000'
}: IIconExtendedProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fillColor}
    stroke="currentColor"
  >
    <path d="M176.212 244.594H91.9446C75.7491 244.594 56.517 233.379 48.1662 219.173L6.15901 146.899C-1.93875 132.694 -1.93875 110.762 6.15901 96.8055L48.4192 25.0301C56.517 11.0737 75.7491 0.357147 92.1977 0.357147H176.465C192.914 0.357147 212.146 11.0737 220.244 25.0301L262.251 96.8055C270.348 110.762 270.348 132.943 262.251 146.899L220.244 219.173C211.893 233.379 192.661 244.594 176.212 244.594ZM92.1977 15.3104C81.3164 15.3104 66.8922 23.2855 61.578 32.5067L19.571 104.282C14.2568 113.753 14.2568 130.201 19.571 139.672L61.578 211.946C67.1453 221.416 81.5694 229.889 92.1977 229.889H176.465C187.346 229.889 201.517 221.416 207.338 211.946L249.345 139.672C254.912 130.201 254.912 114.002 249.345 104.532L207.338 32.7559C201.771 23.5347 187.852 15.5596 176.718 15.5596H92.1977V15.3104Z" />
    <path d="M149.775 198V140.703H104.142L83 110.022V75.546L104.142 45H116.074V99.2947H164.567L185 129.976V167.437L163.928 198H149.775ZM121.632 72.5437V45H163.846L182.139 71.6329V87.8927L149.775 87.8926V72.5437L121.632 72.5437ZM83 152.105H118.144V170.321H144.216V198H100.735L83 167.437V152.105Z" />
  </svg>
);

export default Logo;
