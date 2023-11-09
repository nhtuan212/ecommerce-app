import React from "react";

//** Styles */
import { FooterStyles } from "./styles";

export default function FooterComponent() {
    return (
        <footer className={FooterStyles.Footer}>
            <article>
                <p>Something here to give the footer a purpose!</p>
                <p>Copyright © Binayu 2023.</p>
            </article>
        </footer>
    );
}
