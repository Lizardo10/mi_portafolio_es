'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Competences = () => {
    const skills = [
        { 
            name: "Frontend",
            skills: [
                { id: 1, name: "React", image: "/react.png" },
                { id: 2, name: "Nextjs", image: "/nextjs.png" },
                { id: 3, name: "Angular", image: "nextjs-image-url" },
                
            ]
        },
        { 
            name: "Backend",
            skills: [
                { id: 3, name: "Node.js", image: "nodejs-image-url" },
                { id: 4, name: "Express", image: "express-image-url" }
            ]
        },
        { 
            name: "Tools",
            skills: [
                { id: 5, name: "Git", image: "git-image-url" },
                { id: 6, name: "Webpack", image: "webpack-image-url" }
            ]
        }
    ];



    return (
        <section id="competences" className="flex flex-col justify-between">
        {skills.map((category) => (
            <SkillCategory key={category.name} title={category.name} skills={category.skills} />
        ))}
    </section>
    );
};

const SkillCategory = ({ title, skills = [] }: { title: string, skills: any[] }) => {
    return (
        <div>
            <h3 className="bg-transparent m-0 text-lg text-center">{title}</h3>
            <div className="p-5 flex flex-wrap justify-center text-center">
                {skills.map((skill, index) => (
                    <Skill index={index} key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skill = ({ skill, index }: { skill: any, index: number }) => {
    const getRandom = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    const delay = getRandom(0, 1);
    const duration = getRandom(1, 6);
    const [displayText, setDisplayText] = useState(false);
    return (
        <motion.div
            style={{ width: "100%", height: "100%" }}
            animate={{ x: getRandom(-80, 80), y: getRandom(-60, 60) }}
            transition={{
                repeat: Infinity,
                repeatDelay: delay,
                duration: duration,
                repeatType: "reverse",
            }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
            }}
        >
            <div
                className="flex items-center flex-col w-52 md:w-28 rounded-lg p-1"
                onMouseEnter={() => setDisplayText(true)}
                onMouseLeave={() => setDisplayText(false)}
            >
                {displayText && (
                    <div
                        className="absolute z-2 bg-white text-black text-capitalize text-xs md:text-md"
                    >
                        {skill.name}
                    </div>
                )}
                <img
                  style={{ width: "100%", height: "100%" }}
                    src={skill.image}
                    alt={skill.name}
                />
            </div>
        </motion.div>
    );
};

export default Competences;
