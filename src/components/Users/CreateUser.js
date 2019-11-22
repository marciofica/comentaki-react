import React, {useContext, useState} from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
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
            <Button color="primary" id="toggler" className='mt-2 mb-2'>
                Criar nova conta
            </Button>
            {
                auth.createUser.createUserState.error !== '' &&
            <p>{auth.createUser.createUserState.error}</p>
            }
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    <CardBody>
                        <div className='form-group'>
                            <label htmlFor='createEmail'>E-mail</label>
                            <input id='createEmail' type='email' value={email} onChange={ evt => setEmail(evt.target.value)} className='form-control' placeholder='Informe o email' autocomplete="off" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='createPassword'>Senha</label>
                            <input id='createPassword' type='password' value={password} onChange={ evt => setPassword(evt.target.value)} className='form-control' placeholder='Informe a senha' autocomplete="off" />
                        </div>
                        <button className='btn btn-success' onClick={() => auth.createUser.createUser(email, password)}>Adicionar usuário</button>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </React.Fragment>
    )
}

export default CreateUser