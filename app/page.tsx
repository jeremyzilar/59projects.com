import { getAllProjects, getHome } from "@/lib/content";
import { HomeView } from "@/components/HomeView";

export default async function HomePage() {
  const [projects, home] = await Promise.all([getAllProjects(), getHome()]);
  return <HomeView home={home} projects={projects} />;
}
