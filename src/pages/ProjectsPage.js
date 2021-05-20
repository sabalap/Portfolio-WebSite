import React from "react";
import styled from "styled-components";
import designo from "../assets/portfolio/desktop/designo.png";
import comfy from "../assets/portfolio/desktop/comfy.png";
import artteo from "../assets/portfolio/desktop/artteo.png";
import gagua from "../assets/portfolio/desktop/gagua.png";
import phonestore from "../assets/portfolio/desktop/phone-store.png";
import vintage from "../assets/portfolio/desktop/vintage.png";
import pure from "../assets/portfolio/desktop/pure.png";
import fylo from "../assets/portfolio/desktop/fylo.png";
import huddle from "../assets/portfolio/desktop/huddle.png";
import movie from "../assets/portfolio/desktop/movie.png";
import quiz from "../assets/portfolio/desktop/quiz.png";
import easybank from "../assets/portfolio/desktop/easybank.png";
import { motion } from "framer-motion";
const Projects = () => {
    const pageVariants = {
        in: {
            y: 0
        },
        out: {
            y: "120px"
        }
    }
    const pageTransition = {
        duration: 0.5
    }
    return (
        <React.Fragment>
            <PortfolioWrapper>
                <motion.div className="container" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                    <div className="projects">
                        <div className="project">
                            <div className="img">
                                <img src={designo} alt="" />
                            </div>
                            <div className="details">
                                <h3>Designo</h3>
                                <p>Designo multi-page website (React JS)</p>
                                <a href="https://sleepy-shockley-7bd96d.netlify.app/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={comfy} alt="" />
                            </div>
                            <div className="details">
                                <h3>Comfy</h3>
                                <p>Comfy Store Site (React JS)</p>
                                <a href="https://vibrant-fermi-3d49a4.netlify.app" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={artteo} alt="" />
                            </div>
                            <div className="details">
                                <h3>Artteo</h3>
                                <p>Artteo (Html, Css, JS)</p>
                                <a href="https://eloquent-noyce-21e813.netlify.app" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={gagua} alt="" />
                            </div>
                            <div className="details">
                                <h3>Gagua Klinika</h3>
                                <p>Gagua Klinika (Html, Css, JS)</p>
                                <a href="https://sabalap.github.io/gagua-klinika/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={phonestore} alt="" />
                            </div>
                            <div className="details">
                                <h3>Phone Store</h3>
                                <p>Phone Store (React JS, Redux)</p>
                                <a href="https://amazing-borg-995448.netlify.app" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={vintage} alt="" />
                            </div>
                            <div className="details">
                                <h3>Vintage Tech</h3>
                                <p>Vintage Tech (React JS, Redux)</p>
                                <a href="https://inspiring-mcnulty-e5b676.netlify.app/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={pure} alt="" />
                            </div>
                            <div className="details">
                                <h3>Pure Bootstrap WebSite</h3>
                                <p>Pure Bootstrap WebSite (Html,Css,Bootstrap)</p>
                                <a href="https://sabalap.github.io/Pure-Bootstrap-Website/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={easybank} alt="" />
                            </div>
                            <div className="details">
                                <h3>EasyBank</h3>
                                <p>EasyBank WebSite (React JS)</p>
                                <a href="https://easybank-project.web.app/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={movie} alt="" />
                            </div>
                            <div className="details">
                                <h3>Movie</h3>
                                <p>Movie Search WebSite (React JS)</p>
                                <a href="https://hungry-dubinsky-0d7275.netlify.app/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={huddle} alt="" />
                            </div>
                            <div className="details">
                                <h3>Huddle</h3>
                                <p>Huddle WebSite (Html, Css)</p>
                                <a href="https://sabalap.github.io/Huddle-Landing-Page/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={quiz} alt="" />
                            </div>
                            <div className="details">
                                <h3>Quiz</h3>
                                <p>Quiz WebSite (React JS)</p>
                                <a href="https://dazzling-swanson-2d3ab7.netlify.app/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="img">
                                <img src={fylo} alt="" />
                            </div>
                            <div className="details">
                                <h3>Fylo</h3>
                                <p>Fylo WebSite (Html, Css)</p>
                                <a href="https://sabalap.github.io/Fylo-landing-page-with-two-column-layout/" target="_blank">VISIT WEBSITE</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </PortfolioWrapper>
        </React.Fragment>
    )
}
const PortfolioWrapper = styled.section`
 .line{
        width:100%;
        height:1px;
        background-color: var(--color-grayish-dark-blue);
        opacity:0.3;
        margin-bottom: 70px;
    }
.project{
    display: grid;
    grid-template-columns: 500px 450px;
    align-items: center;
    grid-gap: 50px;
    justify-content: center;
    margin-bottom: 90px;
    border-top: 1px solid var(--color-grayish-dark-blue);
    .img img{
        max-width: 100%;
    }
    .details{
        text-align: center;
        h3{
            font-size: 45px;
            margin-bottom: 10px;
        }
        p{
            color: rgb(51,50,61);
            font-weight: 400;
            line-height: 32px;
            opacity: 0.8;
            font-size: 20px;
            margin-bottom: 40px;
        }
        a{
            color: var(--color-grayish-dark-blue);
            cursor: pointer;
            font-weight: 600;
            letter-spacing: 2px;
            line-height: 18px;
            padding: 16px 32px;
            border: 1px solid var(--color-grayish-dark-blue);
            background-color: transparent;
            transition: 0.2s ease-in-out;
            &:hover{
                background-color: var(--color-grayish-dark-blue);
                color: var(--color-white);
            }
        }
    }
}
@media (max-width:1024px){
    .projects{
        margin-top: 30px;
    }
    .project{
        grid-template-columns: 600px;
    }
}
@media (max-width:768px){
    .project{
        grid-template-columns: 400px;
    }
}
@media (max-width:450px){
    .project{
        grid-template-columns: 350px;
    }
}
@media (max-width:400px){
    .project{
        grid-template-columns: 300px;
    }
}
`
export default Projects;