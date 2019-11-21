import React, {useContext, useState} from 'react'
import { AuthContext } from '../../auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if(auth.user !== null){
        return null
    }

    return (
        <React.Fragment>
            <h3>Criar nova conta</h3>
            <hr size='1' />
            {
                auth.createUser.createUserState.error !== '' &&
            <p>{auth.createUser.createUserState.error}</p>
            }
            <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' value={email} onChange={ evt => setEmail(evt.target.value)} className='form-control' id='email' placeholder='Informe o email' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Senha</label>
                <input type='password' value={password} onChange={ evt => setPassword(evt.target.value)} className='form-control' id='password' placeholder='Informe a senha' />
            </div>
            <button onClick={() => auth.createUser.createUser(email, password)}>Adicionar usuário</button>
        </React.Fragment>
    )
}

export default CreateUser