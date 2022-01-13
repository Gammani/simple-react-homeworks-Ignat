import React from 'react';
import style from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={style.wrapperMessage}>

            <div className={style.blockWrapperAvatar}>
                <div className={style.blockAvatar}>
                    <div className={style.avatar}>
                        <img src={props.avatar} alt={"avatar"} />
                    </div>
                </div>
            </div>
            <div className={style.blockWrapperMessage}>
                <div className={style.blockMessage}>
                    <div className={style.message}>
                        <div className={style.messageName}>
                            {props.name}
                        </div>
                        <div className={style.messageText}>
                            {props.message}
                        </div>
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Message
