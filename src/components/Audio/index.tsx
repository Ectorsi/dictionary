import * as S from './style';

type AudioProps = {
    audio: string;
}

const AudioComponent = ({ audio }: AudioProps) => {

    const playAudio = new Audio(audio);

    return (
        <S.Button onClick={() => playAudio.play()}>
            ▶
        </S.Button>
    )
}

export default AudioComponent;