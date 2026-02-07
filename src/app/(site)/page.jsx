import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import AboutFoundation from "@/components/Home/AboutFoundation";
import ContactForm from "@/components/Home/ContactForm";
import CanvasCreationHomeSection from "@/components/Home/CanvasCreationHomeSection";
import TimelessFramesHomeSection from "@/components/Home/TimelessFramesHomeSection";

export const metadata = {
  title:
    "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
  description:
    "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive. Piramal NCPA Gallery, Mumbai. Opening Night Sep 20. Public viewing Sep 21–26. RSVP.",
  keywords: [
    "art exhibition Mumbai",
    "photography exhibition Mumbai",
    "Indian cinema photography",
    "Kamat Foto Studio",
    "Damodar Kamat",
    "Timeless Frames exhibition",
    "Enduring Legacies SDAF",
    "NCPA Gallery Mumbai",
    "cinema stills 1950s–1980s",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
    description:
      "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
    description:
      "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive.",
  },
};

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        name="Timeless Frames: Indian Cinema Photo Exhibition"
        description="Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive."
        url={`${Const.ClientLink}/`}
      />

      {/* <IntroLoader /> */}

      <Hero/>

      <AboutFoundation />

      <CanvasCreationHomeSection/>

      <TimelessFramesHomeSection/>

      <ContactForm />
    </>
  );
}
