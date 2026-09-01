// English-only copy for the portfolio.
export const DICT: Record<string, string> = {
  "picker.season": "Season",
  "seasons.spring": "Spring", "seasons.summer": "Summer", "seasons.autumn": "Autumn", "seasons.winter": "Winter",
  "nav.aria": "Sections", "nav.home": "Home", "nav.stack": "Skills", "nav.project": "Project", "nav.contact": "Contact",
  "header.availability": "Open to opportunities",
  "hero.greeting": "Hi, I am", "hero.roleLine": "Software Engineering Student.", "hero.tagline": "Building thoughtful full-stack applications with Java, Spring Boot, React, and AI.", "hero.cv": "View Resume", "hero.hire": "Contact me", "hero.scroll": "Scroll to explore", "hero.keysHint": "· hover over the keys",
  "stack.title": "Technical Skills", "stack.hint": "(hint: hover over a key)", "stack.hintMobile": "The tools I use to build reliable applications.",
  "projects.kicker": "project", "projects.viewMore": "View details", "projects.openSite": "Visit live project", "projects.viewCode": "View code", "projects.close": "Close", "projects.stackLabel": "Technology",
  "contact.kicker": "contact", "contact.title": "Let’s build something useful.", "contact.body": "I am open to software engineering internships and opportunities. Reach out and let’s talk.", "contact.copyEmail": "Copy email", "contact.openMail": "Send email", "contact.github": "GitHub", "contact.linkedin": "LinkedIn", "contact.emailToast": "Email copied", "contact.footer": "© 2026 Aditya Anjne. All rights reserved.",
  "keyboard.taglines.java": "Object-oriented foundations for robust applications.", "keyboard.taglines.python": "A versatile language for problem-solving and automation.", "keyboard.taglines.javascript": "Interactive experiences for the web.", "keyboard.taglines.html5": "The semantic structure behind every page.", "keyboard.taglines.css": "Responsive, polished interfaces.", "keyboard.taglines.react": "Reusable components for modern web apps.", "keyboard.taglines.springboot": "Enterprise-ready Java applications.", "keyboard.taglines.hibernate": "Persistence made practical with JPA.", "keyboard.taglines.mysql": "Relational data designed to perform.", "keyboard.taglines.oracledb": "Enterprise relational database management.", "keyboard.taglines.git": "Clear history and collaborative development.", "keyboard.taglines.github": "Sharing and shipping projects.", "keyboard.taglines.postman": "Testing APIs with confidence.", "keyboard.taglines.googlegemini": "Generative AI for useful product features.", "keyboard.taglines.githubcopilot": "AI-assisted development for faster iteration.",
};

export function translate(path: string): string { return DICT[path] ?? path; }
