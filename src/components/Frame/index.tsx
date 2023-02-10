import { useState } from 'react';
import AudioComponent from '../Audio';
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
    const audioForPlay = firstResult.map(item => item.phonetics?.map(audio => audio.audio)).map(us => us && us[1]).toString();

    const renderParagraph = () => {
        return singleMeaning.length > 0 && (
            <S.Paragraph>
                <S.Phonetics>
                    {phonetic && (
                        <S.Phonetic>
                            {phonetic}
                        </S.Phonetic>
                    )}
                        {audioForPlay && <AudioComponent audio={audioForPlay} />}
                </S.Phonetics>
                {singleMeaning}
            </S.Paragraph>
        )
    }

    const renderTitle = () => {
        return titleCaptalized && <S.H1>.{titleCaptalized}</S.H1>
    }
    
    return firstResult && (
        <S.Container>
            {renderTitle()}
            {renderParagraph()}
        </S.Container>
    );
}

export default Frame;