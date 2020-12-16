import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-wrapper'>

            <div className='container container-footer'>
                <div className='row'>
                    <div className='col-sm-4 privacy-policy privacy-policy-padding'>
                        <h4>
                            DigiMarketing LLC.
                        </h4>
                        <hr/>
                        <br/>
                        <ul className='list-unstyled'>
                            <li>615-000-0000 </li>
                            <br/>
                            <li>Nashville,Tennessee</li>
                            <br/>
                            <li>1111 Broadway, 37127</li>
                        </ul>
                    </div>
                    <div className='col-sm-4 privacy-policy privacy-policy-padding'>
                        <h4>
                            Social Media
                        </h4>
                        <ul className='list-unstyled'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Google</li>
                        </ul>
                    </div>
                    <div className='col-sm-4 privacy-policy'>
                        <h4>
                            Social Media
                        </h4>
                        <ul className='list-unstyled'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Google</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-sm copyright'>
                        &copy;{new Date().getFullYear()} DigiMarketing LLC. | All Rights reserved | Terms of Service  
                    </p>
                </div>
            </div>
        </div>    
    )
}

export default Footer
