import React from "react";
import "../Styles/test.css";


const OS = () =>{
    return (
        <div>
            <h1>Mobile Operating System</h1>
            <ul>
            {["Android","Blackberry","iPhone","Windows Phone"].map((item) =>(
                <li>{item}</li>
            ))}
            </ul>
</div>

    );
};



const OS1 = () =>{
    return (
        <div>
              <h1>Mobile Manufacturers</h1>
              <ul>
            <li className='sq'>Samsung</li>
            <li className='sq'>HTC</li>
            <li>Micromax</li>
            <li className="cir">Apple</li>
            
            </ul>
        </div>
    );
};



export {OS,OS1};