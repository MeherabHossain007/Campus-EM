/* eslint-disable react/no-unescaped-entities */
export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      text: "This platform made it so easy to find and register for campus events!",
    },
    {
      name: "Jane Smith",
      role: "Event Organizer",
      text: "Managing events has never been simpler. Highly recommended!",
    },
    {
      name: "Prof. Johnson",
      role: "Faculty Member",
      text: "An excellent tool for keeping our campus community engaged.",
    },
  ];

  return (
    <section data-theme="light" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-base-100 p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
