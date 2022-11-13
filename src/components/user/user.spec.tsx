import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { MockUser } from '~/tests/mocks/user';
import { User } from './user';

test(`[User Component]: Should render a user`, async () => {
  const { screen, render } = await createDOM();
  await render(<User user={MockUser} />);
  expect(screen.outerHTML).toContain('host');
  const div = screen.querySelector<HTMLElement>('article');
  expect(div).toBeDefined()

  const header = screen.querySelector<HTMLElement>('article header');
  expect(header?.innerHTML).toEqual(`User Id: ${MockUser.id}`)

  const username = screen.querySelector<HTMLInputElement>('article input[name="username"]');
  expect(username?.value).toEqual(MockUser.username)
  expect(username?.hasAttribute('disabled')).toBeTruthy()
  expect(username?.hasAttribute('required')).toBeTruthy()
  expect(username?.getAttribute('placeholder')).toEqual('Username')

  const name = screen.querySelector<HTMLInputElement>('article input[name="name"]');
  expect(name?.value).toEqual(MockUser.name)
  expect(name?.hasAttribute('disabled')).toBeTruthy()
  expect(name?.hasAttribute('required')).toBeTruthy()
  expect(name?.getAttribute('placeholder')).toEqual('Name')

  const email = screen.querySelector<HTMLInputElement>('article input[name="email"]');
  expect(email?.value).toEqual(MockUser.email)
  expect(email?.hasAttribute('disabled')).toBeTruthy()
  expect(email?.hasAttribute('required')).toBeTruthy()
  expect(email?.getAttribute('placeholder')).toEqual('Email address')

  
  const phone = screen.querySelector<HTMLInputElement>('article input[name="phone"]');
  expect(phone?.value).toEqual(MockUser.phone)
  expect(phone?.hasAttribute('disabled')).toBeTruthy()
  expect(phone?.hasAttribute('required')).toBeTruthy()
  expect(phone?.getAttribute('placeholder')).toEqual('Phone number')
});
