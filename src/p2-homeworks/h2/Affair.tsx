import React from 'react'
import {AffairType} from "./HW2";
import style from '../h2/Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    // const setPStyle = (priority: string) => {
    //     if(priority === 'high')  return style.pHigh
    //     else if(priority === 'middle') return style.pMiddle
    //     else return style.pLow
    // }
    const priorityClass = style[props.affair.priority]

    return (
        <div>
            {props.affair.name} : priority - <span className={priorityClass}>[{props.affair.priority}]</span>
            <button onClick={deleteCallback} className={style.button}>Delete</button>
        </div>
    )
}

export default Affair
