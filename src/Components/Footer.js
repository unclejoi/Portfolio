import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-scroll';


export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();



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
                            <Grid item xs={2}>
                                <Link spy={true} smooth={true} duration={500} offset={-200} to="home" className="active" id="home" >
                                    <Button>
                                        <i className="fas fa-home"></i>
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid item xs={8}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Link spy={true} smooth={true} duration={500} offset={-20} to="about" className="active" id="about" >
                                            <Button>
                                                <i className="fas fa-user"></i>
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Link spy={true} smooth={true} duration={500} offset={-20} to="skills" className="active" id="skills" >
                                            <Button>
                                                <i className="fas fa-tasks"></i>
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Link spy={true} smooth={true} duration={500} offset={-20} to="projects" className="active" id="projects" >
                                            <Button>
                                                <i className="fas fa-folder"></i>
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Link spy={true} smooth={true} duration={500} offset={-20} to="contact" className="active" id="contact" >
                                    <Button>
                                        <i className="fas fa-address-card"></i>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Footer;