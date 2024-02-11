
'use client'
 
import { useEffect, useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function load() {
          const response = await fetch('http://localhost:4200/posts')
          const json = await response.json()
          setPosts(json)
        }
        load()
      }, [])

    return (
        <main>
            <h1>Posts</h1>
           
            <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>

        </main>

    )
}

// Posts.getInitialProps = async (ctx: NextPageContext) => {
//     const response = await fetch('http://localhost:4200/posts')
//     const posts = await response.json()


//     return { posts } //важно вернуть объект
// }