import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const MEDIA = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media";

const images = {
  logo: `${MEDIA}/rofika-logo.jpg`,
  teal: `${MEDIA}/teal-kitchen.jpg`,
  vanity: `${MEDIA}/vanity-detail.jpg`,
  neutral: `${MEDIA}/neutral-kitchen.jpg`,
  sage: `${MEDIA}/sage-kitchen.jpg`,
  modern: `${MEDIA}/modern-island-kitchen.jpg`,
  classic: `${MEDIA}/classic-island-kitchen.jpg`,
  woodAccent: `${MEDIA}/wood-accent-island.jpg`,
  whiteWood: `${MEDIA}/white-and-dark-wood-kitchen.jpg`,
  whiteOvens: `${MEDIA}/white-oven-cabinetry.jpg`,
  walnutDetails: `${MEDIA}/walnut-kitchen-details.jpg`,
  centralIsland: `${MEDIA}/central-kitchen-island.jpg`,
  sageShelves: `${MEDIA}/sage-kitchen-shelves.jpg`,
  brickHome: `${MEDIA}/brick-home-kitchen.jpg`,
  applianceWall: `${MEDIA}/integrated-appliance-wall.jpg`,
  wardrobe: `${MEDIA}/fitted-wardrobe.jpg`,
  ovenFridge: `${MEDIA}/oven-and-fridge-cabinetry.jpg`,
  film: `${MEDIA}/rofika-project-film.mp4`,
  filmCover: `${MEDIA}/video-cover.jpg`,
};

