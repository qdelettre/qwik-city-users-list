import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export const Footer = component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <a
        href="https://github.com/qdelettre/qwik-city-users-list"
        target="_blank"
        class="secondary"
      >
        Made with <span class="heart">♡</span> with Qwik City & PicoCss, by
        Quentin Delettre
      </a>
    </footer>
  );
});
