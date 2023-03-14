import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <a href="/user-list">User list</a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "User list",
};
