---
number: "04"
title: "New Mexico Water Data"
description: "New Mexico Bureau of Geology, Minerals and Natural Resources"
deck: "New Mexico's groundwater researchers needed a single platform to access, edit, and visualize decades of water data across the state. I joined an existing engagement with LakeRaven to help a talented but early-stage engineering team find their footing and ship a working product."
bg: "#BCF4E5"
fg: "#1C3550"
variant: "full"
externalUrl: "#"
media:
  - "/images/projects/nm-water-data/ocotillo-wells.jpeg"
  - "/images/projects/nm-water-data/ocotillo-well-detail.png"
  - "/images/projects/nm-water-data/ocotillo-projects.jpeg"
  - "/images/projects/nm-water-data/ocotillo-mobile.png"
  - "/images/projects/nm-water-data/ocotillo-map.jpeg"
credits:
  research: "Savanna Booth-Enoch, Shannon Hurley, Peter Rowland, Jeremy Zilar"
  product: "Savanna Booth-Enoch"
  design: "Jeremy Zilar"
  operations: "Komal Rasheed, Jason Nakai"
  development: "NMBGMR Water Data Engineering Team, Jeremy Zilar, Kimball Bighorse"
  NMBGMR_ WaterDataEngineeringTeam: "tktk"
  dates: "2026"
  specialThanks: "Rachel Hobbs, Liz Lyons, Nick Tenorio, Stacy Timmonds, Shari Kelley,"
buttons:
  - text: "NMBGMR"
    url: "https://geoinfo.nmt.edu/"
  - text: "Public Data"
    url: "https://newweaver.newmexicowaterdata.org/"

---

## The problem

The platform existed but had never shipped. Large sections said "coming soon." The engineering team, mostly geologists who had taught themselves to code, had been building for nearly a year without a clear definition of what done meant. There were no reliable deployment pipelines, no code review standards, and no sprint rhythm. Meanwhile the field hydrogeologists who needed the platform most had never been asked what they actually needed from it.

## How I worked and did not worked

- Defined what V1 meant by auditing the application and removing or hiding everything that was not ready, then establishing production and staging environments with a clear deployment process
- Introduced sprint planning, backlog refinement, retrospectives, and code review standards that gave the team a repeatable way to move work forward
- Conducted user research with field hydrogeologists to understand how they work in the field, what the printed data sheets get wrong, and what the platform needed to do better
- Refactored the front-end application to use more modern libraries and frameworks
- Designed the interaction patterns and engineering plan for making the platform's data fully editable by the people who use it
- Designed and facilitated a three-day roadmap workshop in Socorro that produced a ten-pillar product roadmap the Bureau owns going forward
- Introduced a shared AI practice including a context repository that lives in GitHub and grows with every pull request, turning AI-assisted development into a collective team capability

## What shipped

- A live V1 platform with real production and staging environments
- Sprint ceremonies and engineering practices the team now runs independently
- A geologist-facing front-end built on modern frameworks
- An editing framework ready to roll out across core record types
- A ten-pillar product roadmap grounded in user research and stakeholder interviews
- A shared AI context repository used by the full engineering team

## What I learned

Getting a team unstuck is as much about creating a moment of celebration as it is about process. V1 shipping meant sending one email to the Bureau. That was enough. The team had been working in abstraction for nine months and needed to feel that something real had happened before they could move forward with confidence.

The most powerful moment of the engagement came at the end of a user research session with field hydrogeologists. I took the full transcript, added it to the shared context repository, generated Jira tickets from it using an AI tool, and then walked the development team through watching Claude Code implement the changes live. Eight tickets. Ten minutes. Research to working software in a single session. That set the standard for how the team works going forward.
