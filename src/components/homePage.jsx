import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
export default function HomePage({users}){

    return (
        <div>
            <Header/>
            <main className='vh-100'>
                <div className='container flex-wrap mx-auto w-8/12 align-center justify-content-center'>
            {users.map((user,i)=>(
                <div className='card shadow p-3 w-fit-content m-4' key={user.id}>
                    <div><img src="" alt="profilePic"/></div>
                    <p>{user.name}</p>
                    <button className='button bg-primary-100 text-neutral-100 px-3'><Link to={`/Profile/${user.id}`}>Click to view Profile</Link></button>
                </div>
            ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}