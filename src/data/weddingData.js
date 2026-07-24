import coupleImage from "../assets/Hero/couple.png";

import photo1 from "../assets/couple/photo1.png";
import photo2 from "../assets/couple/photo2.png";
import photo3 from "../assets/couple/photo3.png";
import photo4 from "../assets/couple/photo4.png";
import photo5 from "../assets/couple/photo5.png";
import photo6 from "../assets/couple/photo6.png";

const weddingData = {
  // =====================================================
  // HERO
  // =====================================================

  groom: "Rahul",

  bride: "Priya",

  coupleShort: "R ❤️ P",

  tagline: "Together With Their Families",

  weddingDate: "December 24, 2027 09:30:00",

  weddingDateText: "24 December 2027",

  coupleImage,

  ctaButton: "View Invitation",

  // =====================================================
  // EVENTS
  // =====================================================

  events: [
    {
      id: "mehendi",

      title: "Mehendi Ceremony",

      day: "Friday",

      date: "23 December 2027",

      time: "5:00 PM",

      venue: "Green Valley Hall",

      address: "Anna Nagar, Chennai",

      mapLink: "https://maps.google.com",

      description:
        "Join us for an evening filled with laughter, music and beautiful Mehendi traditions.",
    },

    {
      id: "wedding",

      title: "Wedding Ceremony",

      day: "Saturday",

      date: "24 December 2027",

      time: "9:30 AM",

      venue: "St. Mary's Church",

      address: "Chennai",

      mapLink: "https://maps.google.com",

      description:
        "Together with our families, we invite you to witness our wedding ceremony and bless our new beginning.",
    },

    {
      id: "reception",

      title: "Reception",

      day: "Saturday",

      date: "24 December 2027",

      time: "7:00 PM",

      venue: "Grand Hyatt Chennai",

      address: "Velachery, Chennai",

      mapLink: "https://maps.google.com",

      description:
        "Celebrate with us over an evening of dinner, music and joyful memories.",
    },
  ],

  // =====================================================
  // FOOTER SETTINGS
  // =====================================================

  footer: {
    primaryEvent: "wedding",

    showMapButton: true,

    showCalendarButton: true,

    showContactButtons: true,
  },

  // =====================================================
  // CALENDAR
  // =====================================================

  calendar: {
    duration: 2,

    description:
      "Join us as we celebrate the wedding of Rahul & Priya.",
  },

  // =====================================================
  // CONTACTS
  // =====================================================

  brideContactName: "Mr. Suresh Kumar",

  brideContactRelation: "Bride's Father",

  brideContactPhone: "+919876543210",

  groomContactName: "Mr. Ramesh Kumar",

  groomContactRelation: "Groom's Father",

  groomContactPhone: "+919876543211",

  // =====================================================
  // SOCIAL
  // =====================================================

  instagram: "https://instagram.com/wedinvite",

  whatsapp: "https://wa.me/919876543210",

  email: "hello@wedinvite.com",

  // =====================================================
  // GALLERY
  // =====================================================

  gallery: [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
  ],

  // =====================================================
  // CALENDAR ACTIONS
  // =====================================================

  addToCalendar: () => {
    alert("Google Calendar integration coming soon.");
  },

  downloadICS: () => {
    alert("ICS download coming soon.");
  },
};

export default weddingData;