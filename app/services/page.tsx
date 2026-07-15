import type { Metadata } from "next";
import { getServices } from "@/lib/content";
import { ServicesView } from "@/components/ServicesView";
import { PageViewTracker } from "@/components/PageViewTracker";
import { SITE_NAME } from "@/content/site";

const TITLE = "Services";
const DESCRIPTION =
  "Research, strategy, service design, and the software itself, one connected practice instead of three separate handoffs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageViewTracker event="services_page_viewed" />
      <ServicesView services={services} />
    </>
  );
}
