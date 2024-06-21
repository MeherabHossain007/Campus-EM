/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import CreateEventModal from "./EventModal";

function NavBar() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateEvent = (eventData: any) => {
    // Implement logic to create a new event
    console.log("New event data:", eventData);
    // You would typically send this data to your backend API
  };
  return (
    <div data-theme="light" className="navbar bg-base-100 shadow-sm">
      <div className="flex-1 text-black">
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 font-bold text-4xl">
            CAMPUS
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 font-bold text-[16px]">
            Event Management
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <div>
            <button
              className="btn btn-primary mr-5"
              onClick={() => setIsCreateModalOpen(true)}
            >
              Create New Event
            </button>

          <CreateEventModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onSubmit={handleCreateEvent}
          />
        </div>
        <Link className="btn btn-outline btn-secondary mr-10" href={"/events/myevents"}>
          My Events
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
