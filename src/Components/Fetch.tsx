import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const baseUrl="https://jsonplaceholder.typicode.com"
interface Post{
    id:number
    title:string
}
function Fetch() {
    const [isLoading,setIsLoading]=useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const fetchPosts=async ()=>{
        setIsLoading(true)
        const response=await fetch(`${baseUrl}/posts`);
        const posts=await response.json() as Post[]
        setPosts(posts)
        setIsLoading(false)



    }
    useEffect(()=>{
        fetchPosts()
    },[])

    if(isLoading){
        return <div className=""><h1>Carregando...</h1></div>
    }
    return (
        <div>
            <h1>Data fetching in React</h1>
            <ul>
                
                {posts.map((post)=>{
                    return <li key={post.id}><Link to={`profile/${post.id}`}>{post.title}</Link></li>
                }
                )}
            </ul>

        </div>
    )
}

export default Fetch