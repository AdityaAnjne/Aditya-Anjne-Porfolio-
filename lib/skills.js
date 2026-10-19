import {
    siClaude,
    siCss,
    siDbeaver,
    siEclipseide,
    siGit,
    siGithub,
    siGithubcopilot,
    siGooglegemini,
    siHibernate,
    siHtml5,
    siJavascript,
    siMysql,
    siOpenjdk,
    siPostman,
    siSpring,
} from "simple-icons";

const java = { ...siOpenjdk, title: "Java", slug: "java" };
const springBoot = { ...siSpring, title: "Spring Boot", slug: "springboot" };
const oracleDb = { ...siDbeaver, title: "OracleDB", slug: "oracledb" };
const geminiApi = { ...siGooglegemini, title: "Gemini API", slug: "geminiapi" };
const eclipseIde = { ...siEclipseide, title: "Eclipse IDE", slug: "eclipseide" };
const claudeCode = { ...siClaude, title: "Claude Code", slug: "claudecode" };

// The keyboard uses recognizable technology logos; the cards list every skill.
export const SKILLS_GRID = [
    [java, siJavascript, siHtml5, siCss, springBoot],
    [siHibernate, siMysql, oracleDb, geminiApi, siGit],
    [siGithub, eclipseIde, siPostman, siGithubcopilot, claudeCode],
];

export const SKILL_GROUPS = [
    {
        title: "Programming Languages",
        skills: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Core Concepts",
        skills: ["OOP", "DSA", "DBMS", "Collections Framework", "Exception Handling", "Multithreading"],
    },
    {
        title: "Java Technologies & Frameworks",
        skills: ["JDBC", "JPA", "Hibernate", "Spring", "Spring Boot"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "OracleDB"],
    },
    {
        title: "AI & Gen-AI",
        skills: ["Gemini API Integration", "Prompt Engineering"],
    },
    {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "Eclipse IDE", "Postman", "GitHub Copilot", "Claude Code"],
    },
];
