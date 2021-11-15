import React from "react";
import * as S from './style';
import { BiBuildings } from 'react-icons/bi';

const Header = () => {
    return (
        <S.HeaderContainer>
            <S.Logo>
                <strong>CAPA</strong>파트너스
            </S.Logo>
            <S.NamePlace>
                <BiBuildings size="20px" style={{marginRight: '6px'}} />
                A 가공 업체
            </S.NamePlace>
            <S.contour>|</S.contour>
            <S.SignPlace>
                로그아웃
            </S.SignPlace>
        </S.HeaderContainer>
    )
}

export default Header;