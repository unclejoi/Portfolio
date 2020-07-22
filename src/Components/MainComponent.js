import React from 'react';
import { Grid, Container, Card } from '@material-ui/core';
import { Element } from 'react-scroll';
import { Icon } from '@iconify/react';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import gitIcon from '@iconify/icons-logos/git-icon';
import Aos from 'aos';
import "aos/dist/aos.css"
import joi from '../assets/img/joi.jpg'


export const Main = () => {


    React.useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    const closePage = (pageName) => {
        document.getElementById(`page${pageName}`).style.width = "0";
        document.getElementById(`page${pageName}`).style.opacity = "0";
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

            <div className="homepage">
                <Element name="home" style={{ height: '100%' }}>
                    <Grid container>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <div id="title">
                                <div id="name">JOI</div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <div id="position">Front-end Developer</div>
                        </Grid>
                    </Grid>
                </Element>

                <Element name="about" style={{ marginTop: '200px'}} className="mobile">
                    <Grid container style={{marginBottom: '100px'}}>
                        <Grid item xs={12}>
                            <h1>ABOUT ME</h1>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} style={{ padding: '10px' }} data-aos="fade-right">
                            <div className="about-image-container">
                                <Card className="about-image">
                                    <img src={joi} style={{height: '200px', width: '200px'}} alt=""/> 
                                </Card>
                            </div>

                            <Card style={{ padding: '10px', paddingTop: '120px' }} >
                                <h2>Hi I'm Joi Emmanuel U. Holgado</h2>
                                <p> I'm a Front-end Developer based in the Philippines.</p>
                            </Card>
                        </Grid>
                    </Grid>
                </Element>


                <Element name="skills" style={{ marginTop: '200px' }} className="mobile">
                    <Grid container>
                        <Grid item xs={12}>
                            <h1>SKILLS</h1>
                        </Grid>
                    </Grid>
                    <Grid container className="mt-40" >
                        <Grid item xs={6} data-aos="fade-left">
                            <Icon icon={javascriptIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} className="animated-icon" />
                        </Grid>
                        <Grid item xs={6} data-aos="fade-right">
                            <Icon icon={typescriptIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-40">
                        <Grid item xs={6} data-aos="fade-right">
                            <Icon icon={reactIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} />
                        </Grid>
                        <Grid item xs={6} data-aos="fade-left">
                            <Icon icon={angularIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-40">
                        <Grid item xs={6} data-aos="zoom-in-up">
                            <Icon icon={nodejsIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} />
                        </Grid>
                        <Grid item xs={6} data-aos="zoom-in-down">
                            <Icon icon={gitIcon} style={{ height: '100px', width: '100px', borderRadius: '20px' }} />
                        </Grid>
                    </Grid>
                </Element>
{/* 
                <Element name="projects" style={{ marginTop: '200px' }} className="mobile">
                    <Grid container>
                        <Grid item xs={12}>
                            Projects
                        </Grid>
                    </Grid>
                </Element>

                <Element name="contact" style={{ marginTop: '200px' }} className="mobile">
                    <Grid container>
                        <Grid item xs={12}>
                            Contacts
                        </Grid>
                    </Grid>
                </Element>

 */}

            </div>



            <div className="sidepage" id="page1">
                <span className="closebtn" onClick={() => closePage(1)}>&times;</span>
                <Container>
                    <Grid container>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h1 style={{ color: 'white' }}>Hello This is Skills Page</h1>
                        </Grid>
                    </Grid>
                </Container>

            </div>

            <div className="sidepage" id="page2">
                <span className="closebtn" onClick={() => closePage(2)}>&times;</span>
                <Container>
                    <Grid container>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h1 style={{ color: 'white' }}>Hello This is Projects Page</h1>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div className="sidepage" id="page3">
                <span className="closebtn" onClick={() => closePage(3)}>&times;</span>
                <Container>
                    <Grid container>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h1 style={{ color: 'white' }}>Hello This is Contact Page</h1>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* <ul className="box-area">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
           </ul> */}
        </>
    )
}
