import { InputHTMLAttributes } from "react";
import ButtonSearch from "../Button";
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputText = ({name, label, ...rest}: InputProps) => {
    return (
        <S.Container {...rest}>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Input id={name}/>
            <ButtonSearch type="button">
                Buscar
            </ButtonSearch>
        </S.Container>
    )
}

export default InputText;