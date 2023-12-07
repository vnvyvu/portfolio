import { IconBaseProps } from 'react-icons';
import { IconType } from 'react-icons';

interface ReactIconProps extends IconBaseProps {
	icon: IconType;
}

export const ReactIcon: React.FC<
	ReactIconProps & React.HTMLProps<SVGElement>
> = ({ icon: Icon, size = 30, ...props }) => <Icon size={size} {...props} />;
