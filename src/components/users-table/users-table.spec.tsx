import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { MockUser } from '~/tests/mocks/user';
import { UsersTable } from './users-table';

test(`[UsersTable Component]: Should render a user table`, async () => {
  const { screen, render } = await createDOM();
  await render(<UsersTable users={[MockUser]} />);
  expect(screen.outerHTML).toContain('host');
  const div = screen.querySelector<HTMLElement>('table');
  expect(div).toBeDefined()

  const link = screen.querySelector<HTMLAnchorElement>('a');
  expect(link?.href).toEqual(`/user-list/${MockUser.id}`)
  expect(link?.getAttribute('data-tooltip')).toEqual(`Show user ${MockUser.id}`)
});
