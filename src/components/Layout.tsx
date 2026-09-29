import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Solutions",
    "href": "#solutions"
  },
  {
    "name": "How It Works",
    "href": "#how-it-works"
  },
  {
    "name": "Beta Waitlist",
    "href": "#wallet-teaser"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Mocha Sites"
      ctaButton={{
        text: "Get a Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "NFC Guide",
              href: "#",
            },
            {
              label: "Case Studies",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "hello@mochasites.com",
              href: "mailto:hello@mochasites.com",
            },
            {
              label: "+1 (555) 0123",
              href: "tel:+15550123",
            },
          ],
        },
      ]}
      leftText="© 2024 Mocha Sites. All rights reserved."
      rightText="Designed by Webild."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
