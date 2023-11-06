import React from "react";

//** Styles */
import styles from "./styles.module.scss";

export default function FooterComponent() {
    return (
        <footer className={styles.Footer}>
            <article>
                <p>Something here to give the footer a purpose!</p>
                <p>Copyright © Binayu 2023.</p>
            </article>
        </footer>
    );
}
