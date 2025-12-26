import SkillCard from "../components/skill-card";
import { skillsData } from "../data";
import { Skill } from "../types";
import "./css/skills.css";

export default function Skills() {
    return (
        <div id="skills">
            <div id="skills-container">
                <div id="skills-header">
                    <h1>Skills</h1>
                </div>
                <div id="skills-list">
                    {skillsData.map((skill: Skill, index: number) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};
