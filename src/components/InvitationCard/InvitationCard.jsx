import "./InvitationCard.css";
import { motion } from "framer-motion";

function InvitationCard({ onContinue }) {
  return (
    <div className="invitation-container">

      <motion.div
        className="invitation-card"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <h4>Together with their families</h4>

        <h1>Rahul</h1>

        <div className="heart">❤</div>

        <h1>Priya</h1>

        <p>
          joyfully invite you to celebrate
          <br />
          their wedding
        </p>

        <button onClick={onContinue}>
          Continue
        </button>

      </motion.div>

    </div>
  );
}

export default InvitationCard;