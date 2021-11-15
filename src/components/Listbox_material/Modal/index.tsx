import React, { ChangeEvent, EventHandler, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { observer }  from 'mobx-react';
import materialStore from '../../../stores/materialStore';

interface Props {
    handleOpen: (status: boolean) => void
}

const Modal:React.FC<Props> = ({handleOpen}) => {
    const list = new Array("알루미늄", "탄소강", "구리", "합금강", "강철");
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
            materialStore.add(list)
        } else {
            materialStore.delete(list)
        }
    }

    return (
        <S.ModalContainer ref={setOpen}>
            { list.map((data, idx) => {
                return <label><S.Checkbox type="checkbox" value={data}
                onChange={(e) => CheckHandler(e.currentTarget.checked, e.target.value)} checked={materialStore.material.has(data)} />{data}</label>
                })
            }
        </S.ModalContainer>
    )
}

export default observer(Modal);