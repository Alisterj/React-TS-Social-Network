import React from 'react';
import {DialogDataType} from "../../../../App";

const Dialog = (props: DialogDataType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default Dialog;