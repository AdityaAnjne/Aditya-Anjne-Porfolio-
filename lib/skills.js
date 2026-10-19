import {
    siCss, siDbeaver, siGit, siGithub, siGithubcopilot, siGooglegemini,
    siHibernate, siHtml5, siJavascript, siMysql, siOpenjdk, siPostman,
    siReact, siSpring,
} from "simple-icons";

// A small, original coffee-cup glyph for Java, rather than the OpenJDK logo.
const java = {
    title: "Java", slug: "java", hex: "ED8B00",
    path: "M7 7h10v5a5 5 0 0 1-10 0V7zm10 2h2a2 2 0 0 1 0 4h-2v-2h2V11h-2V9zM5 18h14v2H5v-2zm3-2h8v1H8v-1z",
};
const skill = (icon, title, slug) => ({ ...icon, title, slug });

export const SKILL_GROUPS = [
    { title: "Programming Languages", skills: [java, skill(siDbeaver, "SQL", "sql"), skill(siJavascript, "JavaScript", "javascript")] },
    { title: "Frontend Technologies", skills: [skill(siHtml5, "HTML", "html5"), skill(siCss, "CSS", "css"), skill(siReact, "React", "react")] },
    { title: "Backend Technologies & Frameworks", skills: [skill(siSpring, "JDBC", "jdbc"), skill(siHibernate, "JPA", "jpa"), skill(siHibernate, "Hibernate", "hibernate"), skill(siSpring, "Spring", "spring"), skill(siSpring, "Spring Boot", "springboot")] },
    { title: "Core Concepts", skills: [skill(siOpenjdk, "OOP", "oop"), skill(siOpenjdk, "DSA", "dsa"), skill(siDbeaver, "DBMS", "dbms"), skill(siOpenjdk, "Collections Framework", "collections"), skill(siOpenjdk, "Exception Handling", "exceptions"), skill(siOpenjdk, "Multithreading", "multithreading")] },
    { title: "Databases", skills: [skill(siMysql, "MySQL", "mysql"), skill(siDbeaver, "Oracle DB", "oracledb")] },
    { title: "AI & Gen-AI", skills: [skill(siGooglegemini, "Gemini API Integration", "geminiapi"), skill(siGooglegemini, "Prompt Engineering", "promptengineering")] },
    { title: "Developer Tools", skills: [skill(siGit, "Git", "git"), skill(siGithub, "GitHub", "github"), skill(siGithub, "VS Code", "vscode"), skill(siOpenjdk, "Eclipse IDE", "eclipse"), skill(siPostman, "Postman", "postman"), skill(siGithubcopilot, "GitHub Copilot", "githubcopilot"), skill(siGithub, "Claude Code", "claudecode")] },
];

// Keep a six-row keyboard so every listed skill is available on desktop too.
export const SKILLS_GRID = Array.from({ length: 6 }, (_, row) =>
    SKILL_GROUPS.flatMap((group) => group.skills).slice(row * 5, row * 5 + 5),
);
export const SKILLS_FLAT = SKILL_GROUPS.flatMap((group) => group.skills);
