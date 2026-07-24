import background from "../../assets/opening/background.png";
import watercolorOverlay from "../../assets/opening/watercolor-overlay.webp";

export default function Background() {
  return (
    <div className="background-wrapper">
      <img
        src={background}
        alt=""
        className="background-image"
      />

      <img
        src={watercolorOverlay}
        alt=""
        className="watercolor-overlay"
      />

      <div className="background-gradient" />
      <div className="background-glow" />
    </div>
  );
}