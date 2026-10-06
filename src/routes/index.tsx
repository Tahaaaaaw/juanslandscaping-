import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Wrench,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteForm } from "@/components/site/quote-form";
import { ReviewBadges } from "@/components/site/review-badges";
import { ProjectGallery } from "@/components/site/project-gallery";

import logoImg from "@/assets/logo.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import img1 from "@/assets/1.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img7 from "@/assets/7.jpg";

const TITLE = "Juan’s Lawn & Landscaping | Lawn Maintenance, Tree & Landscaping Services in Florida";
const DESCRIPTION =
  "Juan’s Lawn & Landscaping provides professional lawn maintenance, tree services, and custom landscaping across Florida. Call +1 941-565-5415 for a free quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const PHONE = "+1 941-565-5415";
const PHONE_DISPLAY = "+1 941-565-5415";
const EMAIL = "juanslawnlandscape@gmail.com";
const ADDRESS = "Serving Bradenton, Sarasota & Across Florida";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#quote" },
];

const SERVICES = [
  {
    name: "Lawn Maintenance & Turf Care",
    img: work3,
    copy: "Scheduled residential and commercial lawn mowing, precision edging, weed trimming, seasonal fertilizer programs, and debris cleanup tailored for Florida grasses.",
    points: [
      "Weekly / Bi-Weekly Mowing",
      "Precision Edging & Weed Eating",
      "St. Augustine & Zoysia Care",
      "Full Yard Debris Cleanup",
    ],
  },
  {
    name: "Tree Trimming & Palm Services",
    img: work4,
    copy: "Specialized palm tree trimming, frond skinning, canopy thinning, hazardous limb removal, and comprehensive hurricane season storm preparation.",
    points: [
      "Palm Trimming & Skinning",
      "Canopy Thinning & Shaping",
      "Hurricane Storm Prep",
      "Deadwood & Branch Removal",
    ],
  },
  {
    name: "Landscape Design & Plantings",
    img: work1,
    copy: "Custom Florida landscape design featuring vibrant tropical plants, flower beds, ornamental palms, sod installation, and lush curb appeal renovations.",
    points: [
      "Florida-Friendly Plantings",
      "Tropical Flower Beds",
      "Sod Installation & Replacement",
      "Shrub & Hedge Shaping",
    ],
  },
  {
    name: "Mulch, Rock & Bed Borders",
    img: work3,
    copy: "Premium dark hardwood mulch, pine straw, decorative river rocks, and clean weed-barrier borders designed to retain soil moisture under Florida sunshine.",
    points: [
      "Dark Brown & Black Mulch",
      "River Rock & Decorative Stones",
      "Weed Barrier Installation",
      "Crisp Landscape Edging",
    ],
  },
  {
    name: "Lanai Walkways & Hardscaping",
    img: work1,
    copy: "Stepping stone paths, pool cage & lanai gravel borders, decorative stone borders, and clean architectural walkways designed for Florida outdoor living.",
    points: [
      "Stepping Stone Pathways",
      "Lanai & Pool Cage Accents",
      "Gravel & Aggregate Surrounds",
      "Paver & Stone Borders",
    ],
  },
  {
    name: "Yard Cleanups & Property Maintenance",
    img: work2,
    copy: "Comprehensive seasonal cleanups, overgrown property restorations, leaf removal, hedge rejuvenation, and post-storm branch clearing across Florida.",
    points: [
      "Seasonal Deep Cleanups",
      "Overgrown Yard Restoration",
      "Brush & Debris Hauling",
      "Hedge & Shrub Rejuvenation",
    ],
  },
];

