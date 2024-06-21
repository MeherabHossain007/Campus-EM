"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  ticketPrice: number;
  imageUrl: string;
}

const AllEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [sortOption, setSortOption] = useState("date");
  const [filterCategory, setFilterCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Simulated data fetch
  useEffect(() => {
    const fetchedEvents: Event[] = [
      {
        id: "1",
        title: "Annual Tech Symposium",
        date: "2024-07-15",
        time: "09:00",
        location: "Main Auditorium",
        category: "Technology",
        organizer: "CS Department",
        ticketPrice: 25,
        imageUrl: "https://picsum.photos/seed/tech/800/600",
      },
      {
        id: "2",
        title: "Campus Music Festival",
        date: "2024-08-05",
        time: "18:00",
        location: "University Grounds",
        category: "Cultural",
        organizer: "Student Council",
        ticketPrice: 15,
        imageUrl: "https://picsum.photos/seed/music/800/600",
      },
      {
        id: "3",
        title: "Career Fair 2024",
        date: "2024-09-10",
        time: "10:00",
        location: "Student Center",
        category: "Academic",
        organizer: "Career Services",
        ticketPrice: 0,
        imageUrl: "https://picsum.photos/seed/career/800/600",
      },
      {
        id: "4",
        title: "Inter-University Sports Meet",
        date: "2024-10-20",
        time: "08:00",
        location: "Sports Complex",
        category: "Sports",
        organizer: "Athletics Department",
        ticketPrice: 10,
        imageUrl: "https://picsum.photos/seed/sports/800/600",
      },
    ];
    setEvents(fetchedEvents);
    setFilteredEvents(fetchedEvents);
  }, []);

  useEffect(() => {
    let result = [...events];

    if (filterCategory) {
      result = result.filter((event) => event.category === filterCategory);
    }

    if (searchTerm) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "price":
          return a.ticketPrice - b.ticketPrice;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredEvents(result);
  }, [events, sortOption, filterCategory, searchTerm]);

  const categories = ["Academic", "Cultural", "Sports", "Technology"];

  return (
    <>
      <NavBar />
      <div className="bg-base-100">
        <div data-theme="light" className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Campus Events</h1>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex-1 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search events..."
                className="input input-bordered w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-4 ml-4">
              <select
                className="select select-bordered"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="title">Sort by Title</option>
              </select>
              <select
                className="select select-bordered"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event.title}</h2>
                  <p>
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p>{event.location}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="badge badge-outline">
                      {event.category}
                    </span>
                    <span className="font-bold">
                      {event.ticketPrice === 0
                        ? "Free"
                        : `$${event.ticketPrice}`}
                    </span>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-xl text-gray-500">No events found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllEvents;
