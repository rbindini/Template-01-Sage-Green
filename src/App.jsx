import Blessings from "./components/Blessings/Blessings";
import Invitation from "./components/Invitation/Invitation";
import OurStory from "./components/OurStory";
import FadeInSection from "./components/Animation/FadeInSection";
import Footer from "./components/Footer/Footer";
import Music from "./components/Music/Music";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Countdown from "./components/Countdown/Countdown";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Venue from "./components/Venue/Venue";
import RSVP from "./components/RSVP/RSVP";
import OpeningScreen from "./components/OpeningScreen/OpeningScreen";

function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <OpeningScreen
        onOpen={() => setOpened(true)}
      />
    );
  }

  return (
    <>
  <Navbar />

  <Hero />

 <FadeInSection delay={0.05}>
  <Blessings />
</FadeInSection>

<FadeInSection delay={0.08}>
  <Invitation />
</FadeInSection>

<FadeInSection>
  <Countdown />
</FadeInSection>

 <FadeInSection delay={0.1}>
    <Events />
  </FadeInSection>

  <FadeInSection delay={0.2} variant="zoom">
    <Gallery />
  </FadeInSection>

  <FadeInSection delay={0.3} variant="left">
    <Venue />
  </FadeInSection>

  <FadeInSection delay={0.4}>
  <RSVP />
</FadeInSection>

<FadeInSection delay={0.5}>
  <Footer />
</FadeInSection>

<Music />
</>
  );
}

export default App;