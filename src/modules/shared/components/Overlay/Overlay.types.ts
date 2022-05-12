import { DefaultComponentProps } from '@shared/types';

export interface OverlayProps extends DefaultComponentProps {
	active?: boolean;
	onClick?: () => void;
}
