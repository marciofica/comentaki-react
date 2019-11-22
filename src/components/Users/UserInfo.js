import React, {useState, useContext} from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {AuthContext} from '../../auth'

const FormDisplayName = ({displayName, user, signout}) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const [popoverOpen, setPopoverOpen] = useState(false)
    
    const toggle = () => setPopoverOpen(!popoverOpen)
    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({displayName: newDisplayName})
            setPopoverOpen(false)
            window.location.reload()
        }
    }
    return (
        <React.Fragment>
            
                <a href='#' id="Popover1" className="text-reset">{displayName}</a>
                <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                    <PopoverHeader>Alterar nome</PopoverHeader>
                    <PopoverBody>
                        <input type='text' className='form-control' value={newDisplayName} onChange={evt => setNewDisplayName(evt.target.value)} />
                        <button type='button' className='btn btn-sm btn-primary mt-1' onClick={save}>Alterar nome</button>
                    </PopoverBody>
                </Popover>
                <button className='btn btn-outline-danger ml-3 my-2 my-sm-0' type='button' onClick={signout}>Sair</button>
            
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
    

    return  <FormDisplayName displayName={principalName} user={auth.user} signout={auth.signout} />
}

export default UserInfo