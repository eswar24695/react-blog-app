import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/homePage';
import MostLikedPost from './components/mostLikedPost';
import MostCommentedPost from './components/mostCommentedPost';
import UserProfile from './components/userProfile';
import PostPage from './components/postPage';
import { useMemo,useState,useEffect } from 'react';


function App() {
  const [users,setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((userdata)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((postsdata)=>{
          fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res=>res.json())
          .then((commentsdata)=>{
            postsdata.forEach((post)=>{post.comments=commentsdata.filter((comment)=>comment.postId==post.id)})
            console.log("inMemo",postsdata);
            setUsers(userdata);
            setPosts(postsdata);
            setComments(commentsdata);})
          })
        })
  },[])
  return (
    <div className="App vw-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage users={users}/>}/>
          <Route path="/MostLikedPost" element={<MostLikedPost/>}/>
          <Route path="/MostCommentedPost" element={<MostCommentedPost posts={posts}/>}/>
          {users.map((user,i)=>(
            <Route path={`/Profile/${user.id}`} element={<UserProfile user={user} posts={posts.filter((post)=>post.userId===user.id)}/>}/>
          ))}
          {posts.map((post,i)=>(
            <Route path={`/Post/${post.id}`} element={<PostPage post={post} />}/>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
