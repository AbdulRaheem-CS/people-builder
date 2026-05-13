import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhyJoin } from "@/components/landing/WhyJoin";
import { FAQ } from "@/components/landing/FAQ";
import { MidCTA, ShineCTA } from "@/components/landing/CTAs";
import { Resources } from "@/components/landing/Resources";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "People Builders — Where HR rebels build the future of work" },
      {
        name: "description",
        content:
          "Join a global community of People & HR leaders rethinking how teams work. Share resources, build playbooks, lead change.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <WhyJoin />
      <FAQ />
      <MidCTA />
      <ShineCTA />
      <Resources />
      <Footer />
    </main>
  );
}
