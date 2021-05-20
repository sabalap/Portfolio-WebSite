import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Interested = () => {
    return (
        <InterestedWrapper>
            <div className="container">
                <div className="interested">
                    <h2>
                        Interested in doing <br />
                        a project together?
                    </h2>
                    <div className="line"></div>
                    <Link to="/contact" className="contact-btn">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </InterestedWrapper>
    )
}
const InterestedWrapper = styled.section`
.interested{
    display:grid;
    grid-template-columns:365px auto 220px;
    align-items: center;
    grid-gap:50px;
    margin-bottom:100px;
    h2{
        max-width: 365px;
        color:rgb(51,50,61);
        font-size:40px;
        font-weight:700;
        line-height:45px;
    }
    .line{
        width:100%;
        height:1px;
        background-color: var(--color-grayish-dark-blue);
        opacity:0.3;
    }
    .contact-btn{
            background:transparent;
            color:var(--color-grayish-dark-blue);
            border: 1px solid var(--color-grayish-dark-blue);
            font-size:15px;
            letter-spacing:2px;
            font-weight:600;
            padding:16px 32px;
            transition:0.3s ease-in-out;
            text-align:center;
            &:hover{
                background-color: var(--color-grayish-dark-blue);
                color: var(--color-white);
            }
    }
}
@media (max-width:768px){
    .interested{
        grid-template-columns: 1fr;
        h2{
            margin: 0 auto;
        }
        .contact-btn{
            max-width: 200px;
            margin: 0 auto;
        }
    }
}
@media (max-width:550px){
    margin-top: 140px;
    .interested h2{
        text-align: center;
    }
}
`
export default Interested;