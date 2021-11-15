import React, { ChangeEvent, EventHandler, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { observer }  from 'mobx-react';
import methodStore from './../../../stores/methodStore';

interface Props {
    handleOpen: (status: boolean) => void
}

const Modal:React.FC<Props> = ({handleOpen}) => {
    const list = new Array("밀링", "선반");
    const setOpen = useRef<any>();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if(setOpen && !setOpen.current?.contains(e.target as Node)) {
                handleOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside); 

        return () => {  
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })

    const CheckHandler = (checked: boolean, list: string) => {
        if(checked) {
            methodStore.add(list)
        } else {
            methodStore.delete(list)
        }
    }

    return (
        <S.ModalContainer ref={setOpen}>
            { list.map((data, idx) => {
                return <label><S.Checkbox type="checkbox" value={data}
                onChange={(e) => CheckHandler(e.currentTarget.checked, e.target.value)} checked={methodStore.method.has(data)} />{data}</label>
                })
            }
        </S.ModalContainer>
    )
}

export default observer(Modal);