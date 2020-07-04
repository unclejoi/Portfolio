import React, { useEffect } from 'react';



export const Main = () => {

    useEffect(() => {
      

    }, [])
    const closePage = () => {
        console.log('clicked')
       let x = document.getElementById("page").style.width = "0";
        console.log(x);
    }

    return (
        <>
            <div className="homepage">
                <span style={{zIndex: 5}}> 
                  HI I'M JOI EMMANUEL 
                </span>
            </div>
           <div className="sidepage" id="page">
           <span class="closebtn" onClick={closePage}>&times;</span>
           </div>
           <ul className="box-area">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
           </ul>
        </>
    )
}
