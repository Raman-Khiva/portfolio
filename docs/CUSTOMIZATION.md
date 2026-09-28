# Developer Portfolio Customization Guide

This guide walks you step-by-step through customizing this portfolio with your personal background, projects, skills, career history, social links, and contact integrations.

---

## Quick Reference Checklist

| Section | File to Modify | What to Update |
| :--- | :--- | :--- |
| **Personal Branding & Hero** | `components/hero-section.tsx` | Bio, headline, preset AI prompts, stats |
| **Navigation & Social Links** | `components/header-nav.tsx` | GitHub, LinkedIn, Twitter/X, Resume link |
| **Featured Projects** | `components/projects-section.tsx` | Project list, tech stacks, live links, repo URLs |
| **Project Plan Modal** | `components/hero-section.tsx` (`PRESET_PLANS`) | Deep technical specs, architecture steps, timelines |
| **Skills Matrix** | `components/skills-matrix.tsx` | Technical competencies, skill categories, proficiencies |
| **Experience Timeline** | `components/experience-timeline.tsx` | Work history, positions, key achievements, metrics |
| **Contact Section** | `components/contact-section.tsx` | Email address, location, form submission handler |
| **Footer & Copyright** | `components/footer.tsx` | Copyright year, personal name, social links |

---

## 1. Updating Personal Bio & Hero Section

Open `components/hero-section.tsx`:

- Update your main headline, subtitle, and availability badge:
  ```tsx
  // Search for the bio badge & headline text in components/hero-section.tsx
  <span className="text-xs text-amber-400 font-mono font-medium">AVAILABLE FOR FULL-TIME ROLES</span>
  ```
- Adjust stats counters (e.g. Years Experience, Production Apps Built, Open Source Contributions).

---

## 2. Managing Featured Projects

Open `components/projects-section.tsx`:

Add or edit entries in the `FEATURED_PROJECTS` array:

```tsx
const FEATURED_PROJECTS = [
  {
    id: "my-custom-project",
    title: "Your Project Name",
    description: "Detailed description of what this application does and the key engineering challenges solved.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    status: "Live", // "Live" | "Beta" | "In Development"
    demoUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/your-repo",
    planKey: "ai-agent", // Links to a preset architecture in PRESET_PLANS
  },
  // Add more projects...
]
```

---

## 3. Editing Skills & Competencies

Open `components/skills-matrix.tsx`:

Update the skills categories (Frontend, Backend, AI/Data Engine, DevOps/Cloud):

```tsx
const SKILL_CATEGORIES = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 95, icon: CodeIcon },
      { name: "TypeScript", level: 90, icon: TsIcon },
      // ...
    ]
  },
  // ...
]
```

---

## 4. Editing Experience & Career History

Open `components/experience-timeline.tsx`:

Modify the career milestones data:

```tsx
const EXPERIENCES = [
  {
    company: "Company Name",
    role: "Senior Full-Stack Engineer",
    period: "2024 - Present",
    description: "Built scalable web apps handling high user traffic...",
    metrics: ["+40% performance improvement", "Reduced build time by 50%"],
    technologies: ["Next.js", "Node.js", "AWS", "Docker"],
  },
  // ...
]
```

---

## 5. Integrating Contact Form Backend

Currently, `components/contact-section.tsx` simulates form submission locally with a visual success toast. To connect to a live backend:

### Option A: Resend (Recommended for Next.js)
1. Create a Next.js Server Action or API Route at `app/api/contact/route.ts`.
2. Install Resend: `pnpm add resend`
3. Update `components/contact-section.tsx` `handleSubmit` method to `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`.

### Option B: Formspree / EmailJS
Replace the `handleSubmit` logic with your Formspree endpoint URL (`https://formspree.io/f/[YOUR_FORM_ID]`).

---

## 6. Favicon & Metadata Setup

- Replace `app/favicon.ico` with your custom favicon or brand logo.
- Update global page metadata in `app/layout.tsx` (title, description, OpenGraph preview cards).
