import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useUseContext } from "../context/context";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useUseContext();
    return (
        <SidebarWrapper>
            <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
                <div className="sidebar-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" /></svg>
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <hr />
                <ul>
                    <li>
                        <Link to='/' onClick={closeSidebar}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeSidebar}>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeSidebar}>
                            CONTACT ME
                        </Link>
                    </li>
                </ul>
            </aside>
        </SidebarWrapper>
    )
}
const SidebarWrapper = styled.nav`
.sidebar {
    z-index:-1;
    transition: 0.4s ease-in-out;
    width:100%;
    height:100%;
    position:fixed;
    transform:translate(-100%);
    top:0;
    left:0;
    background: var(--clr-white);
    .sidebar-header{
        display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding:45px 30px;
    justify-items: end;
    img{
        height:25px;
    }
    .close-btn{
        color: var(--clr-red-light);
        font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    }
    }
}
.show-sidebar{
    z-index:999;
    transform:translate(0px);
    background-color: lightblue;
}
ul{
    margin-top:40px;
    padding:0px 40px;
    li{
        margin-bottom:15px;
    }
    li a{
        color:black;
        text-transform:uppercase;
        font-size:23px;
        opacity:0.7;
    }
}
`
export default Sidebar;