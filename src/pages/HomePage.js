import React from "react";
import styled from "styled-components";
import homeImage from "../assets/homepage/desktop/image-homepage-hero@2x.jpg";
import { Link } from "react-router-dom";
import profile from "../assets/homepage/desktop/profile.jpg";
import Interested from "../components/Interested";
const Home = () => {
    return (
        <HomeWrapper>
            <div className="container">
                <div className="intro">
                    <div className="little-info">
                        <h2>
                            Hey, I’m Saba <br />
                            Lapanashvili and I <br />
                            love building <br />
                            beautiful websites
                        </h2>
                        <Link to="/" className="about-me-btn">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4" /><path opacity=".5" d="M0 5l8 4 8-4" /><path opacity=".25" d="M0 1l8 4 8-4" /></g></svg>
                            </div>
                            <div className="text">ABOUT ME</div>
                        </Link>
                    </div>
                </div>
                <div className="about-section">
                    <div className="img-profile">
                        <img src={profile} alt="" />
                    </div>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>
                            I’m a junior front-end developer looking for a <br />new role in an exciting company.
                            I focus on <br />writing accessible HTML, using modern CSS <br />practices and writing clean JavaScript.<br />
                            When writing JavaScript code,
                            I use React.<br />
                            I’m based in Tbilisi, GEORGIA.
                            When I’m not coding, <br />you’ll find me outdoors. <br />
                            I’d love you to check out my work.
                            </p>
                        <Link to="/projects" className="btn-cv">
                            GO TO PROJECTS
                        </Link>
                    </div>
                </div>
            </div>
            <Interested />
        </HomeWrapper>
    )
}
const HomeWrapper = styled.main`
.intro{
    background-image:url(${homeImage});
    height:600px;
    background-size: cover;
    position:relative;
    margin-bottom:150px;
    .little-info{
        position: absolute;
        background-color: var(--color-very-light-gray);
        left:0px;
        bottom:0px;
        max-width:360px;
        width:100%;
        height:320px;
        padding:10px;
        h2{
            font-size:35px;
            line-height:50px;
            font-weight:700;
            color: var(--color-grayish-dark-blue);
            margin-bottom:30px;
            margin-top: 20px;
        }
        .about-me-btn{
            display: flex;
            height:50px;
            max-width: 220px;
            &:hover .icon{
                background-color: #55A191;
            }
            &:hover .text{
                background-color: var(--color-cyan);
                font-weight:700;
            }
            .icon{
                width:33%;
                background-color: #1C3444;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:0.2s ease-in-out;
            }
            .text{
                width:67%;
                background-color: #203A4C;
                color:white;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing:1px;
                transition:0.2s ease-in-out;
            }
        }
    }
}
.about-section{
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items: center;
    grid-gap:60px;
    margin-bottom:130px;
    > div{
        height: 500px;
    }
    .img-profile img{
        max-width:100%;
        height:100%;
        object-fit: cover;
    }
    .about-me{
        padding-left:30px;
        padding-right:30px;
        border-top: 1px solid var(--color-border-gray);
        border-bottom: 1px solid var(--color-border-gray);
        h2{
            font-size:40px;
            font-weight:700;
            line-height:42px;
            color: rgb(51,50,61);
            margin-top:40px;
            margin-bottom:20px;
        }
        p{
            opacity:0.8;
            color:rgb(51,50,61);
            font-weight:400;
            font-size:18px;
            line-height:35px;
            margin-bottom:50px;
        }
        .btn-cv{
            background:transparent;
            color:var(--color-grayish-dark-blue);
            border: 1px solid var(--color-grayish-dark-blue);
            font-size:15px;
            letter-spacing:2px;
            font-weight:600;
            padding:16px 32px;
            transition:0.3s ease-in-out;
            &:hover{
                background-color: var(--color-grayish-dark-blue);
                color: var(--color-white);
            }
        }
    }
}
`
export default Home;