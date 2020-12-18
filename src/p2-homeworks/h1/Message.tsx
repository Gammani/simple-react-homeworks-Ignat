import React from "react";
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.main}>
            <div className={s.ava}>
                <img src={props.avatar} alt={"ava"}/>
            </div>
            <div className={s.message}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;