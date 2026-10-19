import {
    siCss, siDbeaver, siGit, siGithub, siGithubcopilot, siGooglegemini,
    siHibernate, siHtml5, siJavascript, siMysql, siOpenjdk, siPostman,
    siReact, siSpring, siSpringboot,
} from "simple-icons";

// Use the supplied transparent Java logo on the keyboard and skill card.
const java = {
    title: "Java", slug: "java", hex: "ED8B00",
    image: "/images/java-logo.png",
};
const named = (icon, title, slug) => ({ ...icon, title, slug });
const springBoot = named(siSpringboot, "Spring Boot", "springboot");
const oracleDb = named(siDbeaver, "Oracle DB", "oracledb");
const geminiApi = named(siGooglegemini, "Gemini API Integration", "geminiapi");

// Position in this array is the key order, left to right and top to bottom.
export const SKILLS_GRID = [
    [java, named(siMysql, "MySQL", "mysql"), oracleDb, siJavascript, siReact],
    [named(siHtml5, "HTML", "html5"), siCss, siHibernate, named(siSpring, "Spring", "spring"), springBoot],
    [geminiApi, siGit, siGithub, siPostman, siGithubcopilot],
];
export const SKILLS_FLAT = SKILLS_GRID.flat();
