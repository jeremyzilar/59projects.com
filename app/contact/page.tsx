import type { Metadata } from "next";
import { getContact } from "@/lib/content";
import { ContactView } from "@/components/ContactView";
import { PageViewTracker } from "@/components/PageViewTracker";
import { SITE_NAME } from "@/content/site";

const TITLE = "Contact";
const DESCRIPTION =
  "Get in touch with 59 Projects: book a meeting, call, or send an email.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default async function ContactPage() {
  const contact = await getContact();
  return (
    <>
      <PageViewTracker event="contact_page_viewed" />
      <ContactView contact={contact} />
    </>
  );
}
