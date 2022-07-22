import React from 'react';
import s from "./Message.module.css";
import {MessageDataType} from "../../../../App";

const Message = (props: MessageDataType) => {
    return (
        <div className={s.message}>
            <div className={s.dialog}>{props.messageTitle}</div>
        </div>
    );
};

export default Message;