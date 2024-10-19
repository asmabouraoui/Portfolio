import Footer from "@/components/footer/default-footer"; 
import TestimonialSection from "@/components/home-section/testimonial.section";
import Navbar from "@/components/navigation/navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import ContactTerminal from "@/components/ui/contact-terminal";
import IconCloud from "@/components/ui/icon-cloud";
import ParticlesBg from "@/components/ui/particles-bg";
import RevealSection from "@/components/ui/reveal-section";
import Section from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import WordRotate from "@/components/ui/word-rotate";
import { CAREER_EVENTS, TECHNICAL_SKILLS } from "@/lib/constants";
import connectMongo from "@/server/db";
import Testimonial from "@/server/db/models/testimonial";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  await connectMongo();
  const data = await Testimonial.find({ status: "APPROVED" });
  const testimonials = data.map((testimonial) => ({
    ...testimonial.toJSON(),
    _id: testimonial._id.toString(),
  }));
  
  return (
    <div className="">
      <Navbar />

      <section className="relative" id="hero">
        <ParticlesBg />
        <div className="container relative flex flex-col-reverse items-center justify-between gap-4 py-2 md:my-1 md:flex-row md:py-12 lg:py-16">
          <div className="relative space-y-4 text-center md:text-left">
            <p className="text-md md:text-xl">Hi 👋, I&apos;m</p>
            <p className="bg-gradient-to-r from-emerald-500 via-emerald-700 to-green-500 bg-clip-text text-4xl font-bold tracking-widest text-transparent md:text-7xl">
              Adly Bibi
            </p>
            <p className="text-md md:text-xl">
              A passionate computer engineer specializing in Business Intelligence
            </p>
            <WordRotate
              className="text-xl font-semibold md:text-2xl"
              words={[
                "DATA ENGINEERING",
                "BI SOLUTIONS",
                "ETL PROCESSES",
              ]}
            />
            <div className="flex justify-center gap-4 md:justify-start">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:min-w-48"
              >
                Get in touch
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:min-w-48"
                href="/resume/en.pdf"
                target="_blank"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="relative h-60 w-60 overflow-hidden rounded-full md:h-96 md:w-96">
            <BorderBeam borderWidth={3} />
            <Image
              src="/assets/hero.JPG"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              alt="Hero"
              priority
            />
          </div>
        </div>
      </section>

      <Section id="about">
        <h2 className="text-center text-2xl font-bold md:text-4xl">About Me</h2>
        <RevealSection
          className="text-center"
          text="Hey there!😊 I'm Adly Bibi, a computer engineer specializing in Business Intelligence. Over the years, I've gained expertise in tools like Talend, PowerBI, and SQL. 🚀 I'm passionate about crafting efficient BI solutions that empower organizations with actionable insights. I thrive on collaboration and innovation, all while enjoying a good cup of tea!🍵"
        />
      </Section>
      
      <Section>
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          My Journey
        </h2>
        <Timeline data={CAREER_EVENTS} />
      </Section>

      <Section>
        <h2 className="text-center text-4xl font-bold">Technical Skills</h2>
        <div>
          <IconCloud iconSlugs={TECHNICAL_SKILLS} />
        </div>
      </Section>
      
      <TestimonialSection testimonials={testimonials} />

      <Section id="contact">
        <ContactTerminal />
      </Section>

      <Footer />
    </div>
  );
}
