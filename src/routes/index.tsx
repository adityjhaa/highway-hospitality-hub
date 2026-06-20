import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type InputHTMLAttributes } from "react";
import {
  Bed,
  Calendar,
  ChevronRight,
  Clock,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PartyPopper,
  Phone,
  Star,
  Users,
  Utensils,
  Wine,
  X,
} from "lucide-react";

import asthaLogoAsset from "@/assets/astha-logo.png.asset.json";
import asthaBarAsset from "@/assets/astha-bar.png.asset.json";
import asthaBanquetAsset from "@/assets/astha-banquet.png.asset.json";
import asthaConferenceRoomAsset from "@/assets/astha-conference-room.png.asset.json";
import asthaCottageBloomsAsset from "@/assets/astha-cottage-blooms.png.asset.json";
import asthaCottageGardenAsset from "@/assets/astha-cottage-garden.png.asset.json";
import asthaDroneViewAsset from "@/assets/astha-drone-view.png.asset.json";
import asthaFoodAsset from "@/assets/astha-food.png.asset.json";
import asthaGardenViewAsset from "@/assets/astha-garden-view.png.asset.json";
import asthaNightGardenAsset from "@/assets/astha-night-garden.png.asset.json";
import asthaPremiumCottageAsset from "@/assets/astha-premium-cottage.png.asset.json";
import asthaRoomRetreatAsset from "@/assets/astha-room-retreat.png.asset.json";
import asthaRoomWindowAsset from "@/assets/astha-room-window.png.asset.json";
import asthaTrainAsset from "@/assets/astha-train.png.asset.json";
import asthaTropicalPathAsset from "@/assets/astha-tropical-path.png.asset.json";

const truesangLogo = asthaLogoAsset.url;
const barImg = asthaBarAsset.url;
const banquetImg = asthaBanquetAsset.url;
const conferenceImg = asthaConferenceRoomAsset.url;
const cottageBlooms = asthaCottageBloomsAsset.url;
const cottageGarden = asthaCottageGardenAsset.url;
const droneView = asthaDroneViewAsset.url;
const foodImg = asthaFoodAsset.url;
const gardenView = asthaGardenViewAsset.url;
const nightGarden = asthaNightGardenAsset.url;
const premiumCottage = asthaPremiumCottageAsset.url;
const roomRetreat = asthaRoomRetreatAsset.url;
const roomWindow = asthaRoomWindowAsset.url;
const trainRestaurant = asthaTrainAsset.url;
const tropicalPath = asthaTropicalPathAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astha Midway | Hotel, Cottages, Restaurant & Events" },
      {
        name: "description",
        content:
          "Discover Astha Midway by Truesang Pvt. Ltd. with inviting rooms, charming cottages, vibrant dining, a premium bar, banquet venues, and warm hospitality.",
      },
      {
        property: "og:title",
        content: "Astha Midway | Stay, Dine & Celebrate",
      },
      {
        property: "og:description",
        content:
          "A polished hospitality destination with scenic stays, lively dining, elegant events, and direct booking support.",
      },
      { property: "og:url", content: "https://truesang.com" },
    ],
    links: [{ rel: "canonical", href: "https://truesang.com" }],
  }),
  component: Index,
});

