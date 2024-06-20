'use client';

import { useRouter } from "next/router";
import EventDetails from "../../../components/EventDetails";
import NavBar from "@/components/NavBar";

// This would typically come from an API or database
const eventData = {
  title: "Annual Tech Symposium",
  date: "July 15, 2024",
  time: "9:00 AM - 5:00 PM",
  location: "Main Auditorium",
  description:
    "Join us for a day of cutting-edge technology discussions and networking opportunities. The Annual Tech Symposium brings together industry leaders, innovators, and students to explore the latest trends in technology and their impact on our future.",
  organizer: "Computer Science Department",
  category: "Technology",
  capacity: 500,
  registrationDeadline: "July 10, 2024",
  ticketPrice: 25.0,
  imageUrl: "https://picsum.photos/seed/tech/800/600",
};

const EventPage = () => {
  // const router = useRouter();
  // const { id } = router.query;

  // In a real application, you would fetch the event data based on the ID
  // For this example, we're using the static eventData

  return (
    <div data-theme="light">
      <NavBar/>
      <EventDetails {...eventData} />
    </div>
  );
};

export default EventPage;
