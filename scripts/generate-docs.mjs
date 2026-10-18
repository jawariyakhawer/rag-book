// Generates docs/ from scripts/syllabus.mjs and book.config.json
// Run: node scripts/generate-docs.mjs
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {course, week1, modules, extras} from './syllabus.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'book.config.json'), 'utf8'));
const docs = path.join(root, 'docs');

fs.rmSync(docs, {recursive: true, force: true});
fs.mkdirSync(docs, {recursive: true});

const pad = (n) => String(n).padStart(2, '0');
const slugify = (s) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const write = (file, text) => {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  fs.writeFileSync(file, text);
};

const tutorTip = `:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
`;

function topicBlock(tp) {
  let out = `## ${tp.t}\n\n${tp.en}\n\n:::info Roman Urdu\n${tp.ur}\n:::\n\n`;
  if (tp.code) out += '```python\n' + tp.code.join('\n') + '\n```\n\n';
  return out;
}

function projectBlock(projects) {
  const list = (items) =>
    items.map(([name, en, ur]) => `- **${name}**: ${en}\n  - *Roman Urdu:* ${ur}`).join('\n');
  return (
    `## Projects\n\n### Class-based projects\n\n${list(projects.class)}\n\n` +
    `### Home-based projects\n\n${list(projects.home)}\n\n`
  );
}

function weekPage(w, extraFm = '') {
  let out = `---\ntitle: "Week ${w.n}: ${w.title.replace(/"/g, '\\"')}"\nsidebar_label: "Week ${w.n}: ${w.title.replace(/"/g, '\\"')}"\n${extraFm}---\n\n`;
  out += `# Week ${w.n}: ${w.title}\n\n`;
  for (const tp of w.topics) out += topicBlock(tp);
  if (w.projects) out += projectBlock(w.projects);
  out += tutorTip;
  return out;
}

// 00 Welcome (docs home)
write(
  path.join(docs, '00-welcome.md'),
  `---
title: Welcome
sidebar_label: Welcome
slug: /
---

# ${cfg.bookTitle}: ${cfg.edition}

${cfg.tagline}.

This book follows the **AI and Data Science Syllabus** by Miss Javeria Hassan (SMIT, Saylani Mass IT Training). Every topic is explained in English and in Roman Urdu, and an AI tutor is always one click away.

| | |
|---|---|
| **Course duration** | ${course.duration} |
| **Course level** | ${course.level} |
| **Prerequisites** | ${course.prerequisites} |
| **Prepared for** | ${cfg.ownerName} |
| **Created by** | ${cfg.creator} |

## How this book is organized

| Module | Weeks |
|---|---|
| Course introduction and setup | Week 1 |
${modules.map((m) => `| Module ${pad(m.n)}: ${m.title} | Weeks ${m.range[0]} to ${m.range[1]} |`).join('\n')}

Each module ends with class-based projects, home-based projects and a presentation.

:::info Roman Urdu
Ye book Miss Javeria Hassan ke AI and Data Science syllabus ke mutabiq hai. Har topic English aur Roman Urdu dono mein samjhaya gaya hai. Kisi bhi doubt ke liye screen ke corner mein chat icon par click kar ke AI tutor se poochein.
:::

## Using the AI tutor

1. Click the chat icon at the bottom corner of any page.
2. Type your question in English or Roman Urdu.
3. The tutor answers using this book's content, with examples.

${tutorTip}`,
);

// Week 1
write(
  path.join(docs, '01-week-01-introduction.md'),
  weekPage(week1, 'sidebar_position: 1\n'),
);

// Modules
modules.forEach((m, mi) => {
  const dir = path.join(docs, `${pad(mi + 2)}-module-${pad(m.n)}-${m.slug}`);
  write(
    path.join(dir, '_category_.json'),
    JSON.stringify(
      {
        label: `Module ${pad(m.n)}: ${m.title}`,
        position: mi + 2,
        collapsed: true,
      },
      null,
      2,
    ) + '\n',
  );
  write(
    path.join(dir, 'index.md'),
    `---
title: "Module ${pad(m.n)}: ${m.title.replace(/"/g, '\\"')}"
sidebar_label: Overview
---

# Module ${pad(m.n)}: ${m.title}

**Weeks ${m.range[0]} to ${m.range[1]}**

${m.intro.en}

:::info Roman Urdu
${m.intro.ur}
:::

## Weeks in this module

${m.weeks.map((w) => `- Week ${w.n}: ${w.title}`).join('\n')}

${tutorTip}`,
  );
  m.weeks.forEach((w, wi) => {
    write(
      path.join(dir, `${pad(wi + 1)}-week-${pad(w.n)}-${slugify(w.title)}.md`),
      weekPage(w),
    );
  });
});

// Extras
write(
  path.join(docs, `${pad(modules.length + 2)}-extras.md`),
  `---
title: What Else We Will Learn
sidebar_label: What Else We Will Learn
---

# What Else We Will Learn

Beyond the technical modules, the course also builds the skills you need to get hired and to work as a freelancer.

${extras.map(([en]) => `- ${en}`).join('\n')}

:::info Roman Urdu
Technical modules ke ilawa course mein wo skills bhi sikhai jati hain jo job aur freelancing ke liye zaroori hain: LinkedIn profile, personal branding, MS Office, Google Docs/Slides/Sheets, Canva, har module ke baad presentations aur Freelancing (Upwork/Freelancer).
:::

${tutorTip}`,
);

const count = fs.readdirSync(docs, {recursive: true}).filter((f) => f.endsWith('.md')).length;
console.log(`Generated ${count} pages in docs/`);

// Data for the homepage module cards
const dataDir = path.join(root, 'src', 'data');
fs.mkdirSync(dataDir, {recursive: true});
fs.writeFileSync(
  path.join(dataDir, 'modules.json'),
  JSON.stringify(
    modules.map((m, mi) => ({
      n: m.n,
      title: m.title,
      weeks: `Weeks ${m.range[0]}-${m.range[1]}`,
      weekCount: m.weeks.length,
      summary: m.intro.en,
      path: `/docs/module-${pad(m.n)}-${m.slug}`,
    })),
    null,
    2,
  ) + '\n',
);
console.log('Wrote src/data/modules.json');
