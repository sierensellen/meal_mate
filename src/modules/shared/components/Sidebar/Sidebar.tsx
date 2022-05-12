import clsx from 'clsx';
import React, { FC, useState } from 'react';

import { Blade, Button, Icon } from '@shared/components';

import { Icons } from '../Icon';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';

const Sidebar: FC<SidebarProps> = ({ children }) => {
	const [bladeOpened, setBladeOpened] = useState<boolean>(false);

	return (
		<div className={clsx(styles['c-sidebar'], bladeOpened && styles['c-sidebar__open'])}>
			<div className={styles['c-sidebar__hamburger']}>
				<Button
					onClick={() => {
						console.log('clicked');
						setBladeOpened(!bladeOpened);
					}}
					icon={<Icon big={true} name={Icons.hamburger} />}
					big={true}
				/>
			</div>
			<Blade left={true} isOpened={bladeOpened} className={styles['c-sidebar__nav']}>
				<nav className={styles['c-sidebar__nav--content']}>
					<Button href={'/'}>meals</Button>
					<Button href={'/add-meal'}>add meal</Button>
					<Button href={'/list'}>Shoppinglist</Button>
				</nav>
			</Blade>
			<div className={styles['c-sidebar__visible']}>{children}</div>
		</div>
	);
};

export default Sidebar;
