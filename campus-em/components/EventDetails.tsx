import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

interface EventDetailsProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  category: string;
  capacity: number;
  registrationDeadline: string;
  ticketPrice: number;
  imageUrl: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  title,
  date,
  time,
  location,
  description,
  organizer,
  category,
  capacity,
  registrationDeadline,
  ticketPrice,
  imageUrl,
}) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Event Details</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Date:</strong> {date}
                  </li>
                  <li>
                    <strong>Time:</strong> {time}
                  </li>
                  <li>
                    <strong>Location:</strong> {location}
                  </li>
                  <li>
                    <strong>Category:</strong> {category}
                  </li>
                  <li>
                    <strong>Organizer:</strong> {organizer}
                  </li>
                  <li>
                    <strong>Capacity:</strong> {capacity} attendees
                  </li>
                  <li>
                    <strong>Registration Deadline:</strong>{" "}
                    {registrationDeadline}
                  </li>
                  <li>
                    <strong>Ticket Price:</strong> ${ticketPrice.toFixed(2)}
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="btn btn-primary">Register for Event</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
