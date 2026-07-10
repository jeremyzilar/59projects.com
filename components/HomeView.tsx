"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Prose } from "@/components/Prose";
import { Footer } from "@/components/Footer";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { useTheme } from "@/components/ThemeProvider";
import type { HomeContent, Project } from "@/lib/schema";

interface HomeViewProps {
  home: HomeContent;
  projects: Project[];
}

export function HomeView({ home, projects }: HomeViewProps) {
  const { isDark } = useTheme();
  const bg = isDark ? home.fg : home.bg;
  const fg = isDark ? home.bg : home.fg;

  const heroImages = home.heroImages ?? [];

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: bg, color: fg }}
    >
      <div className="relative isolate w-full">
        <HeroSlideshow images={heroImages} />

        <div className="h-[78px] w-full" />

        <div className="w-5/8 px-[clamp(20px,2.5vw,40px)] pt-60 pb-20">
          <h1
            className="text-[42px] leading-[1.05] font-medium tracking-[-0.02em] sm:text-5xl"
            style={{ color: home.headlineColor ?? fg }}
            dangerouslySetInnerHTML={{ __html: home.headline }}
          />
          <p
            className="mt-5 text-xl leading-[1.25] font-normal tracking-[-0.02em] pt-10 pr-40"
            style={{ color: home.subtextColor ?? fg }}
            dangerouslySetInnerHTML={{ __html: home.subtext }}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[10px] px-[10px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={
              isDark
                ? { ...project, bg: project.fg, fg: project.bg }
                : project
            }
          />
        ))}
      </div>

      <div className="w-full px-[clamp(20px,2.5vw,40px)] pt-11 pb-[26px]">
        <Prose
          html={home.bodyHtml}
          color={fg}
          className="max-w-[34em] text-[15px] leading-[1.6] font-medium opacity-70"
        />
      </div>

      <Footer color={`${fg}99`} />
    </div>
  );
}
