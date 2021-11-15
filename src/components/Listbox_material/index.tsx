import React, { useState } from 'react';
import * as S from './style';
import { BiCaretDown } from 'react-icons/bi';
import Modal from './Modal';

interface Props {
    amount: number
}

const Listbox_material:React.FC<Props> = ({ amount }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <S.ListboxContainer onClick={() => setOpen(!open)} amount={amount}>
                재료 { amount > 0 && <>({amount})</> }
                <BiCaretDown color={amount > 0 ? '#ffffff' : '#939FA5'} style={{margin: '0px 10px'}} />
            </S.ListboxContainer>

            { open && <Modal handleOpen={setOpen} /> }
        </>
    )
}

export default Listbox_material;