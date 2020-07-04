import React from 'react';
import { Container, Grid } from '@material-ui/core';


export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <>
            <div className="footer-container">
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
        </>
    )
}

export default Footer;