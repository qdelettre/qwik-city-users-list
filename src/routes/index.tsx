import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <Link href="/user-list" prefetch={true}>
        User list
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "User list",
};
