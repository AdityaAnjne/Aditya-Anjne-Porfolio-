"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import ProjectModal, { type ProjectDetail } from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";

const EMAIL = "adityaanjne2004@gmail.com";
const GITHUB = "https://github.com/AdityaAnjne";
const LINKEDIN = "https://linkedin.com/in/aditya-anjne-43802b304";

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3";
};

const projects: Project[] = [
  {
    num: "01",
    name: "GreenLoop",
    stack: ["React", "Spring Boot", "Spring Security (JWT)", "JPA / Hibernate", "MySQL", "Gemini API", "Cloudinary"],
    desc: "A role-based agricultural marketplace connecting farmers, distributors, retailers, and customers through secure workflows.",
    details: "GreenLoop is a full-stack agricultural marketplace built around role-based access. It supports product and order management, secure transactions, RESTful APIs, AI-powered crop recommendations through the Gemini API, and cloud-based image handling with Cloudinary.",
    url: "https://green-loop-zeta.vercel.app",
    github: "https://github.com/AdityaAnjne/GreenLoop",
    highlights: ["react", "spring", "hibernate", "mysql", "googlegemini"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: "My Quiz App",
    stack: ["HTML", "CSS", "JavaScript", "Gemini API", "Prompt Engineering"],
    desc: "An AI-powered platform that creates personalised multiple-choice quizzes from a topic, difficulty level, and preferred language.",
    details: "My Quiz App generates multiple-choice questions with Gemini API based on the learner’s topic, difficulty level, and language preference. It includes real-time answer validation, AI-generated explanations, performance tracking, and an analytics dashboard in a responsive interface.",
    url: "https://my-quiz-app-drab.vercel.app",
    github: "https://github.com/AdityaAnjne/My-Quiz-App",
    highlights: ["javascript", "html5", "css", "googlegemini"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: "Student Management System",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API", "JUnit 5"],
    desc: "A production-ready REST API for managing student records, built with Spring Boot, JPA, and MySQL.",
    details: "A full-featured student management REST API with CRUD operations, search and course filters, input validation, consistent error responses, and tested service methods. The project modernises a Java and JDBC console application into a Spring Boot backend using Spring Data JPA and MySQL.",
    github: "https://github.com/AdityaAnjne/Student-Management-Spring-Boot-Project",
    highlights: ["openjdk", "spring", "hibernate", "mysql"],
    align: "left",
    section: "project3",
  },
];

function HeroWord({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return <span className={`hero-word ${className}`}><span style={{ animationDelay: `${delay}ms` }}>{text}</span></span>;
}

function SocialIcon({ href, label, github = false }: { href: string; label: string; github?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="hover" data-magnetic className="frost-icon" aria-label={label}>
      {github ? (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" /></svg>
      )}
    </a>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {!isMobile && <div className="fixed inset-0 z-0"><FrozenKeyboard /></div>}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span data-cursor="hover" className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap">Aditya Anjne</span>
            <span className="hidden md:inline-flex"><span className="status-pill">{t("header.availability")}</span></span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" data-cursor="hover" className="hidden md:inline-flex frost-btn !py-1.5 !px-3 !text-xs">GitHub</a>
          </div>
        </header>

        <SectionNav />
        <main className="relative z-10 pointer-events-none">
          <section data-kb-section="hero" className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14">
            {isMobile && <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto"><FrozenKeyboard mobile /></div>}
            <div className="mt-2 md:mt-20">
              <p className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up" style={{ ["--d" as string]: "0ms" }}>{t("hero.greeting")}</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.98]">
                <HeroWord text="Aditya" delay={120} /><br /><span className="text-ice-400">Anjne</span>
              </h1>
              <p className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up" style={{ ["--d" as string]: "520ms" }}>{t("hero.roleLine")}<br />{t("hero.tagline")}</p>
              <div className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up" style={{ ["--d" as string]: "700ms" }}>
                <a href="/aditya-anjne-resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor="hover" data-magnetic className="frost-btn frost-btn--primary">{t("hero.cv")}</a>
                <button type="button" data-cursor="hover" data-magnetic className="frost-btn" onClick={() => document.querySelector<HTMLElement>('[data-kb-section="contact"]')?.scrollIntoView({ behavior: "smooth", block: "start" })}>{t("hero.hire")}</button>
                <SocialIcon href={LINKEDIN} label="LinkedIn" />
                <SocialIcon href={GITHUB} label="GitHub" github />
              </div>
            </div>
            <div className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up" style={{ ["--d" as string]: "900ms" }}><span className="scroll-indicator"><span>{t("hero.scroll")}</span><span className="scroll-indicator__rail" /></span></div>
          </section>

          <section data-kb-section="stack" className="relative md:min-h-[120vh] p-6 sm:p-10 md:p-14">
            <div className="relative md:h-[90vh]"><div className="md:sticky md:top-28 text-center">
              <Reveal><h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">{t("stack.title")}</h2></Reveal>
              <Reveal delay={120}><p className="mt-3 text-sm sm:text-base text-ice-300">{isMobile ? t("stack.hintMobile") : t("stack.hint")}</p></Reveal>
              {isMobile && <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto pointer-events-auto">
                {SKILLS_FLAT.map((s) => <div key={s.slug} className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4 text-left"><svg viewBox="0 0 24 24" width="22" height="22" fill={`#${s.hex}`} className="flex-none mt-0.5" aria-hidden><path d={s.path} /></svg><div><p className="text-ice-50 font-medium text-sm">{s.title}</p><p className="text-ice-400 text-xs mt-0.5 leading-snug">{t(`keyboard.taglines.${s.slug}`)}</p></div></div>)}
              </div>}
            </div></div>
          </section>

          {projects.map((project) => <section key={project.num} data-kb-section={project.section} data-kb-highlights={(project.highlights ?? []).join(",")} className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden">
            <span aria-hidden className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${project.align === "left" ? "right-[-2vw]" : "left-[-2vw]"}`}>{project.num}</span>
            <div className={project.align === "left" ? "max-w-xl relative" : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"}><Reveal><p className="font-mono text-sm text-ice-400 mb-3">{project.num} · {t("projects.kicker")}</p></Reveal><Reveal delay={80}><h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">{project.name}</h2></Reveal><Reveal delay={180}><p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">{project.desc}</p></Reveal><Reveal delay={260}><div className={`flex flex-wrap gap-1.5 pointer-events-auto mb-5 ${project.align === "right" ? "md:justify-end" : ""}`}>{project.stack.map((skill) => <span key={skill} className="frost-chip">{skill}</span>)}</div></Reveal><Reveal delay={320}><div className={`flex flex-wrap gap-3 pointer-events-auto ${project.align === "right" ? "md:justify-end" : ""}`}>{project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" data-cursor="hover" data-magnetic className="frost-btn frost-btn--primary">Live project</a>}<button type="button" onClick={() => setActiveProject(project)} data-cursor="hover" data-magnetic className="frost-btn">{t("projects.viewMore")}</button></div></Reveal></div>
          </section>)}

          <section data-kb-section="contact" className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"><div className="max-w-xl relative"><Reveal><p className="font-mono text-sm text-ice-400 mb-3">{t("contact.kicker")}</p></Reveal><Reveal delay={80}><h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">{t("contact.title")}</h2></Reveal><Reveal delay={160}><p className="text-ice-200 mb-4">{t("contact.body")}</p><p className="text-ice-300 mb-10">+91 8120258293</p></Reveal><Reveal delay={240}><div className="flex flex-wrap gap-3 pointer-events-auto"><CopyEmail email={EMAIL} className="frost-btn frost-btn--primary">{t("contact.copyEmail")}</CopyEmail><a href={`mailto:${EMAIL}`} data-cursor="hover" className="frost-btn">{t("contact.openMail")}</a><a href={GITHUB} target="_blank" rel="noopener noreferrer" data-cursor="hover" className="frost-btn">{t("contact.github")}</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" data-cursor="hover" className="frost-btn">{t("contact.linkedin")}</a></div></Reveal></div><Reveal delay={320}><p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">{t("contact.footer")}</p></Reveal></section>
        </main>
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </SmoothScroll>
  );
}
