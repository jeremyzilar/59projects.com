import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, brandFonts } from "@/lib/og";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { SITE_NAME } from "@/content/site";

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: OgImageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const fonts = await brandFonts();

  if (!project) {
    return new ImageResponse(
      <OgCard bg="#f4f2ec" fg="#1a1916" title={SITE_NAME} />,
      { ...OG_SIZE, fonts }
    );
  }

  return new ImageResponse(
    (
      <OgCard
        bg={project.bg}
        fg={project.fg}
        eyebrow={project.number}
        title={project.title}
        subtitle={project.deck ?? project.description}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
