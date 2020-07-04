import React, { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import logo from '../logo.svg';
import { Element } from 'react-scroll';


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
            {/* <div style={{position: 'absolute', fontSize: '400px', zIndex: 1, color:'#05386B'}} >
            <i class="fas fa-laptop-code"></i>
            </div> */}
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
