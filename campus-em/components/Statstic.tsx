export const Statistics = () => {
  const stats = [
    { label: "Events Hosted", value: "500+" },
    { label: "Active Users", value: "10,000+" },
    { label: "Departments", value: "20+" },
    { label: "Satisfaction Rate", value: "98%" },
  ];

  return (
    <section className="bg-primary text-primary-content py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
