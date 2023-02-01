import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(){
    const [selected,setSelected] = useState({authors:true,mostLikedPost:false,mostCommentedPost:false})
    function handleClick(event){
        if(event.target.tagName=="A"){
            let obj ={authors:false,mostLikedPost:false,mostCommentedPost:false}
            obj[event.target.dataset.name]=true
            setSelected(obj)
        }
    }
    return (
        <header className="primary-header vh-10 w-full bg-neutral-800 fw-semibold fs-500 text-neutral-700">
            <div className="container p-3 justify-content-between" onClick={handleClick}>
                <div className="logo justify-self-start text-neutral-100 td-none"><Link to='/'>JSOM</Link></div>
                <nav>
                    <ul role='list' className='d-flex g-3 '>
                        <li><Link data-name="authors" className={selected.authors?"selected":""} to='/'>Authors</Link></li>
                        <li><Link data-name="mostLikedPost" className={selected.mostLikedPost?"selected":""} to='/MostLikedPost'>MostLikedPost</Link></li>
                        <li><Link data-name="mostCommentedPost" className={selected.mostCommentedPost?"selected":""} to='/MostCommentedPost'>MostCommentedPost</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
    
}