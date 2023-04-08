import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // create a variable that holds a list of objects
    const[blogs, setBlogs] = useState([
        {title: 'Website title #1', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Website title #2', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'website title #3', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

    return ( 
        <div className="home">
            {/* calls a React component that we created */}
            {/* Add props to React component to pass data through */}
            <BlogList blogs={blogs} title="List of Blogs"/>
        </div>
    );
}
 
export default Home;