import React from "react";
import "./Resume.css";
import WorkExperience from "./WorkExperience";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Qualification</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {WorkExperience.map((val, id) => {
                        return (
                            <div className="timeline__item" key={id}>
                                <i className="icon-graduation"></i>
                                <span className="timeline__date">{val.yearsActive}</span>
                                <h3 className="timeline__title">{val.company}</h3>
                                <div className="timeline__text">
                                    {val.information.map((info, index) => (
                                        <p className="timeline__description" key={index}>
                                            {info}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Resume;
