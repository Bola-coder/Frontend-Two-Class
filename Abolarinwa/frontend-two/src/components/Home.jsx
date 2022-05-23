import React from 'react';
import Banner from './Banner';

const Home = () => {
    const handleClick = () =>  console.log("The button has been clicked")
    

    const handleClickTwo = (text) => {
        console.log(text)
    }
    return (
        <section style={{backgroundColor: "red", padding: "10px"}}>
            <h3>Home Page</h3>
            <Banner content="Home Banner" btnText="Home button"/>
            <button onClick={handleClick}>Click me and check your console</button>
            <button onClick= { () => handleClickTwo("Hello!!!")}>Click button Two</button>

        </section>
    )

}
export default Home;
