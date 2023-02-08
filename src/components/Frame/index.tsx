import * as S from './styles';

type Antonym = {
    description?: string;
};

type Synonym = {
    description?: string;
};

type singleDefinition = {
    antonyms: Antonym[];
    synonyms: Synonym[];
    definition: string;
    example: string;
};

type Meaning = {
    definitions: singleDefinition[];
    partOfSpeetch: string;
};

type Phonetic = {
    text: string;
    audio?: string;
};

export type SingleData = {
    meanings?: Meaning[];
    origin?: string;
    phonetic?: string;
    phonetics?: Phonetic[];
    word?: string;
};

export type FrameProps = {
    data: SingleData[]; 
}

const Frame = (props: FrameProps) => {

    const firstResult = props?.data.filter((_, index) => index === 0);
    const meanings = firstResult.map(mean => mean.meanings);
    
    return (
        <S.Container>
            <>
                <h1>{firstResult.map(item => item.word)}</h1>
                <p>{ meanings.map(item => item?.map(item => item.definitions.map(item => item.definition)))}</p>
            </>
        </S.Container>
    );
}

export default Frame;