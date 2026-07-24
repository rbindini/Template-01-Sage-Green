import "./RSVP.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaCheckCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  guests: 1,
  attendance: "",
  message: "",
};

function RSVP() {
  const [formData, setFormData] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAttendance = (value) => {
    setFormData((prev) => ({
      ...prev,
      attendance: value,
    }));
  };

  const increaseGuests = () => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.min(prev.guests + 1, 10),
    }));
  };

  const decreaseGuests = () => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(prev.guests - 1, 1),
    }));
  };

  const validate = () => {
    if (!formData.attendance)
      return "Please select your attendance.";

    if (!formData.name.trim())
      return "Please enter your name.";

    if (!formData.mobile.trim())
      return "Please enter your mobile number.";

    const mobile = formData.mobile.replace(/\D/g, "");

    if (mobile.length !== 10)
      return "Please enter a valid 10 digit mobile number.";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    const error = validate();

    if (error) {
      setStatus({
        type: "error",
        message: error,
      });

      return;
    }

    setLoading(true);

    try {
      const body = new URLSearchParams();

      body.append("name", formData.name);

      body.append(
        "mobile",
        formData.mobile.replace(/\D/g, "")
      );

      body.append("email", formData.email);

      body.append(
        "attendance",
        formData.attendance
      );

      body.append(
        "guests",
        formData.attendance === "Attending"
          ? formData.guests
          : ""
      );

      body.append(
        "message",
        formData.message
      );

      const response = await fetch(
        import.meta.env.VITE_GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          body,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "",
        });

        setFormData(initialForm);
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Unable to submit your RSVP. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rsvp" id="rsvp">
      <motion.div
        className="rsvp-card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="rsvp-tag">
          RSVP
        </span>

        <h2>Kindly Respond</h2>

        <p className="rsvp-subtitle">
          We would be delighted to celebrate
          our special day with you.
          Kindly let us know if you'll be
          joining us.
        </p>

        <AnimatePresence>
          {status.type === "success" ? (
            <motion.div
              className="success-card"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <div className="success-heart">
                ❤️
              </div>

              <h3>Thank You!</h3>

              <p>
                Your RSVP has been received.
                <br />
                We look forward to celebrating
                this beautiful occasion with
                you.
              </p>
            </motion.div>
          ) : (
            <form
              className="rsvp-form"
              onSubmit={handleSubmit}
            >
              <div className="attendance-section">
                <label>
                  Will you be joining us?
                </label>

                <div className="attendance-buttons">
                  <button
                    type="button"
                    className={
                      formData.attendance ===
                      "Attending"
                        ? "attendance-btn active"
                        : "attendance-btn"
                    }
                    onClick={() =>
                      handleAttendance(
                        "Attending"
                      )
                    }
                  >
                    <FaHeart />
                    Joyfully Accept
                  </button>

                  <button
                    type="button"
                    className={
                      formData.attendance ===
                      "Declined"
                        ? "attendance-btn active decline"
                        : "attendance-btn decline"
                    }
                    onClick={() =>
                      handleAttendance(
                        "Declined"
                      )
                    }
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {status.type === "error" && (
                <div className="error-box">
                  {status.message}
                </div>
              )}

              <div className="input-group">
                <FaUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <FaPhone />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
                            {formData.attendance === "Attending" && (
                <div className="guest-counter">

                  <label>Number of Guests</label>

                  <div className="counter-box">

                    <button
                      type="button"
                      onClick={decreaseGuests}
                    >
                      <FaMinus />
                    </button>

                    <span>
                      {formData.guests}
                    </span>

                    <button
                      type="button"
                      onClick={increaseGuests}
                    >
                      <FaPlus />
                    </button>

                  </div>

                </div>
              )}

              <textarea
                name="message"
                rows="5"
                placeholder="Leave your wishes for the couple..."
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaCheckCircle />
                    Confirm RSVP
                  </>
                )}
              </button>

            </form>
          )}
        </AnimatePresence>

      </motion.div>

    </section>
  );
}

export default RSVP;