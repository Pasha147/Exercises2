
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      id?: string;
    };
  }){

// console.log('searchParams-->',searchParams?.id);
const post= await getDataId(searchParams?.id)
// console.log('post-->',post);
    return(
        <main>
            <h1>Post</h1>
            <pre>
        {
          JSON.stringify(post, null, 2)
        }
      </pre>
        </main>
    )
}

async function getDataId(id:string | undefined) {
  const response = await fetch(`http://localhost:4200/posts/${id}`)
  const post = await response.json()
  return post
}