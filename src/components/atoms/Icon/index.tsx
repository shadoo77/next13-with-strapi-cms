import { ReactElement } from 'react';
import Logo from './Logo';
import LogoText from './LogoText';

// These aren't required
export interface IIconExtendedProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  fillColor?: string;
}

// This is required
interface IIconProps extends IIconExtendedProps {
  name: 'Logo' | 'LogoText';
}

interface IIcons {
  [key: string]: (props: IIconExtendedProps) => ReactElement;
}

const icons: IIcons = {
  Logo,
  LogoText
};

const Icon = (props: IIconProps): ReactElement => icons[props.name](props) || null;

export default Icon;
