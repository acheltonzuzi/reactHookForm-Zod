import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const baseUrl = "https://jsonplaceholder.typicode.com"
interface Post {
    id: number
    title: string
}
function Profile() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${baseUrl}/posts/${id}`);
            const posts = await response.json() as Post[]
            console.log(posts);
            setPosts(posts)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error);
            
            
        }
        
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if (isLoading) {
        return <div className=""><h1>Carregando...</h1></div>
    }

    return (
        <div>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>


        </div>
    )
}

export default Profile