"use client";

const cardData = [
  { title: "Users", value: 1200, icon: "👤", bg: "bg-blue-100" },
  { title: "Orders", value: 320, icon: "📦", bg: "bg-green-100" },
  { title: "Revenue", value: "$12,400", icon: "💰", bg: "bg-yellow-100" },
  { title: "Feedback", value: 85, icon: "💬", bg: "bg-pink-100" },
];

const Main = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${card.bg} hover:shadow-lg transition duration-300`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-700 text-lg">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
