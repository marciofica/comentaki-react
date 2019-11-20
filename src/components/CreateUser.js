import React, {useContext} from 'react'
import { AuthContext } from '../auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <React.Fragment>
            {JSON.stringify(auth.createUser)}
            <button onClick={() => auth.createUser.createUser('marcio@serviconanuvem.com.br', 'abc123')}>adicionar</button>
        </React.Fragment>
    )
}

export default CreateUser