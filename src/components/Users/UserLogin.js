import React, {useContext, useState} from 'react'
import { AuthContext } from '../../auth'

const UserLogin = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if(auth.user !== null){
        return null
    }

    return (
        <React.Fragment>
            {
                auth.signInUser.signInUserState.error !== '' &&
            <p>{auth.signInUser.signInUserState.error}</p>
            }
            <form className='form-inline my-2 my-lg-0'>
                <input type='email' value={email} onChange={ evt => setEmail(evt.target.value)} className='form-control mr-sm-1' id='email' placeholder='Informe o email' />
                <input type='password' value={password} onChange={ evt => setPassword(evt.target.value)} className='form-control mr-sm-2' id='password' placeholder='Informe a senha' />
                <button type='button' className='btn btn-outline-success my-2 my-sm-0' onClick={() => auth.signInUser.signInUser(email, password)}>Entrar</button>
            </form>
        </React.Fragment>
    )
}

export default UserLogin