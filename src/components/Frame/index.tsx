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
    const singleMeaning = meanings.map(item => item?.map(item => item.definitions.map(item => item.definition)));
    const title = firstResult.map(item => item.word).toString();
    const phonetic = firstResult.map(item => item.phonetic).toString();
    const titleCaptalized = title.charAt(0).toUpperCase() + title.slice(1);
    
    return firstResult && (
        <S.Container>
            <>
                {titleCaptalized && <S.H1>.{titleCaptalized}</S.H1>}
                { singleMeaning && phonetic && <S.Paragraph>
                        <S.Phonetic>
                            {phonetic}
                        </S.Phonetic>
                    {singleMeaning}
                </S.Paragraph>}
            </>
        </S.Container>
    );
}

export default Frame;