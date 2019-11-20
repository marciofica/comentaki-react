import React, {useState, useContext} from 'react'
import { useDatabasePush } from '../../utils/customHooks'
import firebase from '../../utils/firebase'
import { AuthContext } from '../../auth'

const NewComment = () => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)

    if(auth.user === null){
        return null
    }

    const {displayName} = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')

    const createComment = ({createdAt}) => {
        if(comment !== '') {
            save({
                content: comment,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: auth.user.uid,
                    name: displayName || alternativeDisplayName
                }
            })
            setComment('')
        }
    }
    return(
        <div>
            <textarea 
                    className='form-control mt-3'
                    value={comment} 
                    onChange={evt => setComment(evt.target.value)} />

            <button type='button' 
                    className='btn btn-sm btn-primary mt-2 mb-2' 
                    onClick={createComment} >Comentar</button>
        </div>
    )
}

export default NewComment