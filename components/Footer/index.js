import Image from "next/image";
import styles from "../../styles/Home.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="https://firebase.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png" alt="Firebase Logo" width={90} height={25} />
          </span>
        </a>
      </footer>
    )
}