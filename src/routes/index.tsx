import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type InputHTMLAttributes } from "react";
import {
  Phone, MessageCircle, MapPin, Mail, Clock, Users, Bed, Utensils, Wine, PartyPopper,
  Star, ChevronRight, Menu, X, Calendar,
} from "lucide-react";
import heroAsset from "@/assets/hero.jpg.asset.json";
import restaurantAsset from "@/assets/restaurant.jpg.asset.json";
import room1Img from "@/assets/room1.jpg";
import room2Img from "@/assets/room2.jpg";
import room3Img from "@/assets/room3.jpg";
import cottage1Img from "@/assets/cottage1.jpg";
import cottage2Img from "@/assets/cottage2.jpg";
import barAsset from "@/assets/bar.jpg.asset.json";
import conferenceAsset from "@/assets/conference.jpg.asset.json";
import gardenAsset from "@/assets/garden.jpg.asset.json";
import poolAsset from "@/assets/pool.jpg.asset.json";
import restaurantCleanAsset from "@/assets/restaurant-clean.jpg.asset.json";
import trainRestaurantAsset from "@/assets/train-restaurant.jpg.asset.json";
import mocktailAsset from "@/assets/mocktail.jpg.asset.json";
import noodlesAsset from "@/assets/noodles.jpg.asset.json";
import babycornAsset from "@/assets/babycorn.jpg.asset.json";
import conferenceCleanAsset from "@/assets/conference-clean.jpg.asset.json";
const hero = heroAsset.url;
const restaurantImg = restaurantAsset.url;
const room1 = room1Img;
const room2 = room2Img;
const room3 = room3Img;
const cottage1 = cottage1Img;
const cottage2 = cottage2Img;
const barImg = barAsset.url;
const banquetImg = conferenceAsset.url;
const gardenImg = gardenAsset.url;
const poolImg = poolAsset.url;
const restaurantReal = restaurantCleanAsset.url;
const trainRestaurant = trainRestaurantAsset.url;
const mocktailImg = mocktailAsset.url;
const noodlesImg = noodlesAsset.url;
const babycornImg = babycornAsset.url;
const conferenceReal = conferenceCleanAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astha Midway — Highway Hotel, Restaurant, Bar & Banquet" },
      { name: "description", content: "Comfortable rooms, delicious food, refreshing bar and premium banquet hall at Astha Midway by Truesang Pvt Ltd." },
      { property: "og:title", content: "Astha Midway — Comfort, Taste & Celebration" },
      { property: "og:description", content: "Highway hotel with rooms, restaurant, bar and premium banquet hall." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PHONE = "+919999999999";
const WHATSAPP = "919999999999";
const EMAIL = "info@asthamidway.com";
const ADDRESS = "NH-16, Kolkata, West Bengal, India";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#bar", label: "Bar" },
  { href: "#banquet", label: "Banquet" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
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
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-display text-lg">A</span>
          <span className="font-display text-xl font-semibold tracking-tight">Astha <span className="text-gold">Midway</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="text-foreground/80 hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#banquet" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition shadow-soft">
          Book Now <ChevronRight className="w-4 h-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-border/40 text-foreground/85">{n.label}</a>
            ))}
            <a href="#banquet" onClick={() => setOpen(false)} className="mt-3 text-center py-3 rounded-full bg-primary text-primary-foreground font-medium">Book Now</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const slides = [hero, gardenImg, poolImg, cottage1];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Astha Midway resort surroundings"
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${i === active ? "opacity-100 animate-ken-burns" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-primary-foreground py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs tracking-widest uppercase mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" /> A Truesang Pvt Ltd Hospitality
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Experience Comfort, Taste<br className="hidden sm:block" /> & <span className="text-gold italic">Celebration</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Comfortable Stay · Delicious Food · Premium Banquet · Refreshing Bar
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#rooms" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-charcoal font-semibold shadow-luxe hover:scale-[1.02] transition">
            <Bed className="w-4 h-4" /> Book Your Stay
          </a>
          <a href="#banquet" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition">
            <PartyPopper className="w-4 h-4" /> Plan Your Event
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 rounded-2xl overflow-hidden border border-white/15 max-w-3xl mx-auto backdrop-blur-sm">
            {[
            { n: "Elegant", l: "Stays" },
            { n: "Charming", l: "Cottages" },
            { n: "Grand", l: "Celebrations" },
            { n: "24/7", l: "Service" },
          ].map(s => (
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
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={gardenImg} alt="Lush tropical gardens at Astha Midway" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-luxe w-full h-[450px] object-cover object-center" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl shadow-luxe p-6 border border-border max-w-[220px]">
            <div className="font-display text-3xl text-primary">Trusted</div>
            <div className="text-sm text-muted-foreground mt-1">Hospitality cherished by travellers on the highway</div>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— About Us —</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            A premium pause on your <em className="text-gold not-italic">journey</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Astha Midway, owned and operated by Truesang Pvt Ltd, is a premium highway destination
            crafted for travellers, families, business guests and celebrations alike. Our comfortable
            rooms, multi-cuisine restaurant, refreshing bar and grand banquet hall come together
            under one roof to make every visit memorable.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is simple — provide warm hospitality, excellent food and experiences our
            guests look forward to returning for.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { i: Bed, t: "Comfortable Rooms" },
              { i: Utensils, t: "Multi-Cuisine Restaurant" },
              { i: Wine, t: "Premium Bar" },
              { i: PartyPopper, t: "Grand Banquet Hall" },
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

const ROOMS = [
  { img: cottage1, name: "Garden Cottage", desc: "A private standalone cottage with a wooden veranda, framed by palms and tropical gardens — a peaceful, resort-style retreat.", amen: ["King Bed", "Private Veranda", "Garden View", "Wi-Fi", "Breakfast"], occ: "2 Adults + 1 Child" },
  { img: room1, name: "Deluxe Room", desc: "Plush king bed and elegant interiors opening to lush garden views — ideal for couples and business travellers.", amen: ["King Bed", "Free Wi-Fi", "AC", "TV", "Breakfast"], occ: "2 Adults" },
  { img: cottage2, name: "Premium Cottage", desc: "Spacious cottage interior with vaulted wood-beam ceiling and French doors opening onto a private green patio.", amen: ["King Bed", "Patio", "Wi-Fi", "AC", "Breakfast"], occ: "2 Adults + 1 Child" },
  { img: room3, name: "Deluxe Room (Twin)", desc: "Spacious deluxe with twin beds and balcony overlooking the gardens — great for families or friends.", amen: ["Twin Beds", "Balcony", "Wi-Fi", "AC", "Breakfast"], occ: "3 Adults" },
];

function Rooms() {
  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Stay" title="Featured Rooms" sub="Restful, refined and ready when you arrive — every room comes with thoughtful amenities for the modern traveller." />
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
                  {r.amen.map(a => (
                    <span key={a} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">{a}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <a href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(r.name)}`} className="flex-1 text-center py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition">Book Now</a>
                  <a href="#contact" className="flex-1 text-center py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">Enquire</a>
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
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">A table for every <em className="text-gold not-italic">appetite</em>.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From traditional North Indian thalis to favourite Chinese classics, our family-friendly
            restaurant serves breakfast, lunch, dinner and all-day snacks. Built for celebrations
            small and large.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["North Indian", "Chinese", "Snacks", "Breakfast", "Lunch & Dinner", "Family Dining"].map(c => (
              <div key={c} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
              <Clock className="w-4 h-4 text-primary" /> Open 7:00 AM – 11:00 PM
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
              <Phone className="w-4 h-4" /> Call for Reservation
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img src={restaurantReal} alt="Astha Midway restaurant interior" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-soft w-full h-72 object-cover col-span-2" />
          <img src={trainRestaurant} alt="Train-themed family dining experience" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-soft w-full h-48 object-cover" />
          <img src={babycornImg} alt="Crispy chilli babycorn served at Astha Midway" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-soft w-full h-48 object-cover" />
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
          <img src={mocktailImg} alt="Signature mocktail from Astha Midway bar" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-luxe w-full h-[450px] object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">— The Bar —</div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">Unwind in our <em className="text-gold not-italic">premium</em> lounge.</h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            Soft lighting, comfortable seating and a curated selection of beverages — the perfect
            spot to relax after a long drive, host a business meeting, or catch up with friends.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {["Curated spirits & cocktails", "Comfortable lounge seating", "Suitable for meetings & friends", "Live ambience"].map(t => (
              <li key={t} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{t}</li>
            ))}
          </ul>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm">
            <Clock className="w-4 h-4 text-gold" /> Open 12:00 PM – 11:00 PM
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
        <SectionHeader kicker="Banquet & Events" title="Where celebrations come alive" sub="A grand hall, elegant decor and end-to-end coordination — built for weddings, receptions, corporate events and every milestone in between." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-luxe">
            <img src={conferenceReal} alt="Conference and banquet hall at Astha Midway" width={1600} height={1066} loading="lazy" className="w-full h-full min-h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Wedding", "Reception", "Birthday", "Corporate", "Conference", "Engagement", "Kitty Party", "Social"].map(t => (
                  <div key={t} className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-center font-medium">{t}</div>
                ))}
              </div>
            </div>
          </div>
          <form
            className="lg:col-span-2 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-soft"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h3 className="font-display text-2xl text-primary">Enquire Now</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll get back to you within hours.</p>
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
                  <option value="" disabled>Event Type</option>
                  {["Wedding", "Reception", "Birthday", "Corporate", "Conference", "Engagement", "Kitty Party", "Other"].map(t => <option key={t}>{t}</option>)}
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

const REVIEWS = [
  { n: "Rohit Sharma", t: "Stopped over on the highway and ended up extending our stay. Excellent food and very warm staff.", r: 5 },
  { n: "Priya Das", t: "Hosted my daughter's engagement at the banquet. Decor and coordination were beautiful.", r: 5 },
  { n: "Anand Mehta", t: "Comfortable rooms, clean and quiet. Restaurant breakfast was a highlight.", r: 5 },
];

function Reviews() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Guest Reviews" title="Loved by travellers & families" />
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.n} className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 text-gold mb-3">
                {Array.from({ length: r.r }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 italic leading-relaxed">"{r.t}"</p>
              <div className="mt-4 font-medium text-primary">— {r.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: restaurantReal, h: "h-72", cat: "Restaurant Interior" },
  { src: hero, h: "h-80", cat: "Cottage Exterior" },
  { src: cottage1, h: "h-80", cat: "Garden Cottage" },
  { src: trainRestaurant, h: "h-72", cat: "Train Dining" },
  { src: room1, h: "h-56", cat: "Deluxe Room" },
  { src: cottage2, h: "h-72", cat: "Cottage Interior" },
  { src: room3, h: "h-56", cat: "Deluxe Room" },
  { src: noodlesImg, h: "h-72", cat: "Restaurant Cuisine" },
  { src: mocktailImg, h: "h-64", cat: "Bar Mocktail" },
  { src: conferenceReal, h: "h-72", cat: "Conference Hall" },
  { src: babycornImg, h: "h-64", cat: "Signature Starter" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Gallery" title="Inside Astha Midway" />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY.map((g, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-soft">
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
              <ContactRow icon={MapPin} label="Address" value={ADDRESS} />
              <ContactRow icon={Phone} label="Phone" value={PHONE} href={`tel:${PHONE}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with us" href={`https://wa.me/${WHATSAPP}`} />
              <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={Clock} label="Open" value="24 × 7 — All days" />
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Astha Midway location"
                src="https://www.google.com/maps?q=Kolkata,+West+Bengal,+India&output=embed"
                className="w-full h-full" loading="lazy"
              />
            </div>
          </div>
          <form className="bg-card rounded-3xl p-8 border border-border shadow-soft" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl text-primary mb-6">Send a Message</h3>
            <div className="space-y-3">
              <Input placeholder="Your Name" required maxLength={80} />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Mobile" type="tel" required maxLength={15} />
                <Input placeholder="Email" type="email" maxLength={120} />
              </div>
              <Input placeholder="Subject" maxLength={120} />
              <textarea placeholder="Your Message" rows={5} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <button type="submit" className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-soft">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-full bg-gradient-gold text-charcoal shrink-0"><Icon className="w-5 h-5" /></div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-gold text-charcoal font-display text-lg">A</span>
            <span className="font-display text-xl text-white">Astha Midway</span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">Premium highway hospitality — comfortable stays, delicious food and grand celebrations.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(1).map(n => <li key={n.href}><a href={n.href} className="hover:text-gold transition">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> {ADDRESS}</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> {PHONE}</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> {EMAIL}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Book Direct</h4>
          <a href={`https://wa.me/${WHATSAPP}`} className="block w-full text-center py-2.5 rounded-full bg-gradient-gold text-charcoal font-medium mb-2">WhatsApp Us</a>
          <a href={`tel:${PHONE}`} className="block w-full text-center py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition">Call Now</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Astha Midway. All rights reserved.</div>
          <div>Powered by <span className="text-gold">Truesang Pvt Ltd</span></div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}`} aria-label="WhatsApp" className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE}`} aria-label="Call" className="grid place-items-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-luxe hover:scale-110 transition">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
