import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Post from './Controllers/Post';

vi.mock('./Controllers/Post', () => ({ default: vi.fn() }));

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.clearAllMocks();
});

test('a successful login submits once and opens the authenticated routes', async () => {
  Post.mockResolvedValue({ data: { user: 'Archer' }, token: 'test-token' });
  const user = userEvent.setup();

  render(<App />);
  await user.type(screen.getByLabelText('Username'), 'Archer');
  await user.type(screen.getByLabelText('Password'), 'secret');
  await user.click(screen.getByRole('button', { name: 'Log In' }));

  expect(Post).toHaveBeenCalledTimes(1);
  expect(Post).toHaveBeenCalledWith('LogIn', {
    userOrEmail: 'Archer',
    password: 'secret',
  });
  expect(await screen.findByText('Archer')).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('session')).token).toBe('test-token');
});
