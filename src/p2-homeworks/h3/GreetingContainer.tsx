import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if(name) {
            setError('')
            addUserCallback(name.trim())
            alert(`Hello  ${name}!`)
            setName('')
        } else {
            setError('name is require!')
        }
    }
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            if(name) {
                addUser()
                setError('')
                console.log(error)
            } else {
                setError('name is require!')
            }
        }
    }
    const showError = () => {
        if(name === '') {
            setError('name is require!')
        }
    }
    const hideError = () => {
        setError('')
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
            showError={showError}
            hideError={hideError}
        />
    )
}

export default GreetingContainer
