import React from 'react';
import profile from '../assets/images/uday gautam.jpg';

const AboutMe = () => {
    return (
        <div className='container content'>
            <div className='row justify-content-center py-5'>
                <div className='col-md-9'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='me-5' src={profile} alt="profile" />
                        <p>Hello, my name is Uday Gautam and welcome to my portfolio! I am attending University of Phoenix where I am obtaining my bachelors degree. I have graduated from University of Berkeley from an extensive full stack web developement bootcamp. After attending the bootcamp, I have realized how much I enjoy coding and how much more you are able to learn in the tech industry. My goal is to have a career in the tech field. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe