import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" /></svg>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT ME</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <Link to="/">
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
background-color: var(--color-grayish-dark-blue);
.logo svg path{
    fill: var(--color-white);
}
.container{
    display:flex;
    padding-top:34px;
    padding-bottom:34px;
    align-items: center;
    justify-content: space-between;
    .left{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            margin-right:40px;
        }
        ul{
            display:flex;
            justify-content:space-between;
            width:320px;
            a{
                color: var(--color-white);
                transition:0.3s ease-in-out;
                &:hover{
                    color:var(--color-cyan);
                }
            }
        }
    }
    .right{
        width:140px;
        display: flex;
        justify-content: space-between;
        a{
            font-size:25px;
            color: white;
            transition:0.3s ease-in-out;
                &:hover{
                    color:var(--color-cyan);
                }
        }
    }
}
`
export default Footer;