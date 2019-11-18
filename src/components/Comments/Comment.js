import React from 'react'
import Time from '../Time'

const Comment = ({comment}) => {
    return (
        <div className='p-1'>
            <blockquote className='blockquote'>
                <p className='mb-0'>{comment.content}</p>
                <footer className='blockquote-footer'>Comentado por: <cite title='Comentado por'>{comment.user.name} em <Time timestamp={comment.createdAt} /> </cite></footer>
            </blockquote>
        </div>
    )
}

export default Comment