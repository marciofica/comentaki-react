import React from 'react';
import Comments from './components/Comments'
import NewComment from './components/Comments/NewComment'
import {AuthProvider} from './auth'
import CreateUser from './components/Users/CreateUser';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className='container'>
        <CreateUser />
        <NewComment />
        <div className='card mt-2'>
            <div className='card-body'>
                <h5 className='card-title'>Comentários</h5>
                <Comments />
            </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App;
