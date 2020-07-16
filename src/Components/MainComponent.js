import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
console.log('x')

export const Main = () => {

    useEffect(() => {


    }, [])
    const closePage = (pageName) => {
        let x = document.getElementById(`page${pageName}`).style.width = "0";
    }

    return (
        <>

            <div className="homepage">
                <Container>
                    <div className="jumbotron">
                        <span className="name">
                            {/* Hi, */}
                    </span>
                        <br />
                        <span className="name" style={{fontSize: '200px'}}>
                            Joi
                    </span>
                    </div>
                </Container>
            </div>
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
