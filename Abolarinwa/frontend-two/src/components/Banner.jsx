import React from "react";

const Banner = ({content, btnText}) => {
    return (
        <>
            <div>
                <h1>This is a banner</h1>
                <h1>{content}</h1>
                <button>{btnText}</button>
            </div>
        </>
    )
}
export default Banner