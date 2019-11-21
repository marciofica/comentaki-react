import React from 'react';
import Comments from './components/Comments'
import NewComment from './components/Comments/NewComment'
import {AuthProvider} from './auth'
import CreateUser from './components/Users/CreateUser';
import UserInfo from './components/Users/UserInfo';
import UserLogin from './components/Users/UserLogin';

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <NewComment />
        <UserLogin />
        <div className='card mt-2'>
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
