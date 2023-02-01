import { useNavigate, Link } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"

export default function PostPage({post}){
    let navigate = useNavigate()
    return (
        <div>
            <Header/>
            <main>
                <section className="bg-neutral-900 p-3 text-neutral-100 align-center">
                    <h1 className="fs-500 my-3">{post.title}</h1>
                    <p className="w-50 mx-auto text-justify">{post.body}</p>
                    <p>Date: {post?.createdAt}</p>
                    <p>Author: {post.userId}</p>
                    <p>COMMENTS: {post.comments.length}</p>
                </section>
                <section className="p-3">
                    <h3 className="fs-500">Comments</h3>
                    {post.comments.length
                    ?(post.comments.map((comment)=>(<div key={comment.id} className='my-3 p-3 shadow'>
                        <Link to={`/Profile/${post.userId}`}><div><img src="" alt="profilePic"/></div>
                        <p className="">{comment.name}</p></Link>
                        <p className="fs-300"><span className="fs-400 fw-semibold">Comment: </span>{comment.body}</p>
                    </div>)))
                    :(<h1>No comments</h1>)}
                </section>
            </main>
            <Footer/>
        </div>
    )
}