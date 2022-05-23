import React from 'react';
import Banner from './Banner'
const About = () => {
    let isLoading = true;
    return (
        <section style={{backgroundColor: "blue", padding: "10px", color: "#fff", marginBottom: "20px"}}>
            <h3>About Page</h3>
            {/* {isLoading && <p>Page is loading</p>} */}
            {isLoading ? <p>Page is loading</p> : ""}
            <Banner content="About Banner" btnText="About button"/>

        </section>
    )

}
export default About;
