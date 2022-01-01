import React from 'react'
import { NavLink } from "react-router-dom";
import './styles/footer.css'
import { AiFillLinkedin, AiOutlineFacebook, AiFillPhone } from 'react-icons/ai';
import { ImMail3 } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';

const InputPage = () => {
    return (
        <div className='row'>
            <div className="input-group col-10">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                        <ImMail3 className="prefix" />
                        {/* <i className="fa fa-user prefix"></i> */}
                    </span>
                </div>
                <input type="mail" className="form-control" placeholder="E-mail ID" />
                <div className="input-group-append">
                    <button className="btn btn-info subscribe" type="button"><SiMinutemailer style={{fontSize: '20px'}} />&nbsp;Subscribe </button>

                    {/* <span  className="input-group-text "></span> */}
                </div>
            </div>
        </div>
    );
}

export default function Footer() {


    return (
        <footer className='footer-class'>
            <div className='row'>

                <div className='col-2 offset-1'>
                    <ul className='footerlist'>
                        <li className='footerhead'>Our Service</li>

                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/selling" >Selling</NavLink></li>
                        <li><NavLink to="/bidding" >Bidding</NavLink></li>
                        <li><NavLink to="/about" >About</NavLink></li>
                    </ul>
                </div>
                <div className='col-2 offset-1'>
                    <ul className='footerlist'>
                        <li className='footerhead'>Connect With Us</li>

                        <li>Follow Us on</li>
                        <li style={{ paddingLeft: '5px' }}><NavLink to="/about" ><AiFillLinkedin /> LinkedIn</NavLink></li>
                        <li style={{ paddingLeft: '5px' }}><NavLink to="/about" ><AiOutlineFacebook />  Facebook</NavLink></li>


                    </ul>

                </div>
                <div className='col offset-1'>

                    <ul className='footerlist'>
                        <li className='footerhead'>Get Alert</li>
                        <li>
                            <InputPage />
                        </li>
                    </ul>

                    <ul className='footerlist'>
                        <li className='footerhead'>Contact Us</li>
                        <li><AiFillPhone /> +91 00000-00000</li>
                    </ul>
                </div>


            </div>
            <div className="text-center">
                Copyright @ Web Shaper
            </div>
        </footer>
    )
}