const links = [
  { label: "Home", to: "/" as const },
  { label: "Our work", to: "/projects" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const projects = [
  { image: images.classic, title: "Warmth, gathered around the island", kind: "Kitchen design" },
  { image: images.modern, title: "A clean-lined place to come together", kind: "Kitchen design" },
  { image: images.sage, title: "A softer, more considered everyday", kind: "Kitchen design" },
  { image: images.neutral, title: "Light, texture and a little more room", kind: "Kitchen design" },
  { image: images.teal, title: "Colour with confidence", kind: "Kitchen design" },
  { image: images.vanity, title: "The finishing touch, made to fit", kind: "Built-in cabinetry" },
  { image: images.woodAccent, title: "A warm wood accent, made for gathering", kind: "Kitchen design" },
  { image: images.whiteWood, title: "Bright cabinetry with a rich timber contrast", kind: "Kitchen design" },
  { image: images.whiteOvens, title: "A streamlined home for everyday cooking", kind: "Kitchen design" },
  { image: images.walnutDetails, title: "A thoughtful contrast of white and walnut", kind: "Kitchen design" },
  { image: images.centralIsland, title: "An island at the heart of the home", kind: "Kitchen design" },
  { image: images.sageShelves, title: "Sage cabinetry with open-shelf charm", kind: "Kitchen design" },
  { image: images.brickHome, title: "A welcoming kitchen framed by brick", kind: "Kitchen design" },
  { image: images.applianceWall, title: "A polished wall of integrated appliances", kind: "Kitchen design" },
  { image: images.wardrobe, title: "Made-to-measure storage, beautifully fitted", kind: "Built-in cabinetry" },
  { image: images.ovenFridge, title: "A tailored finish for ovens and refrigeration", kind: "Kitchen design" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="Rofika Quality Kitchens, home" className={compact ? "brand-mark brand-mark--compact" : "brand-mark"}>
      <img src={images.logo} alt="Rofika Quality Kitchens" />
    </Link>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-cta">
          <a href="https://wa.me/27769830373?text=Hello%20Rofika%2C%20I%27d%20like%20to%20discuss%20a%20kitchen%20project.">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              activeProps={{ className: "mobile-nav__link mobile-nav__link--active" }}
              className="mobile-nav__link"
            >
              {link.label} <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="overline">A more thoughtful home begins here</p>
          <h2>Let’s make room for <em>living.</em></h2>
        </div>
        <Button asChild variant="outline" className="footer-cta">
          <Link to="/contact">Tell us what you have in mind <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
      <div className="site-footer__bottom">
        <BrandMark compact />
        <p>Pretoria, South Africa</p>
        <a href="tel:+27769830373">+27 76 983 0373</a>
        <p>© {new Date().getFullYear()} Rofika Quality Kitchens</p>
      </div>
    </footer>
  );
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SectionIntro({ eyebrow, title, italic, children }: { eyebrow: string; title: string; italic?: string; children?: React.ReactNode }) {
  return (
    <div className="section-intro">
      <p className="overline">{eyebrow}</p>
      <h2>{title} {italic ? <em>{italic}</em> : null}</h2>
      {children ? <p className="section-intro__copy">{children}</p> : null}
    </div>
  );
}

function ImageFeature({ src, alt, label, title, className = "" }: { src: string; alt: string; label: string; title: string; className?: string }) {
  return (
    <figure className={`image-feature ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="image-feature__caption">
        <span className="image-feature__eyebrow">{label}</span>
        <span className="image-feature__title">{title}</span>
      </figcaption>
    </figure>
  );
}

function ProjectGallery({ featured = false }: { featured?: boolean }) {
  const items = featured ? projects.slice(0, 3) : projects;
  return (
    <div className={featured ? "project-grid project-grid--featured" : "project-grid"}>
      {items.map((project, index) => (
        <ImageFeature
          key={project.image}
          src={project.image}
          alt={project.title}
          label={`${String(index + 1).padStart(2, "0")} / ${project.kind}`}
          title={project.title}
          className={`project-tile project-tile--${index + 1}`}
        />
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      <section className="home-hero">
        <video className="home-hero__video" autoPlay muted loop playsInline preload="auto" poster={images.filmCover} aria-hidden="true" tabIndex={-1}>
          <source src={images.film} type="video/mp4" />
        </video>
        <div className="home-hero__scrim" aria-hidden="true" />
        <div className="home-hero__copy">
          <p className="overline">Tailored kitchens · Pretoria, South Africa</p>
          <h1>Thoughtful spaces for<br /><em>everyday living.</em></h1>
          <p className="home-hero__signature">Made around you.</p>
          <p className="home-hero__description">Thoughtful kitchen design, considered cabinetry and interior renovations for the way you really live.</p>
          <div className="hero-actions">
            <Button asChild className="primary-button"><Link to="/projects">Explore our work <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="ghost" className="hero-secondary"><Link to="/contact">Book a consultation <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-band__number">01 <span>—</span> 03</div>
        <SectionIntro eyebrow="Made for your everyday" title="A little more room to" italic="be at home.">
          Rofika Quality Kitchens is a Pretoria home-interior and kitchen-renovation business. From custom layouts and cabinetry to a more complete interior refresh, each space begins with how you want to live in it.
        </SectionIntro>
        <Link to="/about" className="round-link" aria-label="Discover Rofika"><ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <section className="projects-section page-section page-section--wide">
        <div className="section-heading-row">
          <SectionIntro eyebrow="Selected spaces" title="Made to feel" italic="at home." />
          <Button asChild variant="outline" className="quiet-button"><Link to="/projects">View all projects <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
        <ProjectGallery featured />
      </section>

      <section className="services-ribbon">
        <div className="services-ribbon__intro">
          <p className="overline">Considered, from the start</p>
          <h2>Spaces with a sense<br />of <em>belonging.</em></h2>
          <Button asChild variant="ghost" className="light-button"><Link to="/services">Discover our services <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <div className="service-list">
          <Link to="/services" className="service-list__item"><span>01</span><span>Kitchen design & renovation</span><ArrowUpRight aria-hidden="true" /></Link>
          <Link to="/services" className="service-list__item"><span>02</span><span>Built-in cupboards & wardrobes</span><ArrowUpRight aria-hidden="true" /></Link>
          <Link to="/services" className="service-list__item"><span>03</span><span>TV stands & custom furniture</span><ArrowUpRight aria-hidden="true" /></Link>
          <Link to="/services" className="service-list__item"><span>04</span><span>Home interior renovations</span><ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="closing-note">
        <span className="closing-note__mark">R.</span>
        <p>Good design makes room for <em>real life.</em></p>
        <Button asChild variant="outline" className="quiet-button"><Link to="/contact">Start with a conversation <ArrowUpRight aria-hidden="true" /></Link></Button>
      </section>
    </SiteLayout>
  );
}

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="page-masthead">
        <p className="overline"><span className="overline__mark" /> Rooms made personal · 01—16</p>
        <h1>Spaces that tell<br />their <em>own story.</em></h1>
        <p className="page-masthead__copy">A look at completed kitchens, built-in cabinetry and interior details by Rofika Quality Kitchens.</p>
      </section>
      <section className="project-gallery-section page-section page-section--wide">
        <ProjectGallery />
      </section>
      <section className="gallery-note"><span>Made for the way you live</span><span className="gallery-note__line" /><span>Rofika · Pretoria</span></section>
      <section className="image-story page-section">
        <ImageFeature src={images.teal} alt="Blue-toned fitted cabinetry and countertop in a completed kitchen" label="A study in colour" title="A confident note in blue." className="image-story__image" />
        <div className="image-story__copy"><p className="overline">The character is in the details</p><h2>Let the everyday feel a little more <em>considered.</em></h2><p>Custom layouts, thoughtful storage and finishes that make a space feel like your own.</p><Button asChild variant="outline" className="quiet-button"><Link to="/contact">Plan your kitchen <ArrowUpRight aria-hidden="true" /></Link></Button></div>
      </section>
    </SiteLayout>
  );
}

const serviceDetails = [
  { number: "01", title: "Kitchen renovations", description: "Custom kitchen designs, practical layouts and installations, with high-gloss and melamine finishes among the options shown in Rofika’s work." },
  { number: "02", title: "Built-in cupboards", description: "Custom storage and wardrobe solutions, thoughtfully planned to make the most of the space you have." },
  { number: "03", title: "TV stands & custom furniture", description: "Tailored living-room pieces and interior units designed around your home." },
  { number: "04", title: "Home interior renovations", description: "A more considered approach to refreshing the rooms and details that make a home yours." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="page-masthead page-masthead--split">
        <div><p className="overline"><span className="overline__mark" /> Thoughtful details, tailored to you</p><h1>Room to get<br /><em>it just right.</em></h1></div>
        <p className="page-masthead__copy">From kitchens and wardrobes to the finishing touches throughout your home, Rofika brings considered interiors to Pretoria.</p>
      </section>
      <section className="services-detail page-section page-section--wide">
        <div className="services-detail__list">
          {serviceDetails.map((item) => <article className="service-detail" key={item.number}><span className="service-detail__number">{item.number}</span><div><h2>{item.title}</h2><p>{item.description}</p></div><ArrowUpRight aria-hidden="true" /></article>)}
        </div>
        <ImageFeature src={images.sage} alt="Soft green kitchen cabinetry around a freestanding range" label="In the details" title="A place for everything." className="services-detail__image" />
      </section>
      <section className="service-callout"><div><p className="overline">Start with your space</p><h2>One room can change<br />the feeling of <em>home.</em></h2></div><Button asChild variant="outline" className="quiet-button"><Link to="/contact">Talk through an idea <ArrowUpRight aria-hidden="true" /></Link></Button></section>
    </SiteLayout>
  );
}

function AboutPage() {
  return (
    <SiteLayout>
      <section className="page-masthead page-masthead--about">
        <p className="overline"><span className="overline__mark" /> From Pretoria, for the feeling of home</p>
        <h1>It’s the way a room<br />makes you <em>feel.</em></h1>
        <p className="page-masthead__copy">Rofika Quality Kitchens brings custom kitchen design and home interior renovations to homes in Pretoria and beyond.</p>
      </section>
      <section className="about-feature page-section page-section--wide">
        <ImageFeature src={images.modern} alt="Bright modern kitchen with integrated appliances and generous island" label="Rofika Quality Kitchens" title="Made for everyday moments." className="about-feature__image" />
        <div className="about-feature__copy"><p className="overline">A home with your name on it</p><h2>Not just a new look.<br />A better fit for <em>you.</em></h2><p>Rofika is a South African home-interior and kitchen-renovation business based in Equestria, Pretoria. The work spans custom kitchen layouts and installations, built-in cupboards and wardrobes, TV stands, custom furniture and interior renovations.</p><p>From clean, contemporary lines to thoughtful touches in colour and finish, the goal is to make a space feel more like yours.</p><Button asChild variant="outline" className="quiet-button"><Link to="/services">What we can create <ArrowUpRight aria-hidden="true" /></Link></Button></div>
      </section>
      <section className="location-band"><MapPin aria-hidden="true" /><p>Based in Equestria <span>·</span> Pretoria, South Africa</p><a href="https://maps.google.com/?q=Unit+81%2C+Stellenberg+Road%2C+Park+View+Complex%2C+Equestria%2C+Pretoria%2C+0184%2C+South+Africa" target="_blank" rel="noreferrer">Find us <ArrowUpRight aria-hidden="true" /></a></section>
      <section className="about-signoff"><p className="handwritten">With care,</p><img src={images.logo} alt="Rofika Quality Kitchens" loading="lazy" /></section>
    </SiteLayout>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    if (!name || !email || !project) return;
    const subject = encodeURIComponent(`A Rofika project enquiry from ${name}`);
    const body = encodeURIComponent(`Hello Rofika,\n\nMy name is ${name}.\nMy email is ${email}.\n\nA little about my project:\n${project}`);
    window.location.href = `mailto:mapasepaledi@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <section className="contact-intro page-section">
        <div className="contact-intro__copy"><p className="overline"><span className="overline__mark" /> Let’s begin with an idea</p><h1>Tell us about<br /><em>your space.</em></h1><p>Whether you’re imagining a new kitchen or thinking about a home refresh, we’d love to hear what you have in mind.</p></div>
        <ImageFeature src={images.vanity} alt="A pale vanity with mirror and built-in shelves" label="Made to fit your home" title="The finishing touches count." className="contact-intro__image" />
      </section>
      <section className="contact-details page-section page-section--wide">
        <div className="contact-form-wrap">
          <p className="overline">A note to start</p><h2>What are you <em>dreaming of?</em></h2>
          <form className="contact-form" onSubmit={openEmail}>
            <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" placeholder="Name" autoComplete="name" required />
            <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="contact-project">A little about your project</label><textarea id="contact-project" name="project" rows={4} placeholder="Tell us about the room, the feeling, the idea..." required />
            <Button type="submit" className="primary-button">Send your enquiry <ArrowUpRight aria-hidden="true" /></Button>
            {submitted ? <p role="status" className="form-status"><Check aria-hidden="true" /> Your email app should now be ready with your enquiry.</p> : null}
          </form>
        </div>
        <aside className="contact-info">
          <div><p className="overline">Visit</p><p>Unit 81, Stellenberg Road<br />Park View Complex, Equestria<br />Pretoria, 0184, South Africa</p><a href="https://maps.google.com/?q=Unit+81%2C+Stellenberg+Road%2C+Park+View+Complex%2C+Equestria%2C+Pretoria%2C+0184%2C+South+Africa" target="_blank" rel="noreferrer" className="text-link">Open map <ArrowUpRight aria-hidden="true" /></a></div>
          <div><p className="overline">Get in touch</p><a href="tel:+27769830373">+27 76 983 0373</a><a href="mailto:mapasepaledi@gmail.com">mapasepaledi@gmail.com</a><a href="https://wa.me/27769830373?text=Hello%20Rofika%2C%20I%27d%20like%20to%20discuss%20a%20kitchen%20project." className="text-link">WhatsApp us <ArrowUpRight aria-hidden="true" /></a></div>
          <div><p className="overline">Studio hours</p><p>Monday to Friday<br />08:00–17:00</p></div>
        </aside>
      </section>
      <section className="contact-endmark"><a href="mailto:mapasepaledi@gmail.com">A good place to begin <ArrowLeft aria-hidden="true" /></a><span className="handwritten">We’re listening.</span></section>
    </SiteLayout>
  );
}

export { AboutPage, ContactPage, HomePage, ProjectsPage, ServicesPage };