import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className='home'>
            { error && <div>{error}</div>}
            { isPending && <div>Carregando...</div>}
            { blogs && <BlogList blogs={blogs} title='Todas anotações' />}
        </div>
     );
}
 
export default Home;
