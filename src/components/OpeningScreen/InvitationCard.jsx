import paperTexture from "../../assets/opening/paper-texture.webp";
import couple from "../../assets/opening/couple.png";

export default function InvitationCard({
  visible,
  expand,
}) {
  return (
    <div
      className={`invitation-card
      ${visible ? "show" : ""}
      ${expand ? "expand" : ""}`}
    >
      {/* Paper Texture */}

      <img
        src={paperTexture}
        alt=""
        className="paper-texture"
      />

      {/* Invitation */}

      <div className="card-content">

        <p className="invite-label">
          Together With Their Families
        </p>

        <h2 className="couple-title">
          Sriram
          <span>&</span>
          Vaishnavi
        </h2>

        <div className="gold-divider" />

        <img
          src={couple}
          alt=""
          className="couple-artwork"
        />

        <p className="wedding-date">
          Sunday
        </p>

        <h3 className="date-number">
          18 January 2027
        </h3>

        <p className="venue-preview">
          Chennai • Tamil Nadu
        </p>

      </div>
    </div>
  );
}