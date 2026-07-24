import styles from "./Hero.module.css";

export default function FloatingParticles() {

    return (

        <div className={styles.particles}>

            {Array.from({ length: 18 }).map((_, index) => (

                <span
                    key={index}
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${8 + Math.random() * 6}s`
                    }}
                />

            ))}

        </div>

    );

}