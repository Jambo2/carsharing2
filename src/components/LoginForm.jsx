import { useState } from 'react';

export function LoginForm() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Логин: ${userName}, Пароль: ${userPassword}`);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-sm w-full p-6 bg-white rounded-lg shadow-md border border-gray-300'>
        <h2 className='text-2xl font-semibold mb-4 text-center text-gray-700'>
          Войти
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='block mb-1 text-gray-600 font-medium'
            >
              Логин:
            </label>
            <input
              type='text'
              id='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
            />
          </div>
          <div>
            <label
              htmlFor='userpassword'
              className='block mb-1 text-gray-600 font-medium'
            >
              Пароль:
            </label>
            <input
              type='password'
              id='userpassword'
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200'
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
