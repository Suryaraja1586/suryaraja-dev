import React from 'react';
import './About.css';
import Image from '../../assets/photo.png';
import Resume from '../../assets/SuryaRaja.pdf';
import AboutBox from './AboutBox';
import TechStack from './TechStack';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello ,I am Surya Raja from Poonamallee, Chennai.Currently Under Graduate
                            at Rajalakshmi Institute of Technology,Chennai.Pursuing my B.Tech in Artificial Intelligence and Data Science.
                            I am Currently Enthusiastic to work in many software related projects.
                            Aspiring Data Scientist with hands‑on experience in data visualization (Power BI, Tableau) .
                            Skilled in SQL, MongoDB, and building pipelines for modern web applications. Developed multiple projects across healthcare, e‑commerce, and AI domains.
                            Passionate about turning data into actionable insights and delivering impactful technology solutions.
                        </p>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
            <TechStack />

        </section>
    )
}

export default About;