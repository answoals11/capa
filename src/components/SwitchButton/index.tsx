import React from 'react';
import * as S from './style';

interface Props {
    ischecked: boolean,
    handleToggle: (status: boolean) => void
}

const SwitchButton:React.FC<Props> = ({ ischecked, handleToggle }) => {
    return (
        <S.SwtichContainer>
            <S.Checkbox type="checkbox" id="checkbox" onChange={() => handleToggle(ischecked)} />
            <S.Label htmlFor="checkbox" /> 상담중인 요청만 보기
        </S.SwtichContainer>
    )
}

export default SwitchButton;