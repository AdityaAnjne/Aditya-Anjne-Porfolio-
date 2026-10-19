import {
    siCss, siDbeaver, siGit, siGithub, siGithubcopilot, siGooglegemini,
    siHibernate, siHtml5, siJavascript, siMysql, siOpenjdk, siPostman,
    siReact, siSpring, siSpringboot,
} from "simple-icons";

// Custom coffee cup mark for Java.
const java = {
    title: "Java", slug: "java", hex: "ED8B00",
    path: "M7 7h10v5a5 5 0 0 1-10 0V7zm10 2h2a2 2 0 0 1 0 4h-2v-2h2V11h-2V9zM5 18h14v2H5v-2zm3-2h8v1H8v-1z",
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
