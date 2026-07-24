import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";
import weddingData from "../../data/weddingData";

const Footer = ({ showBrand = true }) => {
  const primaryEvent =
    weddingData.events.find(
      (event) => event.id === weddingData.footer.primaryEvent
    ) || weddingData.events[0];

  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container"></div>
              <motion.div
          className="footer-divider"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "120px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ❦
        </motion.div>

        <motion.h2
          className="footer-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Thank You
        </motion.h2>

        <motion.p
          className="footer-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Thank you for being a part of one of the most meaningful days of our
          lives. Your love, blessings and presence mean the world to us.
        </motion.p>

        <motion.div
          className="footer-heart"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          viewport={{ once: true }}
        >
          ❤
        </motion.div>

        <motion.h3
          className="footer-couple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {weddingData.bride} &amp; {weddingData.groom}
        </motion.h3>

        <motion.p
          className="footer-date"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {weddingData.weddingDateText}
        </motion.p>
               {/* Contact Cards */}

        {weddingData.footer.showContactButtons && (
          <motion.div
            className="footer-contact-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Bride Side */}

            <div className="contact-card">
              <div className="contact-header">
                👰 Bride's Side
              </div>

              <h4>{weddingData.brideContactName}</h4>

              <p>{weddingData.brideContactRelation}</p>

              <a
                href={`tel:${weddingData.brideContactPhone}`}
                className="contact-btn"
              >
                <FaPhoneAlt />
                <span>Call Bride's Side</span>
              </a>
            </div>

            {/* Groom Side */}

            <div className="contact-card">
              <div className="contact-header">
                🤵 Groom's Side
              </div>

              <h4>{weddingData.groomContactName}</h4>

              <p>{weddingData.groomContactRelation}</p>

              <a
                href={`tel:${weddingData.groomContactPhone}`}
                className="contact-btn"
              >
                <FaPhoneAlt />
                <span>Call Groom's Side</span>
              </a>
            </div>
          </motion.div>
        )} 
                {/* Quick Actions */}

        <motion.div
          className="footer-actions"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {weddingData.footer.showMapButton && primaryEvent?.mapLink && (
            <a
              href={primaryEvent.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action-btn"
            >
              <FaMapMarkerAlt />
              <span>View Wedding Venue</span>
            </a>
          )}

          {weddingData.footer.showCalendarButton && (
            <button
              type="button"
              className="footer-action-btn"
              onClick={weddingData.addToCalendar}
            >
              <FaCalendarAlt />
              <span>Add to Calendar</span>
            </button>
          )}

          {weddingData.footer.showCalendarButton && (
            <button
              type="button"
              className="footer-action-btn"
              onClick={weddingData.downloadICS}
            >
              <FaDownload />
              <span>Download Schedule</span>
            </button>
          )}
        </motion.div>

        {/* Social Icons */}

        <motion.div
          className="footer-social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
          {weddingData.instagram && (
            <a
              href={weddingData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          )}

          {weddingData.whatsapp && (
            <a
              href={weddingData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          )}

          {weddingData.email && (
            <a
              href={`mailto:${weddingData.email}`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          )}
        </motion.div>
                {/* Bottom Section */}

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Made with <span className="footer-love">❤</span> for our beloved
            family &amp; friends.
          </p>

          {showBrand && (
            <p className="footer-brand">
              Designed with ❤️ by{" "}
              <a
                href="https://wedinviteglobal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WedInvite
              </a>
            </p>
          )}

          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            {weddingData.bride} &amp; {weddingData.groom}. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;