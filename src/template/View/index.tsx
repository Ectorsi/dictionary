import Frame, { FrameProps } from '../../components/Frame';
import Search, { SearchProps } from '../../components/Search';
import * as S from './styles';

type ViewProps = FrameProps & SearchProps;

const View = (props: ViewProps) => {
    return (
        <S.Container>
            <Search
                actionSearch={props.actionSearch}
                getEvent={props.getEvent}
            />
            <Frame {...props}/>
        </S.Container>
    )
}

export default View;