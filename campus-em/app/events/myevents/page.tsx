"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}

const UserEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"registered" | "created">(
    "registered"
  );

  const registeredEvents: Event[] = [
    {
      id: "1",
      title: "Annual Tech Symposium",
      date: "July 15, 2024",
      location: "Main Auditorium",
      imageUrl: "https://picsum.photos/seed/tech/800/600",
    },
    {
      id: "2",
      title: "Campus Music Festival",
      date: "August 5, 2024",
      location: "University Grounds",
      imageUrl: "https://picsum.photos/seed/music/800/600",
    },
  ];

  const createdEvents: Event[] = [
    {
      id: "3",
      title: "Career Fair 2024",
      date: "September 10, 2024",
      location: "Student Center",
      imageUrl: "https://picsum.photos/seed/career/800/600",
    },
  ];

  const handleCancelRegistration = (eventId: string) => {
    // Implement cancellation logic here
    console.log(`Cancelled registration for event ${eventId}`);
  };

  const handleEditEvent = (eventId: string) => {
    // Implement edit logic here
    console.log(`Editing event ${eventId}`);
  };

  const EventCard: React.FC<{ event: Event; isCreated?: boolean }> = ({
    event,
    isCreated = false,
  }) => (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={300}
          height={200}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>
          {event.date} - {event.location}
        </p>
        <div className="card-actions justify-end">
          {isCreated ? (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleEditEvent(event.id)}
            >
              Edit Event
            </button>
          ) : (
            <button
              className="btn btn-error btn-sm"
              onClick={() => handleCancelRegistration(event.id)}
            >
              Cancel Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-base-100">
      <NavBar />
      <div
        data-theme="light"
        className="container h-screen w-screen mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-8">My Events</h1>

        <div className="tabs tabs-boxed mb-6">
          <a
            className={`tab ${activeTab === "registered" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("registered")}
          >
            Registered Events
          </a>
          <a
            className={`tab ${activeTab === "created" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("created")}
          >
            Created Events
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "registered" &&
            registeredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          {activeTab === "created" &&
            createdEvents.map((event) => (
              <EventCard key={event.id} event={event} isCreated />
            ))}
        </div>

        {((activeTab === "registered" && registeredEvents.length === 0) ||
          (activeTab === "created" && createdEvents.length === 0)) && (
          <div className="text-center py-8">
            <p className="text-xl text-gray-500">No events found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEvents;
