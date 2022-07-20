import React, {ChangeEvent, useState} from 'react';
import s from "./AddItemForm.module.css";

type AddItemFormPropsType = {
    callback: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if (error)
            setError(null)
    }
    const onClickAdd = () => {
        if (title.trim() !== '')
            props.callback(title.trim())
        else
            setError('The window is empty or the value is entered incorrectly')
        setTitle('')
    }
    return (
        <>
            <input className={s.add_post_form_input}
                   placeholder={!!error ? error : ''}
                   value={title}
                   onChange={onChangeSetTitle}/>
            <div className={s.add_post_form_btns}>
                <button className={s.btn_add} onClick={onClickAdd}>Add post</button>
                <button className={s.btn_remove}>Remove</button>
            </div>
        </>
    );
};

export default AddItemForm;