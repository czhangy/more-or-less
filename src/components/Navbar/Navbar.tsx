// Stylesheet
import styles from "./Navbar.module.scss";
// Next
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <div className={styles.logo}>
                    <div className={styles["logo-img"]}>
                        <Image
                            src="/assets/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className={styles["logo-text"]}>MORE OR LESS</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
