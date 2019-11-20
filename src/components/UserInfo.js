import React, {useState, useContext} from 'react'
import {AuthContext} from '../auth'

const FormDisplayName = ({displayName, user}) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({displayName: newDisplayName})
        }
    }
    return (
        <React.Fragment>
            <input type='text' value={newDisplayName} onChange={evt => setNewDisplayName(evt.target.value)} />
            <button type='button' onClick={save}>Alterar nome</button>
        </React.Fragment>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)
    
    if(auth.user === null) {
        return null
    }
    const {displayName} = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')

    const principalName = displayName || alternativeDisplayName
    

    return (
        <div className='m-3'>
            Olá {principalName}!
            <FormDisplayName displayName={principalName} user={auth.user} />
        </div>
    )
}

export default UserInfo