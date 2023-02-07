import {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react';
import * as S from './styles';

import { api } from '../../services/api';

type ButtonTypes =
    AnchorHTMLAttributes<HTMLAnchorElement> |
    ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    color?: string;
} & ButtonTypes;

const ButtonSearch = async ({children, color}: ButtonProps) => {

    const stock = await api.get(`/dictionaries`);

    const handleClick = () => {
        console.log('stock', stock);
    }

    return (
        <S.Button
            onClick={() => handleClick()}
            color={color}
        >
            {children}
        </S.Button>
    )
}

export default ButtonSearch;