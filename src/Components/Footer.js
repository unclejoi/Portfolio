import React, { useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';


export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const [isOpen, setToggle] = useState(false)
    
    const openPage = (pageName) => {
        console.log(pageName)
        setToggle(!isOpen)
        if(isOpen){
            document.getElementById(`page${pageName}`).style.width = "0"
        }else{
            document.getElementById(`page${pageName}`).style.width = "100%"
        }

    }
    return (
        <>
            <div className="footer-container">
                <div className="soc-med">
                    <Container fluid="true">
                        <Grid container>
                            <Grid item xs={12}>
                                <a href="https://github.com/unclejoi/Covid-19-Data-tracker"><i className="fab fa-github-alt git"></i></a>
                                <a href="https://twitter.com/ChocoJoiii"><i className="fab fa-twitter git"></i></a>
                                <a href="https://www.linkedin.com/in/joi-emmanuel-holgado-154420181/"><i className="fab fa-linkedin-in git"></i></a>
                                <p className="copyright">&copy; &nbsp;{year} Joi Emmanuel U. Holgado</p>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className="bottom-nav">
                    <Container fluid="true">
                        <Grid container>
                            <Grid item xs={4}>
                                <Button 
                                onClick={() => openPage(1)}>
                                    <i className="fas fa-tasks"></i>
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                onClick={() => openPage(2)}>
                                    <i className="fas fa-folder"></i>
                                </Button>
                            </Grid>
                            <Grid item xs={4}
                            onClick={() => openPage(3)}>
                                <Button>
                                    <i className="fas fa-address-card"></i>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Footer;