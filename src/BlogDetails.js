import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }

    return ( 
        <div className='blog-details'>
            { isPending && <div>Carregando...</div>}
            { error && <div>{ Error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Escrito por { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Excluir</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;