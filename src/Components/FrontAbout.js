import React from 'react'
import './FrontAbout.css'
import {IoShareSocialSharp} from 'react-icons/io5';
import {FaBusinessTime} from 'react-icons/fa';
import {FiRadio} from 'react-icons/fi';

function FrontAbout({
    lightBg,

}) {
    return (
            <div className= {lightBg ? 'about__background' : 'about__background color'}>
                <div  className='container container-bottom'>
                    <div className='row about-row'>
                        <div className='col-sm-12 col-about'>
                            <h1 className='head-line'>
                                About us
                            </h1>
                            <hr className='hr-line-about'></hr>
                        </div>
                    </div>

                    <div className='row about-row-2'>
                        <div className='col-sm-4 column-position'>
                            <div className='about-section'>
                                <div className='about-text-logo logo-color1'>
                                    <IoShareSocialSharp />
                                </div>
                                <div className='about-text'>
                                    <h3 className='about-text-header'>
                                        Social Media
                                    </h3>
                                    <p className='about-p'>
                                        using the most used platforms <br />
                                        we will spread the word through commercials
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 column-position'>
                            <div className='about-section'>
                                <div className='about-text-logo logo-color2'>
                                    <FaBusinessTime />
                                </div>
                                <div className='about-text'>
                                    <h3 className='about-text-header'>
                                        B2B : Business to Business
                                    </h3>
                                    <p className='about-p'>
                                        With our business to business approach, <br />we will enable to find some new clients for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 column-position'>
                            <div className='about-section'>
                                <div className='about-text-logo logo-color3'>
                                    <FiRadio />
                                </div>
                                <div className='about-text'>
                                    <h3 className='about-text-header'>
                                        Radio
                                    </h3>
                                    <p className='about-p'>
                                        Our Social Media experts will use various <br /> platforms to widen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default FrontAbout;
