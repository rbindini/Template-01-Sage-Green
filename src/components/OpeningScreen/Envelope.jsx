import premiumBack from "../../assets/opening/premium-back.png";
import envelopeBody from "../../assets/opening/envelope-body.png";
import flap from "../../assets/opening/flap.png";
import innerLining from "../../assets/opening/inner-lining.png";
import waxSeal from "../../assets/opening/wax-seal.png";
import waxShadow from "../../assets/opening/wax-shadow.png";

import InvitationCard from "./InvitationCard";

export default function Envelope({
    stage,
    onSealClick,
}) {

    const pressed =
        stage === "press";

    const flapOpened =
        stage === "open" ||
        stage === "card" ||
        stage === "expand";

    const showCard =
        stage === "card" ||
        stage === "expand";

    const expandCard =
        stage === "expand";

    return (

        <div className="envelope-wrapper">

            {/* Decorative Back */}

            <img
                src={premiumBack}
                alt=""
                className="premium-back"
            />

            {/* Envelope */}

            <div className="envelope">

                {/* Inner Lining */}

                <img
                    src={innerLining}
                    alt=""
                    className="inner-lining"
                />

                {/* Invitation */}

                <InvitationCard
                    visible={showCard}
                    expand={expandCard}
                />

                {/* Envelope Body */}

                <img
                    src={envelopeBody}
                    alt=""
                    className="envelope-body"
                />

                {/* Flap */}

                <div
                    className={`flap-wrapper ${flapOpened ? "open" : ""}`}
                >

                    <img
                        src={flap}
                        alt=""
                        className="flap-image"
                    />

                    {/* Wax Shadow */}

                    <img
                        src={waxShadow}
                        alt=""
                        className={`wax-shadow ${pressed ? "pressed" : ""}`}
                    />

                    {/* Wax Seal */}

                    <button
                        className={`wax-button ${pressed ? "pressed" : ""}`}
                        onClick={onSealClick}
                        disabled={flapOpened}
                    >

                        <img
                            src={waxSeal}
                            alt="Open Invitation"
                            className="wax-seal"
                        />

                    </button>

                </div>

            </div>

        </div>

    );

}