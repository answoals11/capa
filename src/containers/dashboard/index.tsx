import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../../common";
import * as S from './style';
import { Listbox_Method, Listbox_Material, ResetButton, SwitchButton, Card } from '../../components';
import { observer } from 'mobx-react';
import store from './../../stores';
import { getCardInfo } from "../../service/request";

const DashboardContainer = () => {
    const [cardInfo, setCardInfo] = useState<Object[]>([]);
    const { methodStore, materialStore, switchStore } = store;
    
    useEffect(() => {
        async function getAllCardInfo() {
            try {
                const { data } = await getCardInfo();
                setCardInfo(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCardInfo();
    }, [])

    return (
        <Fragment>
            <Header />
            <S.PageConatiner> 
                <S.DashboardContainer>
                    <S.TextContainer>
                        <strong style={{fontSize: '20px'}}>들어온 요청</strong>
                        <div>파트너님께 딱 맞는 요청서를 찾아보세요.</div>
                    </S.TextContainer>
                    
                    <S.OptionContainer>
                        <S.ListboxContainer>
                            <Listbox_Method amount={methodStore.method.size} />
                            <Listbox_Material amount={materialStore.material.size} />
                            { (methodStore.method.size > 0 || materialStore.material.size > 0) && 
                                <ResetButton resetMethod={() => methodStore.reset()} resetMaterial={() => materialStore.reset()} />
                            }
                        </S.ListboxContainer>
                        <S.ToggleContainer>
                            <SwitchButton ischecked={switchStore.switch} handleToggle={() => switchStore.control(!switchStore.switch)} />
                        </S.ToggleContainer>
                    </S.OptionContainer>

                    <S.CardContainer>
                        { cardInfo.length > 0 ? cardInfo.map((data, idx) => {
                            return <Card data={data} methodFilter={methodStore.method} materialFilter={materialStore.material} />
                        }) : null
                        }
                    </S.CardContainer>
                </S.DashboardContainer>
            </S.PageConatiner>
        </Fragment>
        
    )
}

export default observer(DashboardContainer);