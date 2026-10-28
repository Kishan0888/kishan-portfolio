import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { contact, profile } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full Stack Developer",
  email: `mailto:${contact.email}`,
  telephone: "+91-9525640866",
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "SEO Web Technology" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Dr. A.P.J. Abdul Kalam Technical University" },
  sameAs: [contact.linkedin, contact.github],
  knowsAbout: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Shopify"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Services />
        <Skills />
        <Journey />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
