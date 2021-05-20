
import BlogList from './blogList';
import useFetch from './useFetch';



const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //fetching

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id!==id);
    //     setBlogs(newBlogs);
    // }




    return (
       <div className="home">
           { error && <div>{ error }</div>}
            {isPending &&  <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
           {/* <BlogList blogs={blogs.filter((blogs) => blogs.author == 'mario')} title="Mario's blogs" /> 
           <button onClick={() => setName('Kankan')} >Change Names</button>
           <p>{name}</p>*/}

       </div>
      );
}
 
export default Home;