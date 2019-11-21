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
            <h3>Acessar</h3>
            <hr size='1' />
            {
                auth.signInUser.signInUserState.error !== '' &&
            <p>{auth.signInUser.signInUserState.error}</p>
            }
            <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' value={email} onChange={ evt => setEmail(evt.target.value)} className='form-control' id='email' placeholder='Informe o email' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Senha</label>
                <input type='password' value={password} onChange={ evt => setPassword(evt.target.value)} className='form-control' id='password' placeholder='Informe a senha' />
            </div>
            <button type='button' className='btn btn-sm btn-primary' onClick={() => auth.signInUser.signInUser(email, password)}>Entrar</button>
        </React.Fragment>
    )
}

export default UserLogin