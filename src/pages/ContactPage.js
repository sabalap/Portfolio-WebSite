import React from "react";
import styled from "styled-components";
import contactImg from "../assets/detail/desktop/contact-me.jpg";
const Contact = () => {
    return (
        <ContactWrapper>
            <div className="container">
                <div className="line"></div>
                <div className="touch">
                    <h2>Get in Touch</h2>
                    <p>
                        I’d love to hear about what you’re working on and how I could help. I’m
                        currently looking for a new role and am open to a wide range of opportunities.
                        My preference would be to find a position in a company.
                        I’m a hard-working and positive person who will always approach each task
                        with a sense of purpose and attention to detail.
                        Please do feel free to check out my online profiles below
                        and get in touch using the form.
                    </p>
                </div>
                <div className="phone-email">
                    <div className="phone">
                        <i className="fas fa-phone-square-alt"></i>
                        <p>+995 555 77 50 95</p>
                    </div>
                    <div className="email">
                        <i className="fas fa-envelope-square"></i>
                        <p>saba.lapanashvili15@gmail.com</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="contact-img">
                    <img src={contactImg} alt="" />
                </div>
                <div className="location">
                    <h2>LOCATION</h2>
                    <p>Tbilisi, Georgia</p>
                </div>
            </div>
        </ContactWrapper>
    )
}
const ContactWrapper = styled.section`
.container{
    margin-top:60px;
    .line{
        max-width:100%;
        height:1px;
        background:var(--color-border-gray);
        margin-bottom:50px;
    }
    .touch{
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-gap: 50px;
        margin-bottom:150px;
        h2{
            font-size: 40px;
            line-height: 4.2rem;
            letter-spacing: -0.36px;
            font-weight: 600;
            color:rgb(51,50,61);
        }
        p{
            color:rgb(51,50,61);
            font-size:16px;
            font-weight:400;
            line-height:30px;
            opacity:0.8;
        }
    }
    .phone-email{
        display: flex;
        justify-content: space-around;
        margin-bottom:50px;
        > div{
            display: flex;
            align-items: center;
            font-size:20px;
            i{
                margin-right:10px;
            }
        }
    }
    .location {
        text-align:center;
        margin-top:80px;
        margin-bottom:80px;
        h2{
            font-size:40px;
            letter-spacing:3px;
            margin-bottom:20px;
        }
        p{
            font-size: 18px;
        }
    }
    .contact-img{
        margin-top:70px;
        text-align:center;
    }
}
`
export default Contact;