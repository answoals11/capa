import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100vw;
    height: 70px;

    background-color: #1565C0;
    color: white;

    @media ${(props) => props.theme.mobile} {
        height: 50px;
    }
`

export const Logo = styled.div`
    position: relative;
    font-size: 20px;
    left: 30px;

    @media ${(props) => props.theme.mobile} {
        left: 10px;
    }
`

export const NamePlace = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    right: 180px;

    @media ${(props) => props.theme.mobile} {
        display: none;
    }
`

export const contour = styled.div`
    position: absolute;
    right: 140px;

    @media ${(props) => props.theme.mobile} {
        display: none;
    }
`

export const SignPlace = styled.div`
    position: absolute;
    right: 40px;

    &:hover {
        cursor: pointer;
    }

    @media ${(props) => props.theme.mobile} {
        display: none;
    }
`