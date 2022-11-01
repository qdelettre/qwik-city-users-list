import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, Link, useEndpoint } from "@builder.io/qwik-city";

import type { RequestHandler } from "@builder.io/qwik-city";
import { User } from "~/models/user";

export const onGet: RequestHandler<User[]> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

export default component$(() => {
  const usersResource = useEndpoint<User[]>();

  return (
    <Resource
      value={usersResource}
      onPending={() => <div aria-busy="true">Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(users) => (
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td scope="row">
                  <Link
                    href={`/user-list/${user.id}`}
                    data-tooltip={`Show user ${user.id}`}
                  >
                    {user.id}
                  </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "User list",
};
