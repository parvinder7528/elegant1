import React, { useState } from "react";

export default function SalonServices() {
  const [activeCategory, setActiveCategory] = useState("spa-pedicure");

  const categories = [
    { id: "spa-pedicure", name: "Spa Pedicure", icon: "ri-footprint-line" },
    { id: "manicure", name: "Manicure", icon: "ri-hand-heart-line" },
    { id: "acrylic", name: "Acrylic Extensions", icon: "ri-palette-line" },
    { id: "gel-builder", name: "Gel Builder", icon: "ri-brush-2-line" },
    { id: "sns-powder", name: "SNS Powder", icon: "ri-drop-line" },
    { id: "gel-x", name: "Gel X", icon: "ri-magic-line" },
    { id: "nail-art", name: "Nail Art", icon: "ri-artboard-line" },
    { id: "hair-spa", name: "Hair Spa", icon: "ri-scissors-cut-line" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-600"
                }`}
              >
                <i className={`${category.icon} mr-2 text-lg`} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {activeCategory === "spa-pedicure" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Spa Pedicure
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Luxurious pedicure treatments for ultimate relaxation and
                  beautiful feet
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        E'LAN Regular Pedicure
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>30–35 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $50
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Sea salt soak for relaxation
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert cuticle removal
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Buffing and shaping</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Callus removal</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Relaxation massage for feet and lower legs
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hydrating softener cream
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Regular polish included
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        E'LAN Premium Pedicure
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>45–50 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $70
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pink sea salt soak</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Natural fruit and flower soak
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert cuticle removal
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Buffing and shaping</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Exfoliating scrub and callus removal
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Steam treatment for deep cleansing
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Feet and legs mask for ultimate hydration
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Relaxation massage with candle oil
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Nourishing moisture</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Regular polish included
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Buffing Shape and Shellac Gel only on Toes
                    </span>
                    <span className="text-rose-600 font-bold">$35</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Take off Shellac Gel on Toes
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Shellac Gel Polish
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "manicure" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Manicure
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional manicure services for perfectly groomed hands
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        E'LAN Classic Manicure
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>25–30 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $45
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Softener soak</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert cuticle removal
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Precise buffing and shaping
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Cuticle oil application
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Relaxation hand massage
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hydrating softener cream
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Polish included</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        E'LAN Premium Manicure
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>45–50 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $65
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Fruit and flower soak
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert cuticle removal and shaping
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Buffing and exfoliating hand mask
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Nourishing moisturizer
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hand mask for deep hydration
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Relaxation massage with candle oil
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Polish included</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Buffing Shape and Shellac Gel only on Nails
                    </span>
                    <span className="text-rose-600 font-bold">$35</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Take off Shellac Gel on Nails
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Shellac Gel Polish
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "acrylic" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Acrylic Extensions Nails
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Durable and beautiful acrylic nail extensions with custom
                  designs
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Full Set Acrylic Extensions with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $60
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Customized acrylic extension application
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert shaping & length customization
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Choice of polish colour
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Overlay on Natural Nails with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $55
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Acrylic overlay on natural nails
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert shaping and polishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Refill
                      </h3>
                      <p className="text-sm text-gray-500 italic">
                        Price may vary based on growth
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $45
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Re-balancing acrylic overlay
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shaping and polishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Shellac / Gel Polish
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Designer Nail (each)
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Soak Off Acrylic Nails
                    </span>
                    <span className="text-rose-600 font-bold">$25</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Takeoff Acrylic Nails
                    </span>
                    <span className="text-rose-600 font-bold">$20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      1–2 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      3–4 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">XL Length</span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      XXL Length
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "gel-builder" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Gel Builder
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Strong, flexible gel builder nails for natural-looking
                  extensions
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Full Set Gel Builder with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $70
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Professional gel builder application
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Custom length and shape
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Natural-looking finish
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Polish included</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Overlay on Natural Nails with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $65
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Gel builder overlay for strengthening
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Expert shaping and finishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Refill
                      </h3>
                      <p className="text-sm text-gray-500 italic">
                        Price may vary based on growth
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $55
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Re-balancing gel builder
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shaping and polishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Shellac / Gel Polish
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Designer Nail (each)
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Soak Off Gel Builder
                    </span>
                    <span className="text-rose-600 font-bold">$25</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      1–2 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      3–4 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">XL Length</span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      XXL Length
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "sns-powder" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  SNS Powder
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Vitamin-enriched powder dip system for healthy, long-lasting
                  nails
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Full Set SNS Powder with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $65
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        SNS powder dip application
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Vitamin-enriched formula
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Custom shaping and length
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Wide range of colors
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Overlay on Natural Nails
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $60
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        SNS powder overlay for strength
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Natural nail protection
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Refill
                      </h3>
                      <p className="text-sm text-gray-500 italic">
                        Price may vary based on growth
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $50
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">SNS powder refill</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shaping and finishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Designer Nail (each)
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Soak Off SNS
                    </span>
                    <span className="text-rose-600 font-bold">$20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      1–2 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      3–4 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">XL Length</span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      XXL Length
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "gel-x" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Gel X
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Soft gel nail extensions with a lightweight, natural feel
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Full Set Gel X with Polish
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $75
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Soft gel extension tips
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Lightweight and flexible
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Custom shape and length
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Polish included</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Refill
                      </h3>
                      <p className="text-sm text-gray-500 italic">
                        Price may vary based on growth
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $60
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Gel X tip replacement
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shaping and polishing
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Shellac / Gel Polish
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      French Tip
                    </span>
                    <span className="text-rose-600 font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Designer Nail (each)
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      Soak Off Gel X
                    </span>
                    <span className="text-rose-600 font-bold">$20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      1–2 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      3–4 Nails Fix
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">XL Length</span>
                    <span className="text-rose-600 font-bold">$5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">
                      XXL Length
                    </span>
                    <span className="text-rose-600 font-bold">$10</span>
                  </div>
                </div>
              </div>
            </div>
          )}

         {activeCategory === 'nail-art' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Customized Nail Art
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Unique and personalized nail art designs created just for you
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Customized Nail Art
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        Quote based
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Customized nail art based on online picture reference
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Unique designs tailored to your preferences
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Professional artistic application
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

         {activeCategory === 'hair-spa' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Indulge Hair Spa
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Relaxing and rejuvenating hair spa treatments for ultimate wellness
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Classic Hair Spa
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>50 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $120
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Herbal face wash &amp; eye care
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Head relaxation massage
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Neck, shoulder &amp; nape massage
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Hair wash (twice)</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hair spa cream application
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hair drying &amp; serum application
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                        Advance Hair Spa
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-time-line mr-2 text-rose-500" />
                        <span>75 mins</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-rose-600">
                        $150
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Includes all Classic Hair Spa features
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Meridian head massage
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Facial cleansing &amp; lifting massage
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Exclusive massage cream
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Moisturizing face mask
                      </span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Hand, neck &amp; shoulder massage
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
