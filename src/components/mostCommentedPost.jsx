import { useEffect } from 'react'
import { useMemo } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default function MostCommentedPost({posts}){
    useMemo(()=>{
        posts.sort((a,b)=>(b.comments.length-a.comments.length))
    },[posts])
    const navigate = useNavigate();
    const handleNavigation = ()=>{navigate(``)}
    return (
        <div>
            <Header/>
            <main>
                <section>
                {posts.map((post)=>(
                    <div key={post.id} className='container text-primary-100 justify-content-between p-3 shadow my-3 w-70 mx-auto' >
                        <Link to={`/Post/${post.id}`}><div>{post.title}</div></Link>
                        <div>COMMENTS {post.comments.length}</div>
                    </div>
                ))}
                </section>
            </main>
            <Footer/>
        </div>
    )
}