import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <main class="container">
        <section>
          <Slot />
        </section>
      </main>
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
    </>
  );
});
