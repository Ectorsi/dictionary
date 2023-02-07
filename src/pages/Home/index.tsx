import Frame from '../../components/Frame';
import InputText from '../../components/InputText';
import * as S from './styles';

const Home = () => {
    return (
        <S.Container>
            <InputText label='Pesquise uma palavra em inglês: ' name='Teste' />
            <Frame />
        </S.Container>
    )
}

export default Home;