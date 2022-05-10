import React, { FC } from 'react';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';

const Sidebar: FC<SidebarProps> = ({ children }) => {
	return <div className={styles['c-sidebar']}>{children}</div>;
};

export default Sidebar;
