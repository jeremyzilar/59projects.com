---
number: "04"
title: "Designing and building a groundwater data platform for New Mexico"
description: "New Mexico's hydrogeologists needed a single platform to access, edit, and visualize decades of water data across the state. We helped the team ship a working version and build a process they can run on their own."
deck: "New Mexico's hydrogeologists needed a single platform to access, edit, and visualize decades of water data across the state. We joined an existing engagement with Lakeraven to help a talented but early-stage engineering team find their footing and ship a working product."
bg: "#BCF4E5"
fg: "#1C3550"
variant: "full"
externalUrl: "#"
media:
  - "/images/projects/nm-water-data/ocotillo-wells.jpeg"
  - "/images/projects/nm-water-data/ocotillo-map.jpeg"
  - "/images/projects/nm-water-data/ocotillo-well-detail.png"
  - "/images/projects/nm-water-data/ocotillo-projects.jpeg"
  - "/images/projects/nm-water-data/ocotillo-mobile.png"
credits:
  research: "Savanna Booth-Enoch, Shannon Hurley, Peter Rowland, Jeremy Zilar"
  product: "Savanna Booth-Enoch"
  design: "Jeremy Zilar"
  operations: "Komal Rasheed, Jason Nakai"
  development: "NMBGMR Water Data Engineering Team, Jeremy Zilar, Kimball Bighorse"
  NMBGMR_WaterDataEngineeringTeam: "tktk"
  dates: "2026"
  specialThanks: "Rachel Hobbs, Liz Lyons, Nick Tenorio, Stacy Timmonds, Shari Kelley"
buttons:
  - text: "NMBGMR"
    url: "https://geoinfo.nmt.edu/"
  - text: "Public Data"
    url: "https://newweaver.newmexicowaterdata.org/"
---

## The Problem

By the time we joined, a talented team, engineers from Lakeraven working alongside NMBGMR's own geologists, had already taken the platform from nothing to something that was working. We were brought on halfway through to help with product design and accessibility, and to help carry it across the finish line.

Like a lot of fast-moving early builds, it had grown ahead of the scaffolding around it. Large sections still said "coming soon," there wasn't yet a shared definition of what shipping V1 actually meant, and the team didn't yet have a deployment pipeline, code review standard, or sprint rhythm to lean on. The field hydrogeologists who would rely on the platform most weren't yet involved in the process of building the application.

## How We Worked

We started by defining what V1 actually meant, auditing the application and removing or hiding everything that wasn't ready, then setting up production and staging environments with a real deployment process behind them. Sprint planning, backlog refinement, retrospectives, and code review standards followed, giving the team a repeatable way to move work forward instead of building in the dark.

We also went into the field. User research with field hydrogeologists showed us how they actually worked, what the printed data sheets got wrong, and how the platform could better support their work. That research shaped a refactor of the front end onto more modern libraries and frameworks, and an engineering plan for making the platform's data fully editable by the people who use it.

## In-Person Workshops

We designed and facilitated a three-day roadmap workshop in Socorro, NM, bringing the engineering team, Bureau staff, and field hydrogeologists into the same room to work through what the platform still needed to become. The workshop produced a ten-pillar product roadmap that the Bureau now owns and runs against on its own.

![tktk, workshop photo](/images/projects/nm-water-data/tktk.jpeg)

## Collaborative AI Practice

At the Socorro workshop, we introduced a shared AI practice built around a context repository that lives in GitHub and grows with every pull request, turning AI-assisted development into something the whole team does together, not something any one person does alone.

The clearest proof of it came at the end of a user research session with field hydrogeologists. We took the full transcript, added it to the shared context repository, generated Jira tickets from it using an AI tool, and then walked the development team through watching Claude Code implement the changes live. Eight tickets. Ten minutes. Research to working software in a single session. That set the standard for how the team works going forward.

## What Shipped

![The Ocotillo platform's Projects view, rebuilt on the new front end.](/images/projects/nm-water-data/ocotillo-projects.jpeg)

A live V1 platform shipped, with real production and staging environments behind it. The team now runs its own sprint ceremonies and engineering practices without us in the room. The front end was rebuilt for geologists on modern frameworks, and there's an editing framework ready to roll out across the platform's core record types. A ten-pillar product roadmap, grounded in user research and stakeholder interviews, gives the Bureau a plan it can execute on its own. And a shared AI context repository, used by the full engineering team, keeps growing with every pull request.

## What We Learned

Getting a team unstuck is as much about creating a moment of celebration as it is about process. V1 shipping meant sending one email to the Bureau. That was enough. The team had been working in abstraction for nine months and needed to feel that something real had happened before they could move forward with confidence.