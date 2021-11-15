import styled from 'styled-components';

export const ListboxContainer = styled.div<{amount: number}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    position: relative;

    width: auto;
    height: 33px;

    border-radius: 4px;
    border: 1px solid #939FA5;
    padding: 0px 10px;
    
    color: ${props => props.amount > 0 ? '#ffffff' : '#323D45'};
    background-color: ${props => props.amount > 0 ? '#1565C0' : '#ffffff'};
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }
`