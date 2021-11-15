import React from "react";
import * as S from './style';
import { AiOutlineReload } from 'react-icons/ai';

interface Props {
    resetMethod: () => void,
    resetMaterial: () => void
}

const ResetButton:React.FC<Props> = ({ resetMethod, resetMaterial }) => {
    return (
        <S.ResetButtonContainer onClick={() => (resetMaterial(), resetMethod())}>
            <AiOutlineReload />
            필터링 리셋
        </S.ResetButtonContainer>
    )
}

export default ResetButton;