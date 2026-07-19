import {
  useEffect,
  useState,
  type ComponentType,
  type InputHTMLAttributes,
  type SVGProps,
} from "react";
import {
  Bed,
  ChevronRight,
  Clock,
  ExternalLink,
  Menu,
  PartyPopper,
  Phone,
  Star,
  Users,
  Utensils,
  Wine,
  X,
} from "lucide-react";

// Local asset imports
import truesangLogo from "./assets/astha-logo.png";
import barImg from "./assets/astha-bar.png";
import banquetImg from "./assets/astha-banquet.png";
import conferenceImg from "./assets/astha-conference-room.png";
import cottageBlooms from "./assets/astha-cottage-blooms.png";
import cottageGarden from "./assets/astha-cottage-garden.png";
import droneView from "./assets/astha-drone-view.png";
import foodImg from "./assets/astha-food.png";
import gardenView from "./assets/astha-garden-view.png";
import nightGarden from "./assets/astha-night-garden.png";
import premiumCottage from "./assets/astha-premium-cottage.png";
import roomRetreat from "./assets/astha-room-retreat.png";
import roomWindow from "./assets/astha-room-window.png";
import tropicalPath from "./assets/astha-tropical-path.png";
import trainRestaurantWideOne from "./assets/train-restaurant-wide-1.png";
import trainRestaurantWideTwo from "./assets/train-restaurant-wide-2.jpg";
import trainRestaurantTracks from "./assets/train-restaurant-tracks.jpg";
import trainRestaurantServiceGreen from "./assets/train-restaurant-service-green.jpg";
import trainRestaurantServiceWhite from "./assets/train-restaurant-service-white.jpg";

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

