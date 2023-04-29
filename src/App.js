import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);
  
useEffect(() => {
  db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    })))
  })
}, []);
  
  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        {}
      </Modal>


      <div className='appHeader'>
        <img className='appHeaderImage' src='https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'
        alt='' />


      </div>

      {
        posts.map(({id, posts}) => (
          <Post key={id} userName={posts.userName} caption={posts.caption} imageUrl={posts.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;