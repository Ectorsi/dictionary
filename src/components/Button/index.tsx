import {ReactNode} from 'react';
import * as S from './styles';

export type ButtonProps = {
    color?: string;
    children?: ReactNode;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

const ButtonSearch = ({children, color, type, onClick}: ButtonProps) => {

    return (
        <S.Button
            type={type}
            onClick={onClick}
            color={color}
        >
            {children}
        </S.Button>
    )
}

export default ButtonSearch;