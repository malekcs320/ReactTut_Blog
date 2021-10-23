import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
     
    const {data:blogs, isPending,error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <p>loading ya mahsoun ......</p>}
            {blogs && <BlogList blogs={blogs} title='all-blogs'></BlogList>}
        </div>
    );
}

export default Home;