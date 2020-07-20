import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

export const Main = () => {

    useEffect(() => {


    }, [])
    const closePage = (pageName) => {
        document.getElementById(`page${pageName}`).style.width = "0";
    }


    return (
        <>
        <div >
            <div id="animation-area">
                <div id="stars"></div>
                {/* <div id="stars2"></div> */}
            </div>
        </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <Grid container>
            <Grid xs={12}>
                <div id="title">
                    <div id="name">JOI</div>
                </div>
            </Grid>
            <Grid xs={12} style={{textAlign: 'center'}}>
                <div id="position">Front-end Developer</div>
            </Grid>
        </Grid>

       

            <div className="sidepage" id="page1">
                <span className="closebtn" onClick={() => closePage(1)}>&times;</span>
                <div>
                    Hello this is Skills Page
                    </div>
            </div>

            <div className="sidepage" id="page2">
                <span className="closebtn" onClick={() => closePage(2)}>&times;</span>
                <div>
                    Hello this is Project Page
                    </div>
            </div>

            <div className="sidepage" id="page3">
                <span className="closebtn" onClick={() => closePage(3)}>&times;</span>
                <div>
                    Hello this is Contact Page
                    </div>
            </div>

            {/* <ul className="box-area">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
           </ul> */}
        </>
    )
}
