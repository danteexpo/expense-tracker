import { useState } from 'react';
// img
import eyeSee from '../../public/eye-see.svg';
import eyeHide from '../../public/eye-hide.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, togglePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <form className="max-w-[480px] my-16 mx-auto p-5" onSubmit={handleSubmit}>
      <h2 className="font-bold text-2xl xl:text-3xl">Login</h2>
      <label className="block my-8 mx-auto">
        <span className="block mb-2">Email:</span>
        <input
          type="email"
          className="p-2 w-full outline-[#1f9751]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
          autoComplete="on"
        />
      </label>
      <label className="block my-8 mx-auto relative">
        <span className="block mb-2">Password:</span>
        <input
          type={viewPassword ? 'text' : 'password'}
          className="p-2 w-full outline-[#1f9751]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
          autoComplete="on"
        />
        {viewPassword ? (
          <img
            src={eyeHide}
            alt=""
            className="w-4 absolute right-2.5 bottom-3.5 cursor-pointer"
            onClick={() => togglePassword((prev) => !prev)}
          />
        ) : (
          <img
            src={eyeSee}
            alt=""
            className="w-4 absolute right-2.5 bottom-3.5 cursor-pointer"
            onClick={() => togglePassword((prev) => !prev)}
          />
        )}
      </label>
      {/* Button */}
      <a
        href="#_"
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#1f9751] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1f9751] group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-[#1f9751]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <button className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Login
        </button>
      </a>
    </form>
  );
};

export default Login;
