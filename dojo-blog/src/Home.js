import { useState } from 'react';

const Home = () => {
    // create a variable that holds a list of objects
    const[blogs, setBlogs] = useState([
        {title: 'Website title #1', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Website title #2', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'website title #3', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                // key attribute is important so react can keep track of each item
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;