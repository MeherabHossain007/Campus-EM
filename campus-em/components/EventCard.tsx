import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, imageUrl }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={imageUrl} alt={title} width={384} height={200} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">Register</button>
          <button className="btn btn-outline btn-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const EventCardList: React.FC = () => {
  const events = [
    {
      title: "Annual Tech Symposium",
      date: "July 15, 2024",
      location: "Main Auditorium",
      description:
        "Join us for a day of cutting-edge technology discussions and networking opportunities.",
      imageUrl: "https://picsum.photos/seed/tech/800/600",
    },
    {
      title: "Campus Music Festival",
      date: "August 5, 2024",
      location: "University Grounds",
      description:
        "Experience a night of live music featuring talented student bands and guest performers.",
      imageUrl: "https://picsum.photos/seed/music/800/600",
    },
    {
      title: "Career Fair 2024",
      date: "September 10, 2024",
      location: "Student Center",
      description:
        "Connect with top employers and explore internship and job opportunities across various industries.",
      imageUrl: "https://picsum.photos/seed/career/800/600",
    },
  ];

  return (
    <div data-theme="light" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventCardList;