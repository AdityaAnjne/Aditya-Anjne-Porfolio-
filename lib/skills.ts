import {
  siCss, siDbeaver, siGit, siGithub, siGithubcopilot, siGooglegemini, siHibernate, siHtml5,
  siJavascript, siMysql, siOpenjdk, siPostman, siPython, siReact, siSpring,
} from "simple-icons";

export type SkillIcon = { title: string; slug: string; path: string; hex: string };

const java: SkillIcon = { ...siOpenjdk, title: "Java", slug: "java" };
const springBoot: SkillIcon = { ...siSpring, title: "Spring Boot", slug: "springboot" };
const oracleDb: SkillIcon = { ...siDbeaver, title: "Oracle DB", slug: "oracledb" };

// Skills drawn directly from Aditya's resume. These power the interactive
// keyboard on desktop and the accessible skill cards on mobile.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [java, siPython, siJavascript, siHtml5, siCss],
  [siReact, springBoot, siHibernate, siMysql, oracleDb],
  [siGit, siGithub, siPostman, siGooglegemini, siGithubcopilot],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
