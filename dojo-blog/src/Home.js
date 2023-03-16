import { useState } from 'react';

const Home = () => {
    // array destructuring to grab 2 values
    // let name = 'mario' non-react way of declaring variable
    const [name, setName] = useState('mario'); // reactive
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(24);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}
 
export default Home;