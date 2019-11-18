import React from 'react';
import Comments from './components/Comments'
import NewComment from './components/Comments/NewComment'

import firebase from './utils/firebase'

/*firebase
      .auth()
      .createUserWithEmailAndPassword('marciofica@gmail.com', 'abc123')
      .then(user => {
        //user.displayName = 'Márcio Figueiredo'
        //firebase.auth().updateCurrentUser(user)
      }) 

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    user.updateProfile({displayName: 'Márcio Figueiredo'})
  }
})
*/

function App() {
  return (
    <div className='container'>
      <NewComment />
      <div className='card'>
          <div className='card-body'>
              <h5 className='card-title'>Comentários</h5>
              <Comments />
          </div>
      </div>
    </div>
  )
}

export default App;
