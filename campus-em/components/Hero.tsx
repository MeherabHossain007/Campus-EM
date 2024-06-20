/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const FeaturedEventHero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-vector/whole-year-concept-illustration_114360-2289.jpg?t=st=1718924933~exp=1718928533~hmac=2ab77fe6359ac5202c99ebbfeab75e256a58872b35c882f529dd2197965d610d&w=740"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Campus Event Management"
          width={700}
          height={500}
        />
        <div>
          <h1 className="text-5xl font-bold">Campus Event Management System</h1>
          <p className="py-6">
            Efficiently organize and manage campus events with our comprehensive
            system. From event creation to user registration, we've got you
            covered!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Create Event</button>
            <button className="btn btn-secondary">Browse Events</button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>User authentication and authorization</li>
              <li>Event creation and management</li>
              <li>Ticket booking and registration</li>
              <li>Venue management</li>
              <li>Reporting and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventHero;
