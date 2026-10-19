import { siCss, siDbeaver, siGit, siGithub, siGithubcopilot, siGooglegemini, siHibernate, siHtml5, siJavascript, siMysql, siOpenjdk, siPostman, siPython, siReact, siSpring, } from "simple-icons";
const java = { ...siOpenjdk, title: "Java", slug: "java" };
const springBoot = { ...siSpring, title: "Spring Boot", slug: "springboot" };
const oracleDb = { ...siDbeaver, title: "Oracle DB", slug: "oracledb" };
// Skills drawn directly from Aditya's resume. These power the interactive
// keyboard on desktop and the accessible skill cards on mobile.
export const SKILLS_GRID = [
    [java, siPython, siJavascript, siHtml5, siCss],
    [siReact, springBoot, siHibernate, siMysql, oracleDb],
    [siGit, siGithub, siPostman, siGooglegemini, siGithubcopilot],
];
export const SKILLS_FLAT = SKILLS_GRID.flat();