const REVIEWS = [
  {
    name: "Carlos & Maria R.",
    location: "Lakewood Ranch, Florida",
    text: "Juan and his team have been taking care of our lawn and palm trees in Lakewood Ranch for over 3 years. Always punctual, super polite, and our grass has never looked greener. The best lawn care in Florida!",
    job: "Lawn Maintenance & Palm Trimming",
  },
  {
    name: "Robert M.",
    location: "Sarasota, Florida",
    text: "Called Juan's Lawn & Landscaping for palm tree trimming and yard cleanup before hurricane season. Juan arrived promptly, trimmed our tall palms safely, and left the property spotless. 10/10 service!",
    job: "Palm Care & Yard Cleanup",
  },
  {
    name: "Lisa & David P.",
    location: "Bradenton, Florida",
    text: "We hired Juan to redesign our front yard and add new stepping stones along our pool enclosure. The transformation is stunning! High quality workmanship, transparent pricing, and dependable communication from day one.",
    job: "Landscape Design, Mulch & Lanai Walkway",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Established in 2018",
    copy: "Years of proven expertise delivering high-quality lawn care, tree services, and landscaping across Florida.",
  },
  {
    icon: Leaf,
    title: "Turf & Lawn Specialists",
    copy: "Expert mowing, edging, and seasonal turf care to keep Florida grasses green and weed-free.",
  },
  {
    icon: Trees,
    title: "Palm & Tree Experts",
    copy: "Safe, professional palm trimming, canopy pruning, and storm prep to protect your home and elevate curb appeal.",
  },
  {
    icon: Ruler,
    title: "Free On-Site Quotes",
    copy: "We visit your property, assess your landscape needs, and provide an honest, itemized, no-obligation quotation.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    copy: "Complete liability coverage and quality workmanship guarantees so your property and investment are 100% protected.",
  },
  {
    icon: Sparkles,
    title: "Meticulous Attention to Detail",
    copy: "From crisp straight edges and laser-clean blowdowns to immaculate flower bed borders, we treat your property like our own.",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: MapPin,
    title: "Free On-Site Assessment",
    copy: "We visit your property across Florida to inspect your lawn, garden beds, and trees, discussing your specific goals and budget.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Transparent & Itemized Estimate",
    copy: "We deliver a detailed, transparent proposal tailored to your lawn maintenance, palm trimming, or landscape design requirements.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Expert Execution & Reliable Care",
    copy: "Our experienced crew arrives on schedule with commercial-grade equipment, delivering exceptional results and leaving your yard pristine.",
  },
];

const FAQS = [
  {
    q: "What services does Juan’s Lawn & Landscaping provide across Florida?",
    a: "Juan’s Lawn & Landscaping provides professional lawn maintenance (mowing, edging, turf care), expert tree and palm trimming, landscape design, sod and mulch installation, lanai walkways, and full yard cleanups.",
  },
  {
    q: "What areas in Florida do you serve?",
    a: "We proudly serve homeowners and businesses across Florida, including Bradenton, Sarasota, Lakewood Ranch, Parrish, Palmetto, Venice, Ellenton, St. Petersburg, Tampa, and surrounding communities.",
  },
  {
    q: "Do you offer free estimates for lawn care and tree services?",
    a: "Yes! We offer 100% free, no-obligation on-site property evaluations and clear itemized estimates. Call us at +1 941-565-5415 or request a quote on this page.",
  },
  {
    q: "How often should Florida lawns be mowed and maintained?",
    a: "During the active Florida growing season (spring through fall), weekly mowing and edging is recommended to keep St. Augustine and Zoysia turf healthy and dense. Bi-weekly service is common during slower winter months.",
  },
  {
    q: "How often should palm trees and landscaping be trimmed in Florida?",
    a: "Palm trees should generally be trimmed and skinned 1–2 times per year, especially prior to hurricane season to prevent wind hazards. Hedges, shrubs, and ornamental plants benefit from trimming every 4–6 weeks during active growing months.",
  },
  {
    q: "How can I contact Juan’s Lawn & Landscaping to get started?",
    a: "You can call or text Juan directly at +1 941-565-5415, submit the quick quote form on this page, or email us at juanslawnlandscape@gmail.com. We respond promptly within 24 hours.",
  },
];

const AREAS = [
  "Bradenton",
  "Sarasota",
  "Lakewood Ranch",
  "Parrish",
  "Palmetto",
  "Venice",
  "Ellenton",
  "Osprey",
  "Nokomis",
  "North Port",
  "Anna Maria Island",
  "Longboat Key",
  "Siesta Key",
  "St. Petersburg",
  "Tampa Bay",
  "All Surrounding Florida Areas",
];

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative size-16 sm:size-20 md:size-24 rounded-full overflow-hidden border-2 sm:border-[3px] border-gold/90 shadow-lg shrink-0 bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-gold">
        <img
          src={logoImg}
          alt="Juan’s Lawn & Landscaping Logo"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
}

function BrandLogoFooter({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative size-14 sm:size-16 rounded-full overflow-hidden border-2 border-gold shadow-md shrink-0 bg-white">
        <img
          src={logoImg}
          alt="Juan’s Lawn & Landscaping Logo"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-forest-foreground">
          JUAN’S <span className="text-gold">LAWN & LANDSCAPING</span>
        </span>
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold/90">
          Lawn Maintenance · Tree Services · Florida
        </span>
      </div>
    </div>
  );
}

