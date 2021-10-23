import { useHistory,useParams } from 'react-router-dom'
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory ();
    const handleDelete = () =>{
        fetch( 'http://localhost:8000/blogs/' +id, {
            method: 'DELETE'
        })
        .then(()=>
        history.push('/'))
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <p>loading ya mahsoun ......</p>}
            {blog && 
                
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
                

            }
            {!isPending && <button onClick={handleDelete}>delete blog</button>}
        </div>

    );
}

export default BlogDetails;
