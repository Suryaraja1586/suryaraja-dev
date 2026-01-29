import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn,  FaInstagram} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'
import {FaXTwitter} from 'react-icons/fa6'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Suryaraja1586' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://hashnode.com/@suryaraja1586' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>

            <a href='https://www.linkedin.com/in/surya-raja-50926932a/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100061022347901' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/the_surya_raja_/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>

              <a href='https://www.instagram.com/the_surya_raja_/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaXTwitter></FaXTwitter>
            </a>

        </div>
    );
};

export default HeaderSocials;
