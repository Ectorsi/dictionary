import InputText from '../../components/InputText';
import ButtonSearch from '../../components/Button';

import * as S from './styles';

export type SearchProps = {
    actionSearch: () => void;
    getEvent: (event: any) => void;
}

const Search = ({actionSearch, getEvent}: SearchProps) => {

    return (
        <S.Container>
            <InputText placeholder='Search' onChange={e => getEvent(e)}/>
            <ButtonSearch type="button" onClick={() => actionSearch()}>
                Buscar
            </ButtonSearch>
        </S.Container>
    )
}

export default Search;