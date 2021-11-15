import styled from 'styled-components';

export const PageConatiner = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: auto;
`
export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
    height: inherit;

    @media ${(props) => props.theme.mobile} {
        width: 90%;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 130px;
`

export const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
`

export const ListboxContainer = styled.div`
    display: flex;
    
    width: auto;
    height: 40px;
`

export const ToggleContainer = styled.div`

`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;

`