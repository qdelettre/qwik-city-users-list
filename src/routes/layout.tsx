import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
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
      <Footer />
    </>
  );
});