function GetQuote({
  label = "Get a Free Quote",
  variant = "quote",
}: {
  label?: string;
  variant?: "quote" | "forest" | "outlineLight";
}) {
  return (
    <Button asChild variant={variant} size="xl">
      <a href="#quote">
        {label} <ArrowRight />
      </a>
    </Button>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center px-2">
      <span className={`eyebrow ${light ? "text-gold" : ""}`}>
        <Leaf className="size-3.5" /> {eyebrow}
      </span>
      <h2
        className={`mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] ${
          light ? "text-forest-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-3 text-pretty text-sm sm:text-base ${
            light ? "text-forest-foreground/85" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
      <span className="leaf-rule mx-auto mt-6 block w-32 sm:w-40" />
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      {/* ---------- Top bar ---------- */}
      <div className="hidden bg-forest text-forest-foreground md:block border-b border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 py-2.5 text-xs">
          <span className="flex items-center gap-2 text-forest-foreground/90 font-medium">
            <MapPin className="size-3.5 text-gold" /> Professional Lawn Maintenance, Tree & Landscaping
            Services across Florida
          </span>
          <span className="flex items-center gap-5 text-forest-foreground/90 font-medium">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="size-3.5 text-gold" /> {EMAIL}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-gold" /> Est. 2018 · Trusted Florida Care
            </span>
            <a
              href="tel:+19415655415"
              className="flex items-center gap-2 font-bold text-forest-foreground hover:text-gold transition-colors"
            >
              <Phone className="size-3.5 text-gold" /> {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      {/* ---------- Navigation ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2 sm:py-2.5">
          {/* Mobile Call Icon (Left) */}
          <a
            href="tel:+19415655415"
            aria-label="Call Juan’s Lawn & Landscaping"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary hover:text-primary transition-colors lg:hidden shrink-0"
          >
            <Phone className="size-5 text-primary" />
          </a>

          {/* Logo */}
          <a href="#top" className="group flex items-center">
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="quote">
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button (Right) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary lg:hidden shrink-0"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <div className="border-t border-border bg-background px-4 sm:px-6 pb-6 pt-3 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-center shadow-xs"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+19415655415"
                className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-sm font-bold text-primary"
              >
                <Phone className="size-4" /> Call {PHONE_DISPLAY}
              </a>
              <Button asChild variant="quote" className="w-full">
                <a href="#quote" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden bg-forest text-forest-foreground">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${work1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[var(--gradient-forest)] opacity-95"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 -top-24 size-[34rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 md:py-24 text-center">
            <div className="rise flex flex-col items-center">
              {/* Official Logo Display in Hero */}
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 backdrop-blur-md">
                <img
                  src={logoImg}
                  alt="Juan’s Lawn & Landscaping"
                  className="size-6 rounded-full object-cover border border-gold"
                />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-gold">
                  Juan’s Lawn & Landscaping · Est. 2018
                </span>
              </div>

              <h1 className="mt-2 text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-forest-foreground">
                Lawn Maintenance & Tree Services
                <span className="block text-gold mt-1">Across Florida</span>
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-sm sm:text-base md:text-lg text-forest-foreground/90 font-normal leading-relaxed">
                Juan’s Lawn & Landscaping provides professional lawn maintenance, tree services, and
                custom landscaping across Florida. From scheduled precision turf care to expert palm
                trimming and tropical garden makeovers, we keep your property healthy and pristine year-round.
              </p>

              <ul className="mt-7 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
                {[
                  { icon: Leaf, t: "Lawn Maintenance" },
                  { icon: Trees, t: "Palm & Tree Care" },
                  { icon: Sparkles, t: "Landscape Design" },
                  { icon: ShieldCheck, t: "Licensed & Insured" },
                ].map((u) => (
                  <li
                    key={u.t}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-forest-foreground/20 bg-forest-foreground/10 px-2.5 py-2.5 sm:px-3.5 sm:py-3 text-forest-foreground shadow-sm"
                  >
                    <u.icon className="size-4 shrink-0 text-gold" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight">{u.t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3">
                <div className="w-full sm:w-auto">
                  <GetQuote label="Get Your Free Quote" />
                </div>
                <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
                  <a href="tel:+19415655415">
                    <Phone className="size-4" /> Call {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex justify-center">
                <ReviewBadges tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Horizontal quote form ---------- */}
        <section id="quote" className="relative z-10 bg-forest pb-12 sm:pb-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grain rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-[var(--shadow-lift)]">
              <div className="relative mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Get your free, no-obligation quote
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                    Free on-site evaluations across Florida · Fast response within 24 hours
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <BadgeCheck className="size-4 text-primary" /> Free Advice & Transparent Pricing
                </span>
              </div>
              <div className="relative">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Reviews / Testimonials Under Hero ---------- */}
        <section
          id="reviews"
          className="section-pad relative overflow-hidden bg-decor-radial grain border-b border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute -left-20 top-20 size-80 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-gold/8 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Customer Reviews"
              title="Trusted by Homeowners Across Florida"
              copy="Read feedback from our valued clients in Bradenton, Sarasota, Lakewood Ranch, and surrounding Florida communities."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute right-5 top-5 sm:right-6 sm:top-6 size-7 sm:size-8 text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85 font-normal">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block font-display text-base sm:text-lg font-bold text-foreground">
                      {r.name}
                    </span>
                    <span className="block text-xs font-semibold text-primary">{r.job}</span>
                    <span className="text-[0.72rem] text-muted-foreground">{r.location}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ReviewBadges />
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Highlights Strip ---------- */}
        <section className="relative overflow-hidden border-y border-border bg-cream py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { title: "Est. 2018", desc: "Trusted Florida Landscaping" },
                { title: "941-565-5415", desc: "Direct Call & Fast Response" },
                { title: "Lawn & Tree Care", desc: "Complete Property Upkeep" },
                { title: "5-Star Service", desc: "100% Client Satisfaction" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-xs"
                >
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">
                    {item.title}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground mt-0.5 block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About / Company Story ---------- */}
        <section id="about" className="section-pad relative overflow-hidden bg-background scroll-mt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative">
              <img
                src={work1}
                width={1408}
                height={912}
                loading="lazy"
                alt="Juan’s Lawn & Landscaping outdoor lanai walkway project in Florida"
                className="rounded-2xl object-cover shadow-[var(--shadow-lift)] aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-6 -right-3 hidden w-44 sm:w-52 rounded-xl border-4 border-card bg-card p-3 shadow-[var(--shadow-lift)] sm:flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="Juan’s Lawn & Landscaping Official Seal"
                  className="size-12 rounded-full object-cover border border-gold"
                />
                <div className="leading-tight">
                  <span className="block font-display text-xs font-bold text-foreground">
                    Juan’s Landscaping
                  </span>
                  <span className="text-[0.68rem] text-primary font-semibold">
                    Florida Established 2018
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">
                <Leaf className="size-3.5" /> Established 2018 · Serving Across Florida
              </span>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15]">
                Welcome to Juan’s Lawn & Landscaping
              </h2>
              <span className="leaf-rule mt-5 block w-32 sm:w-40" />
              <p className="mt-5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Founded in 2018, <strong>Juan’s Lawn & Landscaping</strong> provides professional lawn
                maintenance, tree services, and custom landscaping across Florida. With years of hands-on
                field expertise, our dedicated crew creates and maintains vibrant outdoor spaces for
                homeowners and commercial properties with unmatched attention to detail.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Whether you need dependable weekly lawn mowing, specialized palm tree trimming and
                storm preparation, or a custom tropical landscape design with fresh mulch, sod, and
                stepping stone walkways, we handle every job with pride and craftsmanship.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base font-semibold text-primary leading-relaxed">
                We take pride in keeping Florida lawns healthy, green, and beautifully manicured
                throughout every season.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { k: "Est. 2018", v: "Experienced lawn & tree care" },
                  { k: "Florida", v: "Serving Bradenton, Sarasota & beyond" },
                  { k: "100%", v: "Attention to detail & clean finish" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-border bg-card p-3 sm:px-4 sm:py-3 shadow-sm text-center sm:text-left"
                  >
                    <span className="block font-display text-lg sm:text-2xl font-bold text-primary">
                      {s.k}
                    </span>
                    <span className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground">
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <GetQuote />
                <Button asChild variant="outline" size="xl">
                  <a href="tel:+19415655415">
                    <Phone className="size-4" /> Call {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section
          id="services"
          className="section-pad relative overflow-hidden bg-decor-warm border-y border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[44rem] rounded-full bg-primary/4 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-1/3 size-72 rounded-full bg-gold/6 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What We Do"
              title="Our Lawn, Tree & Landscaping Services"
              copy="From precision scheduled lawn maintenance and expert palm trimming to custom tropical landscape redesigns and cleanups."
            />
            <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={s.img}
                      width={1024}
                      height={768}
                      loading="lazy"
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">
                      {s.copy}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.72rem] sm:text-xs font-semibold text-secondary-foreground"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Get a quote for {s.name.toLowerCase()} <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Request a Free Consultation" />
            </div>
          </div>
        </section>

        {/* ---------- Portfolio Gallery ---------- */}
        <section id="work" className="section-pad bg-forest text-forest-foreground scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              light
              eyebrow="Our Portfolio"
              title="Recent Landscaping & Lawn Projects"
              copy="Browse our real completed Florida lawn transformations, lanai walkways, palm tree care, and landscape designs across Florida."
            />
            <div className="mt-8 sm:mt-10">
              <ProjectGallery />
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Get a Quote for Your Property" />
            </div>
          </div>
        </section>

        {/* ---------- Why choose us ---------- */}
        <section id="why" className="section-pad relative overflow-hidden grain scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Why Choose Us"
              title="Why Florida Homeowners Trust Juan’s Lawn & Landscaping"
              copy="Dependable scheduling, transparent pricing, and expert craftsmanship for your lawn, trees, and landscape."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl bg-forest text-gold shadow-sm">
                    <w.icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">
                    {w.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section id="process" className="section-pad relative overflow-hidden bg-cream scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Our Process"
              title="Simple 3-Step Journey to a Flawless Property"
              copy="Easy communication, punctual arrival, and consistent quality from initial consultation to regular maintenance."
            />
            <div className="relative mt-12 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
              <span
                className="absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
                aria-hidden="true"
              />
              {PROCESS.map((p) => (
                <div
                  key={p.n}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm"
                >
                  <span className="relative grid size-12 sm:size-14 place-items-center rounded-full border-2 border-forest/15 bg-primary text-primary-foreground shadow-md">
                    <p.icon className="size-5 sm:size-6 text-gold" />
                  </span>
                  <span className="mt-4 sm:mt-5 block font-display text-xs font-bold tracking-[0.25em] text-primary">
                    STEP {p.n}
                  </span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">
                    {p.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Book Your Free Site Assessment" />
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section
          id="faq"
          className="section-pad relative overflow-hidden bg-decor-radial border-b border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-gold/6 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-10 size-80 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="mt-8 sm:mt-10">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:text-primary hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Service areas ---------- */}
        <section id="areas" className="section-pad relative overflow-hidden bg-cream grain scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Service Coverage"
              title="Serving Communities Across Florida"
              copy="Providing professional lawn maintenance, tree services, and landscaping throughout Southwest Florida and beyond."
            />
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-foreground/85 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <MapPin className="size-3.5 text-primary" /> {a}
                </span>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="relative overflow-hidden bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#top" className="inline-block group">
                <BrandLogoFooter />
              </a>
              <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-forest-foreground/85">
                Juan’s Lawn & Landscaping provides professional lawn maintenance, tree services, and
                custom landscaping across Florida. Established in 2018 with a commitment to quality,
                reliability, and beautiful outdoor spaces.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-forest-foreground/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-gold shrink-0" /> {ADDRESS}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="size-3.5 text-gold shrink-0" /> {EMAIL}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="size-3.5 text-gold shrink-0" /> {PHONE_DISPLAY}
                </span>
              </div>
              <div className="mt-5">
                <ReviewBadges tone="dark" />
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Our Services
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-forest-foreground/80">
                {SERVICES.map((s) => (
                  <li key={s.name}>
                    <a href="#services" className="hover:text-gold transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-forest-foreground/85">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-gold shrink-0" />
                  <a
                    href="tel:+19415655415"
                    className="hover:text-gold transition-colors font-bold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-gold shrink-0" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-gold transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    Mon–Sat: 07:00 – 19:00
                    <br />
                    Sunday: Emergency Service Available
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <GetQuote />
              </div>
            </div>
          </div>

          <span className="leaf-rule mt-10 sm:mt-12 block" />
          <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-forest-foreground/70 md:flex-row md:text-left">
            <span>© {new Date().getFullYear()} Juan’s Lawn & Landscaping. All rights reserved.</span>
            <span>
              Lawn Maintenance · Palm & Tree Care · Landscaping · Serving Across Florida · Est. 2018
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
