"use client";

import Link from "next/link";
import { useState } from "react";

interface User {
  username: string;
  password: string;
  // Add additional fields for registration if needed (name, email)
}

function LoginRegistration() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mx-auto max-w-sm h-screen p-4">
      {isLogin ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegistrationForm onToggleForm={toggleForm} />
      )}
    </div>
  );
}

function LoginForm({ onToggleForm }: { onToggleForm: () => void }) {
  const [credentials, setCredentials] = useState<User>({
    username: "",
    password: "",
  });
  const[role, setRole] = useState("") // Add role state and setter

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle login form submission with credentials.username and credentials.password
  };

  return (
    <>
      <div className="my-10">
        <div className="flex flex-col items-center justify-center space-y-4 font-bold text-5xl">
          Campus
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 font-bold text-xl">
          Event Management
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
          <select className="select w-full max-w-xs mt-8 shadow-sm" onChange={(e) =>setRole(e.target.value)} value={role}>
            <option disabled selected>
              Pick your role
            </option>
            <option>Student</option>
            <option>Faculty</option>
            <option>Admin</option>
            <option>Event Organizer</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-w-2"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <Link
            href={"/dashboard"}
            type="submit"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </Link>
        </div>
        <div>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onToggleForm}
        >
          Create a new account
        </button>
      </form>
    </>
  );
}

interface RegistrationData {
  name: string; // Add name field for registration
  email: string;
  // Continued from previous code...
}

function RegistrationForm({ onToggleForm }: { onToggleForm: () => void }) {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle registration form submission with formData.name, formData.email, etc.
  };

  return (
    <>
      <div className="my-10">
        <div className="flex flex-col items-center justify-center space-y-4 font-bold text-5xl">
          Campus
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 font-bold text-xl">
          Event Management
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <select className="select w-full max-w-xs mt-5 shadow-sm">
            <option disabled selected>
              Pick your role
            </option>
            <option>Student</option>
            <option>Faculty</option>
            <option>Admin</option>
            <option>Event Organizer</option>
          </select>
        </div>
        {/* Existing username and password fields from previous code */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onToggleForm}
          >
            Back to Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginRegistration;