const TRAIN_RESTAURANT_SLIDES = [
  {
    src: trainRestaurantWideOne,
    alt: "Wide view of the train theme restaurant at Astha Midway",
    motionClass: "animate-cinematic-zoom",
  },
  {
    src: trainRestaurantTracks,
    alt: "Train tracks running through the themed dining area",
    motionClass: "animate-cinematic-pan",
  },
  {
    src: trainRestaurantServiceGreen,
    alt: "Mini train serving beverages at the table",
    motionClass: "animate-cinematic-zoom-soft",
  },
  {
    src: foodImg,
    alt: "Food presentation at Astha Midway",
    motionClass: "animate-cinematic-pan-soft",
  },
  {
    src: trainRestaurantWideTwo,
    alt: "Wide dining view of the train theme restaurant",
    motionClass: "animate-cinematic-zoom",
  },
];

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
  { src: trainRestaurantWideOne, h: "h-72", cat: "Train Theme Dining" },
  { src: trainRestaurantTracks, h: "h-72", cat: "Restaurant Tracks" },
  { src: trainRestaurantServiceGreen, h: "h-64", cat: "Beverage Service" },
  { src: trainRestaurantServiceWhite, h: "h-64", cat: "Train Table Service" },
  { src: barImg, h: "h-64", cat: "Restaurant & Bar" },
  { src: banquetImg, h: "h-72", cat: "Banquet Hall" },
  { src: nightGarden, h: "h-80", cat: "Night Exterior" },
];

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground scroll-smooth overflow-x-hidden">
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
          <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Truesang Hotel And Resort Pvt. Ltd.
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Astha Midway
        </h1>
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
            "Scenic Stay",
            "Garden Cottages",
            "Signature Dinning",
            "Elegant Events",
          ].map((s) => (
            <div key={s} className="bg-charcoal/40 p-5 text-center flex items-center justify-center min-h-24">
              <div className="font-display text-xl md:text-2xl text-gold leading-tight">{s}</div>
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
            Astha Midway by Truesang Hotel And Resort Pvt. Ltd. brings together comfortable stays, thoughtfully maintained cottages,
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((current) => (current + 1) % TRAIN_RESTAURANT_SLIDES.length);
    }, 2800);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="restaurant" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— Restaurant —</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Authentic dining with a memorable <em className="text-gold not-italic">train theme</em>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The Train Theme Restaurant brings together a refined dining atmosphere, real table-side train service, and polished food presentation within a clean, comfortable setting.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "Family Dining",
              "Real Train Service",
              "Freshly Prepared Dishes",
              "Signature Beverages",
              "Warm Indoor Ambience",
              "Premium Casual Setting",
            ].map((c) => (
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
        <div className="order-1 lg:order-2 space-y-4">
          <div className="relative overflow-hidden rounded-[1.6rem] shadow-soft border border-border/70 bg-card h-[21rem] md:h-[25rem] cinematic-frame">
            {TRAIN_RESTAURANT_SLIDES.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={1600}
                height={1066}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${slide.motionClass} ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/28 via-charcoal/8 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <article className="group overflow-hidden rounded-[1.35rem] border border-border/70 bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-luxe">
              <img
                src={trainRestaurantTracks}
                alt="Restaurant train tracks inside the dining area"
                width={1280}
                height={960}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </article>
            <article className="group overflow-hidden rounded-[1.35rem] border border-border/70 bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-luxe">
              <img
                src={trainRestaurantServiceGreen}
                alt="Train carrying beverages to the table"
                width={1280}
                height={960}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </article>
            <article className="group overflow-hidden rounded-[1.35rem] border border-border/70 bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-luxe">
              <img
                src={trainRestaurantServiceWhite}
                alt="Train serving beverages across the dining table"
                width={1280}
                height={960}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </article>
          </div>
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
            <div key={`${g.cat}-${i}`} className="break-inside-avoid relative group overflow-hidden rounded-[1.35rem] border border-border/70 shadow-soft bg-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-luxe">
              <img src={g.src} alt={g.cat} loading="lazy" className={`w-full ${g.h} object-cover group-hover:scale-[1.04] transition-transform duration-700`} />
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
              <ContactRow icon={GoogleMapsBrandIcon} label="Location" value={ADDRESS} href={MAPS} />
              <ContactRow icon={PhoneBrandIcon} label="Phone" value="+91 7407188881" href={`tel:${PHONE}`} />
              <ContactRow icon={WhatsAppBrandIcon} label="WhatsApp" value="+91 7407188881" href={`https://wa.me/${WHATSAPP}`} />
              <ContactRow icon={MailBrandIcon} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={WebsiteBrandIcon} label="Website" value="truesang.com" href={WEBSITE} />
            </div>
            <div className="mt-8 grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 gap-3">
              <SocialLink href={FACEBOOK} icon={FacebookBrandIcon} label="Facebook" />
              <SocialLink href={INSTAGRAM} icon={InstagramBrandIcon} label="Instagram" />
              <SocialLink href={MAPS} icon={GoogleMapsBrandIcon} label="Google Maps" />
              <SocialLink href={REVIEWS_LINK} icon={GoogleReviewsBrandIcon} label="Google Reviews" />
              <SocialLink href={`https://wa.me/${WHATSAPP}`} icon={WhatsAppBrandIcon} label="WhatsApp" />
              <SocialLink href={`mailto:${EMAIL}`} icon={MailBrandIcon} label="Email" />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft flex flex-col">
            <img src={droneView} alt="Astha Midway aerial property view" width={1280} height={960} loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
                <GoogleMapsBrandIcon className="w-5 h-5" /> Open Maps
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition">
                <WhatsAppBrandIcon className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition">
                <PhoneBrandIcon className="w-5 h-5" /> Call Now
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition">
                <WebsiteBrandIcon className="w-5 h-5" /> Visit Website
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
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-full bg-secondary shrink-0 border border-border/70 shadow-soft">
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

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-3 px-4 py-3 rounded-[1rem] border border-border/70 bg-secondary/70 hover:bg-secondary transition text-sm font-medium shadow-soft hover:-translate-y-0.5 hover:shadow-luxe duration-300"
    >
      <span className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border/70 shrink-0">
        <Icon className="w-4.5 h-4.5" />
      </span>
      <span className="leading-tight">{label}</span>
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
          <p className="text-sm text-white/65 leading-relaxed">Stay, dine, celebrate, and connect in a polished garden-framed destination by Truesang Hotel And Resort Pvt. Ltd.</p>
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
            <li className="flex items-start gap-2"><PhoneBrandIcon className="w-4 h-4 mt-0.5 shrink-0" /> +91 7407188881</li>
            <li className="flex items-start gap-2"><MailBrandIcon className="w-4 h-4 mt-0.5 shrink-0" /> {EMAIL}</li>
            <li className="flex items-start gap-2"><WebsiteBrandIcon className="w-4 h-4 mt-0.5 shrink-0" /> truesang.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Follow & Book</h4>
          <a href={`https://wa.me/${WHATSAPP}`} className="flex w-full items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-gold text-charcoal font-medium mb-2"><WhatsAppBrandIcon className="w-4 h-4" /> WhatsApp Us</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition mb-2"><InstagramBrandIcon className="w-4 h-4" /> Instagram</a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition"><FacebookBrandIcon className="w-4 h-4" /> Facebook</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Astha Midway. All rights reserved.</div>
          <div>Powered by <span className="text-gold">Truesang Hotel And Resort Pvt. Ltd.</span></div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}`} aria-label="WhatsApp" className="grid place-items-center w-14 h-14 rounded-full bg-card shadow-luxe hover:scale-105 transition border border-border/70">
        <WhatsAppBrandIcon className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE}`} aria-label="Call" className="grid place-items-center w-14 h-14 rounded-full bg-card shadow-luxe hover:scale-105 transition border border-border/70">
        <PhoneBrandIcon className="w-6 h-6" />
      </a>
    </div>
  );
}

function FacebookBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M13.3 8.38h1.84V5.94c-.32-.04-1.42-.14-2.74-.14-2.71 0-4.56 1.65-4.56 4.69v2.12H5.5v2.72h2.34V22h2.86v-6.67h2.39l.38-2.72H10.7v-1.85c0-.79.22-1.32 1.35-1.32Z"
      />
    </svg>
  );
}

function InstagramBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ig-gradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9CE34" />
          <stop offset="0.32" stopColor="#EE2A7B" />
          <stop offset="0.68" stopColor="#6228D7" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#ig-gradient)" />
      <circle cx="12" cy="12" r="4.1" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

function GoogleMapsBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21c3.83-4.57 5.75-7.8 5.75-10.02A5.75 5.75 0 1 0 6.25 10.98C6.25 13.2 8.17 16.43 12 21Z" fill="#34A853" />
      <path d="M12 21c2.6-3.1 4.35-5.52 5.17-7.48h-4.48V21H12Z" fill="#4285F4" />
      <path d="M6.83 13.52A22.7 22.7 0 0 0 12 21v-7.48H6.83Z" fill="#FBBC04" />
      <path d="M17.73 10.5A5.75 5.75 0 0 0 12 5.23a5.74 5.74 0 0 0-5.73 5.27H17.73Z" fill="#EA4335" />
      <circle cx="12" cy="10.75" r="2.35" fill="#FFFFFF" />
    </svg>
  );
}

function GoogleReviewsBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m12 3.3 2.19 4.44 4.9.72-3.55 3.46.84 4.88L12 14.47 7.62 16.8l.84-4.88L4.9 8.46l4.9-.72L12 3.3Z" fill="#FBBC04" />
      <path d="M12 3.3 9.8 7.74l-4.9.72 3.56 3.46-.84 4.88L12 14.47V3.3Z" fill="#EA4335" fillOpacity="0.9" />
      <path d="m12 14.47 4.38 2.33-.84-4.88 3.55-3.46-4.9-.72L12 3.3v11.17Z" fill="#4285F4" fillOpacity="0.92" />
      <circle cx="12" cy="12" r="2.1" fill="#34A853" />
    </svg>
  );
}

function WhatsAppBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.52 11.96a8.47 8.47 0 0 1-12.49 7.43L3 20.98l1.67-4.9a8.48 8.48 0 1 1 15.85-4.12Z" fill="#25D366" />
      <path d="M16.86 13.93c-.2-.1-1.18-.58-1.36-.64-.18-.07-.31-.1-.44.1-.13.19-.5.63-.62.76-.11.13-.22.14-.42.05a5.83 5.83 0 0 1-1.71-1.05 6.43 6.43 0 0 1-1.19-1.49c-.13-.22-.01-.33.09-.43.09-.08.2-.22.3-.34.1-.11.13-.19.2-.32.06-.13.03-.24-.02-.34-.05-.1-.44-1.08-.61-1.47-.16-.39-.32-.33-.44-.34l-.37-.01c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.63s.7 1.89.8 2.02c.1.13 1.37 2.08 3.31 2.92.46.2.83.32 1.11.4.47.15.9.13 1.24.08.38-.06 1.18-.48 1.35-.95.17-.46.17-.86.12-.95-.05-.08-.18-.13-.38-.23Z" fill="#FFFFFF" />
    </svg>
  );
}

function PhoneBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.62 4.72c.4-.4 1.02-.53 1.54-.34l1.93.72c.59.22.98.79.95 1.42l-.08 1.68c-.02.37.1.72.35 1a13.13 13.13 0 0 0 3.5 3.5c.28.24.63.37 1 .35l1.68-.08c.63-.03 1.2.36 1.42.95l.72 1.93c.2.52.06 1.14-.34 1.54l-1.29 1.29c-.74.74-1.82 1.03-2.84.77-2.02-.52-4.29-1.86-6.34-3.92-2.05-2.05-3.4-4.31-3.91-6.33-.27-1.03.03-2.11.77-2.85l1.28-1.28Z"
        fill="#2F5F51"
      />
    </svg>
  );
}

function MailBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3.5 6.75A1.75 1.75 0 0 1 5.25 5h13.5c.97 0 1.75.78 1.75 1.75v10.5A1.75 1.75 0 0 1 18.75 19H5.25A1.75 1.75 0 0 1 3.5 17.25V6.75Z" fill="#FFFFFF" stroke="#DADCE0" />
      <path d="M4.3 7.1 12 12.73 19.7 7.1" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.3 17.2 9.2 12.95" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m19.7 17.2-4.9-4.25" stroke="#34A853" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.3 7.1 7.25 9.24" stroke="#FBBC04" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WebsiteBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="#B8943A" strokeWidth="1.7" />
      <path d="M3.7 12h16.6M12 3.2c2.07 2.22 3.25 5.42 3.25 8.8 0 3.37-1.18 6.57-3.25 8.8-2.07-2.23-3.25-5.43-3.25-8.8 0-3.38 1.18-6.58 3.25-8.8Z" stroke="#2F5F51" strokeWidth="1.5" />
    </svg>
  );
}
