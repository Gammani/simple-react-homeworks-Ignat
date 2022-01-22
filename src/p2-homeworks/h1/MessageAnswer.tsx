import React from 'react';
import style from './MessageAnswer.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function MessageAnswer(props: PropsType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={'avatar'} className={style.avatar} />

            <div className={style.angle}/>

            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default MessageAnswer
