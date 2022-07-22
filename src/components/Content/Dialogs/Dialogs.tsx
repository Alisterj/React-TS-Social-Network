import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogDataType, MessageDataType} from "../../../App";

type DialogsPropsType = {
    dialogsItem: DialogDataType[]
    dialogMessage: MessageDataType[]
}

const Dialogs = (props: DialogsPropsType) => {
    const getDialogsItem = props.dialogsItem.map(d => <Dialog key={d.id} {...d}/>)
    const getMessages = props.dialogMessage.map(m => <Message key={m.id} {...m}/>)
    return (
        <div className={s.dialog_wrapper}>
            <div className={s.dialogs_item}>
                {getDialogsItem}
            </div>
            <div className={s.messages}>
                {getMessages}
            </div>
        </div>
    );
};

export default Dialogs;