const PHONE = "+917407188881";
const WHATSAPP = "917407188881";
const EMAIL = "asthamidway@gmail.com";
const WEBSITE = "https://truesang.com";
const FACEBOOK = "https://www.facebook.com/share/1HWXdX9m2Q/";
const INSTAGRAM = "https://www.instagram.com/astha_midway/";
const MAPS = "https://www.google.com/travel/hotels/s/CSHcZQg3K3ZttSAn6";
const REVIEWS_LINK = "https://www.google.co.in/travel/hotels/entity/ChoIq4nt_MyxmPrxARoNL2cvMTFrcXkyX2M0dBAB/reviews";
const ADDRESS = "Astha Midway, India";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#bar", label: "Bar" },
  { href: "#banquet", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const HERO_SLIDES = [droneView, nightGarden, tropicalPath, gardenView];

const ROOMS = [
  {
    img: roomWindow,
    name: "Scenic Deluxe Room",
    desc:
      "Bright, airy interiors with expansive windows, soothing lighting, and garden-facing views that make every stay feel open and restful.",
    amen: ["Large View Windows", "Work Desk", "AC", "Wi‑Fi", "Tea Setup"],
    occ: "Ideal for couples & business travellers",
  },
  {
    img: roomRetreat,
    name: "Elegant Retreat Room",
    desc:
      "Warm tones, plush bedding, and a calm private atmosphere come together for an easy, comfortable overnight retreat.",
    amen: ["Plush Bedding", "Warm Interiors", "AC", "Wi‑Fi", "Smart Comfort"],
    occ: "Perfect for restful stopovers",
  },
  {
    img: premiumCottage,
    name: "Premium Cottage",
    desc:
      "A private cottage-style stay with cozy detailing, soft ambient lighting, and a tucked-away feel for a more intimate getaway.",
    amen: ["Private Setting", "Cottage Feel", "AC", "Wi‑Fi", "Premium Finish"],
    occ: "Best for quiet leisure stays",
  },
];

const REVIEWS = [
  {
    n: "Highway Travellers",
    t: "A beautifully maintained stop with welcoming rooms, landscaped surroundings, and a polished atmosphere throughout.",
    r: 5,
  },
  {
    n: "Family Guests",
    t: "The property feels warm and complete — from the stay experience to the dining and event spaces.",
    r: 5,
  },
  {
    n: "Event Visitors",
    t: "Elegant interiors, scenic grounds, and a professional setting make it easy to recommend for celebrations and gatherings.",
    r: 5,
  },
];

const GALLERY = [
  { src: cottageGarden, h: "h-80", cat: "Garden Cottage" },
  { src: cottageBlooms, h: "h-72", cat: "Bloomside Cottage" },
  { src: tropicalPath, h: "h-80", cat: "Garden Walkway" },
  { src: roomWindow, h: "h-72", cat: "Scenic Room" },
  { src: roomRetreat, h: "h-72", cat: "Elegant Interior" },
  { src: premiumCottage, h: "h-64", cat: "Premium Cottage Stay" },
  { src: trainRestaurant, h: "h-72", cat: "Train Theme Dining" },
  { src: barImg, h: "h-64", cat: "Restaurant & Bar" },
  { src: banquetImg, h: "h-72", cat: "Banquet Hall" },
  { src: conferenceImg, h: "h-64", cat: "Conference Space" },
  { src: foodImg, h: "h-64", cat: "Food Highlights" },
  { src: nightGarden, h: "h-80", cat: "Night Exterior" },
];

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Rooms />
      <Restaurant />
      <Bar />
      <Banquet />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0 min-w-0">
          <img src={truesangLogo} alt="Truesang Hotel & Resort logo" className="w-10 h-10 object-contain" />
          <span className="font-display text-xl font-semibold tracking-tight min-w-0">
            Astha <span className="text-gold">Midway</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition shadow-soft"
        >
          Book Now <ChevronRight className="w-4 h-4" />
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-border/40 text-foreground/85">
                {n.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              onClick={() => setOpen(false)}
              className="mt-3 text-center py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Astha Midway property view"
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${
              i === active ? "opacity-100 animate-ken-burns" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-primary-foreground py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs tracking-widest uppercase mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Truesang Pvt. Ltd. Hospitality
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Astha Midway
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Inviting rooms, charming cottages, vibrant dining, and elegant spaces for memorable gatherings.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#rooms" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-charcoal font-semibold shadow-luxe hover:scale-[1.02] transition">
            <Bed className="w-4 h-4" /> Explore Stays
          </a>
          <a href="#banquet" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition">
            <PartyPopper className="w-4 h-4" /> View Event Spaces
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 rounded-2xl overflow-hidden border border-white/15 max-w-3xl mx-auto backdrop-blur-sm">
          {[
            { n: "Scenic", l: "Stays" },
            { n: "Garden", l: "Cottages" },
            { n: "Signature", l: "Dining" },
            { n: "Elegant", l: "Events" },
          ].map((s) => (
            <div key={s.l} className="bg-charcoal/40 p-5 text-center">
              <div className="font-display text-2xl md:text-3xl text-gold">{s.n}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/75 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— {kicker} —</div>
      <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">{title}</h2>
      {sub ? <p className="mt-4 text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={cottageBlooms}
            alt="Flower-lined cottage exterior at Astha Midway"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-luxe w-full h-[450px] object-cover object-center"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl shadow-luxe p-6 border border-border max-w-[240px]">
            <div className="font-display text-3xl text-primary">Welcoming</div>
            <div className="text-sm text-muted-foreground mt-1">A polished stop where landscaped surroundings and warm stays come together beautifully.</div>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— About Us —</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            A refined pause on every <em className="text-gold not-italic">journey</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Astha Midway by Truesang Pvt. Ltd. brings together comfortable stays, thoughtfully maintained cottages,
            destination dining, and event-friendly spaces within a scenic, garden-framed property setting.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether guests arrive for a restful night, a family meal, a social gathering, or a business stopover,
            the experience is designed to feel smooth, warm, and memorable from arrival to departure.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { i: Bed, t: "Curated Stays" },
              { i: Utensils, t: "Destination Dining" },
              { i: Wine, t: "Premium Bar" },
              { i: PartyPopper, t: "Elegant Events" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-gradient-gold text-charcoal shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Stay"
          title="Featured Rooms & Cottages"
          sub="Comfortable, polished, and thoughtfully designed spaces for restful stopovers and easy getaways."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((r) => (
            <article key={r.name} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-luxe transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={r.img} alt={r.name} width={1280} height={960} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-medium text-primary flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> {r.occ}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-primary">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.amen.map((a) => (
                    <span key={a} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(r.name)}`}
                    className="flex-1 text-center py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
                  >
                    Book Now
                  </a>
                  <a href="#contact" className="flex-1 text-center py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Restaurant() {
  return (
    <section id="restaurant" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— Restaurant —</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Flavour with a lively <em className="text-gold not-italic">sense of place</em>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Astha Midway pairs everyday comfort with a memorable dining atmosphere — from train-theme experiences to colourful mocktails and crowd-pleasing dishes.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Family Dining", "Train Theme Ambience", "Freshly Prepared Dishes", "Signature Beverages", "Leisure Meals", "Celebration-Friendly Setting"].map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
              <Clock className="w-4 h-4 text-primary" /> Open for all-day dining
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
              <Phone className="w-4 h-4" /> Call for Reservation
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img src={trainRestaurant} alt="Train theme restaurant experience at Astha Midway" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-soft w-full h-72 object-cover col-span-2" />
          <img src={foodImg} alt="Food highlights at Astha Midway restaurant" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-soft w-full h-48 object-cover" />
          <img src={gardenView} alt="Property view beside the restaurant and stay area" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-soft w-full h-48 object-cover" />
        </div>
      </div>
    </section>
  );
}

function Bar() {
  return (
    <section id="bar" className="py-24 px-4 sm:px-6 bg-charcoal text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src={barImg} alt="Premium restaurant and bar presentation at Astha Midway" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-luxe w-full h-[450px] object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— The Bar —</div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            A vibrant corner to <em className="text-gold not-italic">relax and connect</em>.
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            Crafted beverages, polished presentation, and warm evening ambience make the bar experience feel social, stylish, and easy to enjoy.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {["Colourful signature drinks", "Comfortable lounge atmosphere", "Great for evening conversations", "Visually polished presentation"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm">
            <Clock className="w-4 h-4 text-gold" /> Open daily for evening unwind time
          </div>
        </div>
      </div>
    </section>
  );
}

function Banquet() {
  const [sent, setSent] = useState(false);

  return (
    <section id="banquet" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Banquet & Events"
          title="Elegant spaces for gatherings and meetings"
          sub="Stylish event interiors and dedicated meeting settings designed for celebrations, social functions, and professional gatherings."
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-luxe md:col-span-2">
              <img src={banquetImg} alt="Banquet interior at Astha Midway" width={1600} height={1066} loading="lazy" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Weddings", "Receptions", "Corporate Events", "Private Gatherings"].map((t) => (
                    <div key={t} className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-center font-medium">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img src={conferenceImg} alt="Conference room at Astha Midway" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-soft w-full h-64 object-cover" />
            <img src={nightGarden} alt="Night exterior suited for celebrations and evening events" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-soft w-full h-64 object-cover" />
          </div>

          <form className="lg:col-span-2 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-soft" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <h3 className="font-display text-2xl text-primary">Enquire Now</h3>
            <p className="text-sm text-muted-foreground mt-1">Reach us directly for banquet, conference, and celebration bookings.</p>
            {sent ? (
              <div className="mt-6 p-6 rounded-xl bg-secondary text-center">
                <div className="font-display text-xl text-primary">Thank you!</div>
                <p className="text-sm text-muted-foreground mt-2">Our team will contact you shortly.</p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <Input placeholder="Your Name" required maxLength={80} />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Mobile" type="tel" required maxLength={15} />
                  <Input placeholder="Email" type="email" maxLength={120} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Event Date" type="date" />
                  <Input placeholder="Guests" type="number" min={1} max={2000} />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="">
                  <option value="" disabled>
                    Event Type
                  </option>
                  {["Wedding", "Reception", "Birthday", "Conference", "Corporate Event", "Private Gathering", "Other"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <textarea placeholder="Special Requirements" maxLength={500} rows={3} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                <button type="submit" className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-soft">
                  Send Enquiry
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />;
}

function Reviews() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Guest Reviews" title="An experience guests remember" />
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.n} className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 text-gold mb-3">
                {Array.from({ length: r.r }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/85 italic leading-relaxed">“{r.t}”</p>
              <div className="mt-4 font-medium text-primary">— {r.n}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href={REVIEWS_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
            View Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Gallery" title="Inside Astha Midway" />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY.map((g, i) => (
            <div key={`${g.cat}-${i}`} className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-soft">
              <img src={g.src} alt={g.cat} loading="lazy" className={`w-full ${g.h} object-cover group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{g.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Contact" title="Plan your visit" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
            <h3 className="font-display text-2xl text-primary mb-6">Reach Us</h3>
            <div className="space-y-5">
              <ContactRow icon={MapPin} label="Location" value={ADDRESS} href={MAPS} />
              <ContactRow icon={Phone} label="Phone" value="+91 7407188881" href={`tel:${PHONE}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="+91 7407188881" href={`https://wa.me/${WHATSAPP}`} />
              <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={Globe} label="Website" value="truesang.com" href={WEBSITE} />
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <SocialLink href={FACEBOOK} icon={Facebook} label="Facebook" />
              <SocialLink href={INSTAGRAM} icon={Instagram} label="Instagram" />
              <SocialLink href={MAPS} icon={MapPin} label="Maps" />
              <SocialLink href={REVIEWS_LINK} icon={Star} label="Reviews" />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft flex flex-col">
            <img src={droneView} alt="Astha Midway aerial property view" width={1280} height={960} loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
                <MapPin className="w-4 h-4" /> Open Maps
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition">
                <ExternalLink className="w-4 h-4" /> Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-full bg-gradient-gold text-charcoal shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium break-words">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="block hover:opacity-80 transition">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary hover:bg-secondary/70 transition text-sm font-medium">
      <Icon className="w-4 h-4 text-primary" /> {label}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={truesangLogo} alt="Truesang Hotel & Resort logo" className="w-10 h-10 object-contain" />
            <span className="font-display text-xl text-white">Astha Midway</span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">Stay, dine, celebrate, and connect in a polished garden-framed destination by Truesang Pvt. Ltd.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Connect</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> +91 7407188881</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> {EMAIL}</li>
            <li className="flex items-start gap-2"><Globe className="w-4 h-4 mt-0.5 text-gold shrink-0" /> truesang.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Follow & Book</h4>
          <a href={`https://wa.me/${WHATSAPP}`} className="block w-full text-center py-2.5 rounded-full bg-gradient-gold text-charcoal font-medium mb-2">WhatsApp Us</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition mb-2">Instagram</a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" className="block w-full text-center py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition">Facebook</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Astha Midway. All rights reserved.</div>
          <div>Powered by <span className="text-gold">Truesang Pvt. Ltd.</span></div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}`} aria-label="WhatsApp" className="grid place-items-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-luxe hover:scale-110 transition">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE}`} aria-label="Call" className="grid place-items-center w-14 h-14 rounded-full bg-secondary text-primary shadow-luxe hover:scale-110 transition border border-border">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}