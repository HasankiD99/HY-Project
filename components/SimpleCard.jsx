export default function SimpleCard() {
  const cards = [
    {
      title: "Digital Solution and media",
      text: "At Hevelt Yard Inc., we combine cutting-edge technology with AI-driven innovation to deliver smart, scalable, and future-ready solutions.",
    },
    {
      title: "Software and app solutions",
      text: "At Hevelt Yard Inc., we combine cutting-edge technology with AI-driven innovation to deliver smart, scalable, and future-ready solutions.",
    },
    {
      title: "Networking and secure solutions",
      text: "At Hevelt Yard Inc., we combine cutting-edge technology with AI-driven innovation to deliver smart, scalable, and future-ready solutions.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white  h-[312px] border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
