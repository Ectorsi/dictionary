import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import View from '../../template/View';
import * as S from './styles';

const Home = () => {

    const [data, setData] = useState([]);
    const [word, setWord] = useState('');

    const handleActionSearch = async () => {
        await api.get(word)
        .then((res) => {
            setData(res.data);
        });
    }

    const handleGetEvent = (e: any) => {
        if (e.target.value) {
            setWord(e.target.value);
        }
    }
    return (
        <S.Container>
            <View
                actionSearch={handleActionSearch}
                getEvent={handleGetEvent}
                data={data}
            />
        </S.Container>
    )
}

export default Home;