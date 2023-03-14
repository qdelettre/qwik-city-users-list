import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { IUser } from "~/models/user";
import { UsersTable } from "~/components/users-table/users-table";

export const useUsersLoader = routeLoader$<IUser[]>(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
});

export default component$(() => {
  const usersResource = useUsersLoader();

  return (
    <Resource
      value={usersResource}
      onPending={() => <div aria-busy="true">Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(users) => (
        <>{users?.length ? <UsersTable users={users} /> : null}</>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "User list",
};
