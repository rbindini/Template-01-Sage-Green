import styles from "./Hero.module.css";

import BackgroundLayers from "./BackgroundLayers";
import HeroContent from "./HeroContent";
import FloralDivider from "./FloralDivider";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <BackgroundLayers />

      <div className={styles.contentWrapper}>
        <HeroContent />

        <FloralDivider />

        <ScrollIndicator />
      </div>
    </section>
  );
}