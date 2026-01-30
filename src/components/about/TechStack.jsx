import React from 'react';
import './TechStack.css';
import { FaPython, FaJava, FaReact, FaNodeJs, FaGit, FaChartBar } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiAppwrite, SiNextdotjs, SiFirebase } from 'react-icons/si';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';

const TechStack = () => {
    const techStack = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'REST API', icon: <TbApi /> },
        { name: 'Appwrite', icon: <SiAppwrite /> },
        { name: 'PowerBI', icon: <FaChartBar /> },
        { name: 'React Native', icon: <TbBrandReactNative /> },
        { name: 'Git', icon: <FaGit /> }

    ];

    return (
        <div className="tech__stack grid">
            <h2 className="section__title"> Tech Stack familiar to me </h2>

            <div className="tech__container">
                {techStack.map((tech, index) => (
                    <div className="tech__item" key={index}>
                        <div className="tech__icon">{tech.icon}</div>
                        <span className="tech__name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
