const AllPricesSection = () => {
  const pricingPlans = [
    {
      price: "$12",
      plan: "All social media",
      features: [
        "Mobile optimized",
        "Powerful metrics",
        "Free custom domain",
        "Annual purchase",
      ],
    },
    {
      price: "$28",
      plan: "Real time data",
      features: [
        "Mobile optimized",
        "Powerful metrics",
        "Free custom domain",
        "Annual purchase",
        "Hosting day",
      ],
    },
    {
      price: "$40",
      plan: "Online marketing",
      features: [
        "Mobile optimized",
        "Powerful metrics",
        "Free custom domain",
        "Annual purchase",
        "Hosting day",
        "Daily update",
      ],
    },
  ];
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 shadow-lg relative"
            >
              <h3 className="text-6xl text-gray-100 absolute top-4 right-4 font-bold">
                {plan.price}
              </h3>
              <h4 className="uppercase text-sm font-semibold tracking-wider mb-2 text-gray-400">
                Monthly
              </h4>
              <h2 className="text-2xl font-bold mb-6">{plan.plan}</h2>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 border border-black text-sm font-semibold tracking-wider flex items-center hover:bg-black hover:text-white transition">
                Purchase <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPricesSection;
