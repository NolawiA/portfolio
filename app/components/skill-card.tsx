import React from "react";
import { Skill } from "../types";
import "./css/skill-card.css";

interface SkillCardProps {
    skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="skill-card">
            <div id="skill-card-header">
                <h3>{skill.name}</h3>
            </div>
            <div id="skill-card-image">
                <img src={"/devicons/" + skill.image} alt="Dev Icon" />
            </div>
        </div>
    );
};

export default SkillCard;
