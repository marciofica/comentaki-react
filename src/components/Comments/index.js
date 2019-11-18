import React from 'react';
import useDatabase from '../../utils/customHooks'
import Comment from './Comment'

const Comments = () => {
  const data = useDatabase('comments')
  if(!data){
      return <p>Nenhum comentário por aqui!</p>
  }
  const ids = Object.keys(data)
  if(ids.length === 0){
    return <p>Carregando...</p>
  }

  return ids.map(id => {
        return <Comment key={id} comment={data[id]} />
  })
}

export default Comments