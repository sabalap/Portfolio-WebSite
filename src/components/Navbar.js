import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <NavWrapper>
            <div className="container">
                <Link to="/" className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" /></svg>
                </Link>
                <ul>
                    <li className="active">
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT ME
                        </Link>
                    </li>
                </ul>
            </div>
        </NavWrapper>
    )
}
const NavWrapper = styled.nav`
margin-top:40px;
margin-bottom:50px;
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
        height: 32px;
    }
    ul{
        display:flex;
        width: 380px;
        justify-content: space-between;
        li a{
            color:var(--color-grayish-dark-blue);
            transition:300ms ease-in-out;
            letter-spacing: 2px;
            &:hover{
                color:var(--color-cyan);
            }
            &:focus{
                 color:var(--color-cyan);
            }
        }
    }
}
`


export default Navbar;