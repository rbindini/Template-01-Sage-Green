import styles from "./Events.module.css";

import background from "../../assets/backgrounds/events-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";

import topLeft from "../../assets/backgrounds/floral-corner-top-left.webp";
import bottomRight from "../../assets/backgrounds/floral-corner-bottom-right.webp";

import goldDivider from "../../assets/backgrounds/gold-divider.svg";

const events = [
  {
    id: 1,
    title: "Engagement",
    icon: "💍",
    date: "Friday, 10 December 2027",
    time: "6:30 PM onwards",
    venue: "Royal Orchid Hall",
    address: "Chennai",
  },
  {
    id: 2,
    title: "Mehendi",
    icon: "🌿",
    date: "Saturday, 11 December 2027",
    time: "10:00 AM onwards",
    venue: "Bride's Residence",
    address: "Chennai",
  },
  {
    id: 3,
    title: "Wedding",
    icon: "❤️",
    date: "Sunday, 12 December 2027",
    time: "9:00 AM",
    venue: "Sri Lakshmi Mahal",
    address: "Velachery, Chennai",
  },
  {
    id: 4,
    title: "Reception",
    icon: "🥂",
    date: "Sunday, 12 December 2027",
    time: "6:30 PM",
    venue: "Grand Ballroom",
    address: "Chennai",
  },
];

export default function Events() {
  return (
    <section
      className={styles.events}
      style={{
        backgroundImage: `
          linear-gradient(rgba(248,245,240,.93),rgba(248,245,240,.93)),
          url(${background})
        `,
      }}
    >
      <div
        className={styles.paper}
        style={{
          backgroundImage: `url(${paperTexture})`,
        }}
      />

      <img src={topLeft} alt="" className={styles.topLeft} />

      <img
        src={bottomRight}
        alt=""
        className={styles.bottomRight}
      />

      <div className={styles.container}>
        <p className={styles.subtitle}>
          JOIN US FOR THE CELEBRATIONS
        </p>

        <h2 className={styles.title}>
          Wedding Events
        </h2>

        <img
          src={goldDivider}
          alt=""
          className={styles.divider}
        />

        <div
          className={`${styles.grid} ${
            styles["items" + events.length]
          }`}
        >
          {events.map((event) => (
            <div
              className={styles.card}
              key={event.id}
            >
              <div className={styles.icon}>
                {event.icon}
              </div>

              <h3>{event.title}</h3>

              <div className={styles.line}></div>

              <div className={styles.info}>
                <h4>Date</h4>
                <p>{event.date}</p>
              </div>

              <div className={styles.info}>
                <h4>Time</h4>
                <p>{event.time}</p>
              </div>

              <div className={styles.info}>
                <h4>Venue</h4>
                <p>{event.venue}</p>
                <span>{event.address}</span>
              </div>

              <button className={styles.button}>
                View Location
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}