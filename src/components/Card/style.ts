import styled from 'styled-components';

export const CardContainer = styled.div<{methodFilter: boolean, materialFilter: boolean}>`
    display: ${props => ( props.materialFilter) ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;

    width: 366px;
    height:356px;

    border: 1px solid #E5E5E5;
    border-radius: 4px;

    &:hover {
        border: 1px solid #2196F3;
    }
`

export const TopContainer = styled.div`
    width: 90%;
    height: 136px;

    border-bottom: 1px solid #E5E5E5;
`
export const ProjectName = styled.div`
    height: 30px;

    margin-top: 20px;

    font-size: 16px;
    font-weight: 900;
`
export const Customer = styled.div`
    height: 20px;
    
    font-size: 14px;
`

export const Deadline = styled.div`
    width: 100%;
    height:20px;

    font-size: 14px;
    font-weight: 600;
    color: #939FA5;

    margin-top: 30px;
`

export const BottomContainer = styled(TopContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 160px;

    border: none;
    font-size: 14px;
`

export const ListContainer = styled.div`
    display: flex;

    width: 100%;
    height: 30px;
`
export const List = styled.div`
    width: 110px;
`

export const Info = styled.div`
    font-weight: 900;

    &::after {
        content: ','
    };
    &:last-child::after {
        content: none;
    }
`

export const ButtonPlace = styled.div`
    display: flex;
    width: 90%;
`