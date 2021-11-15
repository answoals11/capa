import React from "react";
import * as S from './style';
import BreakdownBtn from './BreakdownBtn';
import ChatBtn from './ChatBtn';

interface Props {
    data: any,
    methodFilter: Set<string>,
    materialFilter: Set<string>
}

const Card:React.FC<Props> = ({ data, methodFilter, materialFilter }) => {

    return (
        <S.CardContainer methodFilter={methodFilter.size > 0 && methodFilter.has(data.method)}
        materialFilter={materialFilter.size > 0 && materialFilter.has(data.material)}>
            {console.log(materialFilter)}
            <S.TopContainer>
                {console.log(data.material.includes(materialFilter))}
                <S.ProjectName>{data.title}</S.ProjectName>
                <S.Customer>{data.client}</S.Customer>
                <S.Deadline>{data.due}까지 납기</S.Deadline>
            </S.TopContainer>
            <S.BottomContainer>
                <S.ListContainer>
                    <S.List>도면개수</S.List><S.Info>{data.count > 0 ? data.count : 0}</S.Info>
                </S.ListContainer>
                <S.ListContainer>
                    <S.List>총 수량</S.List><S.Info>{data.amount}</S.Info>
                </S.ListContainer>
                <S.ListContainer>
                    <S.List>가공방식</S.List> { data.method.map((info:any, idx: any) => {
                        return <S.Info>{info}</S.Info>
                    })}
                </S.ListContainer>
                <S.ListContainer>
                    <S.List>재료</S.List>{ data.material.map((info:any, idx: any) => {
                        return <S.Info>{info}</S.Info>
                    })}
                </S.ListContainer>
            </S.BottomContainer>
            <S.ButtonPlace>
                <BreakdownBtn />
                <ChatBtn />
            </S.ButtonPlace>          
        </S.CardContainer>
    )
}

export default Card;