import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { User } from "~/models/user";

export const onGet: RequestHandler<User> = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  return await response.json();
};

export default component$(() => {
  const user = useEndpoint<User>();

  return (
    <Resource
      value={user}
      onPending={() => <div aria-busy="true">Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(user) => (
        <article>
          <header>User Id:{user.id} </header>
          <div class="grid headings">
            <label for="username">
              Username
              <input
                disabled
                value={user.username}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </label>

            <label for="name">
              Name
              <input
                disabled
                value={user.name}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </label>
          </div>

          <label for="email">Email address</label>
          <input
            disabled
            value={user.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />

          <label for="phone">Phone</label>
          <input
            disabled
            value={user.phone}
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone number"
            required
          />
        </article>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "User",
};
