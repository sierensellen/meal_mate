import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';
import React, { FC } from 'react'

const Button: FC<ButtonProps> = ({ href, isExternal = false, children }) => {
    return (
        <a href={href} target={isExternal ? "_blank" : "_self"}>
            {children}
        </a>
    )
}

export default Button;