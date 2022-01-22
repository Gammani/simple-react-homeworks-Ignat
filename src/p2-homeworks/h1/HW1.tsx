import React from 'react'
import Message from "./Message";
import avatar from "../../assets/img/avatar-bin.jpg"
import MessageAnswer from "./MessageAnswer";

const messageData = {
    avatar: avatar,
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div className='wrapper'>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
                {/*<MessageAnswer*/}
                {/*    avatar={messageData.avatar}*/}
                {/*    name={messageData.name}*/}
                {/*    message={messageData.message}*/}
                {/*    time={messageData.time}*/}
                {/*/>*/}
            <hr/>
        </div>
    )
}

export default HW1
