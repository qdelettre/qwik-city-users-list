import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IUser } from "~/models/user";

export interface UsersTableProps {
  users: IUser[];
}

export const UsersTable = component$<UsersTableProps>(({ users }) => {
  return (
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
  );
});
