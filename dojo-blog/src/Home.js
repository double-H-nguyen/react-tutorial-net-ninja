const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas')
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>

            {/* Use anonymous function to use value in function with instantiating it */}
            {/* reference event */}
            <button onClick={(e) => handleClickAgain('henry', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;