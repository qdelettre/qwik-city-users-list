import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { User } from "~/components/user/user";
import { IUser } from "~/models/user";

export const onGet: RequestHandler<IUser> = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  return await response.json();
};

export default component$(() => {
  const userRessource = useEndpoint<IUser>();

  return (
    <>
      <a href="/user-list" data-tooltip="Return to list">
        return to list
      </a>

      <Resource
        value={userRessource}
        onPending={() => <div aria-busy="true">Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(user) => <User user={user} />}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "User",
};
