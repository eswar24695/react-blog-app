import { useEffect } from "react"
import { useNavigate, Link} from "react-router-dom"
import Header from "./header"

export default function UserProfile({user, posts}){
    const navigate = useNavigate()
    const handleFilter = (event) => {
        if(event.target.dataset.filterField=='comment'){
            if(event.target.dataset.ascending=='true'){
                posts.sort((a,b)=>a.comments.length-b.comments.length)
            }else{
                posts.sort((a,b)=>b.comments.length-a.comments.length)
            }
        }else{

        }
    }
    return (
        <div>
        <Header/>
        <main>
            
            <section className="bg-neutral-900 align-center p-3">
                <div className="card  my-3 text-neutral-100">
                    <div><img src="" alt="profilePic"/></div>
                    <h1>{user.name}</h1>
                    <p>mobile: {user.phone}</p>
                    <p>POSTS: {posts.length}</p>
                    <p>COMMENTS: {posts.reduce((a,post)=>a+(post.comments.length),0)}</p>
                </div>
            </section>
            <section className="w-80 mx-auto">
                <h2 className="fw-semibold fs-500">Posts</h2>
                <div className='container justify-content-center' onClick={handleFilter}>
                    <button className='bg-primary-100 text-neutral-100 px-3' data-filter-ascending={true} data-filter-field='date'>Ascending By Date</button>
                    <button className='bg-primary-100 text-neutral-100 px-3' data-filter-ascending={false} data-filter-field='date'>Descending By Date</button>
                    <button className='bg-primary-100 text-neutral-100 px-3' data-filter-ascending={true} data-filter-field='comment'>Ascending By Comment</button>
                    <button className='bg-primary-100 text-neutral-100 px-3' data-filter-ascending={false} data-filter-field='comment'>Descending By Comment</button>
                </div>
                {posts.map((post)=>(
                    <div key={post.id} className='container shadow p-3 my-3 text-primary-100 justify-content-between' onClick={()=>{navigate(`/Post/${post.id}`,{replace:true})}} >
                        <Link to={`/Post/${post.id}`}><div>{post.title}</div></Link>
                        <div>COMMENTS {post.comments.length}</div>
                    </div>
                ))}
            </section>
            
        </main>
        </div>
    )
}