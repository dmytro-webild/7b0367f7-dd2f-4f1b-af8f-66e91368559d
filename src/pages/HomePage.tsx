import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Elevate Your Local Presence"
      title="Turn One-Time Visitors Into Repeat Customers."
      description="Webild websites, 1-tap NFC review & menu cards, and digital wallet loyalty systems designed for local businesses."
      primaryButton={{
        text: "Get a Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore NFC Cards",
        href: "#solutions",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-looking-happy-her-credit-card-showing-horizontal-smartphone-screen-recommend-application-internet-store-standing-white-wall_176420-38672.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="solutions" data-section="solutions">
    <SectionErrorBoundary name="solutions">
          <FeaturesMediaCards
      tag="Our Solutions"
      title="Growth Tools for Local Business"
      description="Smart, physical-to-digital integrations that bring customers back again and again."
      items={[
        {
          title: "Custom Webild Websites",
          description: "Speed-optimized, mobile-friendly landing pages built to drive phone calls, bookings, and foot traffic.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033636.jpg",
        },
        {
          title: "Smart NFC Cards",
          description: "Instant 1-tap cards for Google Reviews, digital menus, or opening your website without typing URLs.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-courier-blue-uniform-black-gloves-black-mask-holding-phone-white-card_140725-23459.jpg",
        },
        {
          title: "Custom Posters & Print",
          description: "High-impact physical posters and table-tents integrated with QR and NFC technology for maximum conversion.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hand-holding-device_23-2149340927.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="wallet-teaser" data-section="wallet-teaser">
    <SectionErrorBoundary name="wallet-teaser">
          <MetricsMediaCards
      tag="Beta Access"
      title="1-Tap Apple & Google Wallet Loyalty System"
      description="When a customer taps your card, a digital loyalty card is saved straight into their wallet. Automate engagement and bring them back."
      primaryButton={{
        text: "Join the Beta Waitlist",
        href: "#contact",
      }}
      metrics={[
        {
          value: "1-Tap",
          title: "Frictionless Savings",
          description: "Instant add-to-wallet.",
          imageSrc: "http://img.b2bpic.net/free-photo/army-soldier-reviews-targets-satellite-world-map-ensure-global-protection_482257-91236.jpg",
        },
        {
          value: "Push",
          title: "Automated Returns",
          description: "Personalized notifications.",
          imageSrc: "http://img.b2bpic.net/free-photo/email-alert-popup-reminder-concept_53876-123868.jpg",
        },
        {
          value: "Retention",
          title: "Repeat Foot Traffic",
          description: "Building loyal audiences.",
          imageSrc: "http://img.b2bpic.net/free-photo/finger-indicating-graph-rises_1134-103.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <FaqSimple
      tag="Simple Workflow"
      title="How It Works"
      description="Growing your business is easier than you think with our 3-step approach."
      items={[
        {
          question: "Step 1: Setup & Design",
          answer: "We build your high-converting site and configure all your custom NFC cards and print materials.",
        },
        {
          question: "Step 2: Instant Connection",
          answer: "Customers tap your NFC cards or scan posters to instantly view menus, leave reviews, or save your digital pass.",
        },
        {
          question: "Step 3: Automated Growth",
          answer: "Watch your 5-star reviews grow while our system builds an audience of repeat buyers automatically.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to grow your business? Let's discuss custom websites, NFC cards, or early access to our Wallet Pass system."
      primaryButton={{
        text: "Send Message & Get Quote",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "mailto:hello@mochasites.com",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
