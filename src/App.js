import React from 'react';
import Comments from './components/Comments'
import NewComment from './components/Comments/NewComment'
import {AuthProvider} from './auth'
import CreateUser from './components/CreateUser';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <NewComment />
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Comentários</h5>
                <UserInfo />
                <Comments />
                <CreateUser />
            </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App;
