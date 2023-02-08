import { useState } from 'react';
import { api } from '../../services/api';
import View from '../../template/View';
import * as S from './styles';

export const mockData = [
    {
        word: 'hello',
        phonetic: 'həˈləʊ',
        phonetics: [
        {
            text: 'həˈləʊ',
            audio: '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
        },
        {
            text: 'hɛˈləʊ',
        },
        ],
        origin: 'early 19th century: variant of earlier hollo ; related to holla.',
        meanings: [
        {
            partOfSpeech: 'exclamation',
            definitions: [
            {
                definition: 'used as a greeting or to begin a phone conversation.',
                example: 'hello there, Katie!',
                synonyms: [],
                antonyms: [],
            },
            ],
        },
        {
            partOfSpeech: 'noun',
            definitions: [
            {
                definition: 'an utterance of ‘hello’; a greeting.',
                example: 'she was getting polite nods and hellos from people',
                synonyms: [],
                antonyms: [],
            },
            ],
        },
        {
            partOfSpeech: 'verb',
            definitions: [
            {
                definition: 'say or shout ‘hello’.',
                example: 'I pressed the phone button and helloed',
                synonyms: [],
                antonyms: [],
            },
            ],
        },
        ],
    },
];

const Home = () => {

    const [data, setData] = useState([]);
    const [word, setWord] = useState('');

    const handleActionSearch = async () => {
        await api.get(word)
        .then((res) => {
            console.log('res.data', res.data);
            setData(res.data);
        })
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