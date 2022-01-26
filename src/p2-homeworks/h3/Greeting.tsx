import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    showError: () => void
    hideError: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter, showError, hideError} // деструктуризация пропсов
) => {
    const inputClass = error ? style.errorInput : ''

    return (
        <div className={style.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={showError}
                    onFocus={hideError}
                />
                <div className={style.error}>{error}</div>
            </div>
            <button onClick={addUser} className={style.button}>add</button>
            <span className={style.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
