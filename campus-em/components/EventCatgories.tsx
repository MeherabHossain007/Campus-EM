export const FeaturedCategories = () => {
  const categories = [
    { name: "Academic", icon: "🎓" },
    { name: "Sports", icon: "🏅" },
    { name: "Cultural", icon: "🎭" },
    { name: "Technology", icon: "💻" },
  ];

  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Event Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
