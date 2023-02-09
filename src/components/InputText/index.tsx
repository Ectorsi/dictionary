import { InputHTMLAttributes } from "react";
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const InputText = ({placeholder, ...rest}: InputProps) => {
    return (
        <S.Container {...rest}>
            <S.Input placeholder={placeholder}/>
        </S.Container>
    )
}

export default InputText;