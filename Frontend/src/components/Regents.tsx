import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingSection from "./booking/BookingSection"
const Regents = () => {
  return (
    <>
      <Header />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://readdy.ai/api/search-image?query=luxury%20beauty%20salon%20in%20Regents%20Park%20Queensland%2C%20elegant%20spa%20entrance%20with%20modern%20design%2C%20sophisticated%20wellness%20center%20with%20warm%20lighting%20and%20rose%20gold%20accents&width=1920&height=1080&seq=rphero&orientation=landscape")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            E'LAN BEAUTY
            <span className="block text-3xl md:text-4xl font-light mt-2 text-rose-200">
              Regents Park
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Your sanctuary of beauty and wellness in the heart of Regents Park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-rose-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors whitespace-nowrap"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-gray-800 mb-6">
                About Our Regents Park Location
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nestled in the vibrant community of Regents Park, our flagship
                location offers a tranquil escape from the everyday. Our
                beautifully designed space combines modern luxury with warm
                hospitality, creating the perfect environment for your beauty
                journey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With state-of-the-art facilities and a team of expert
                professionals, we provide personalized treatments that celebrate
                your unique beauty. Every detail has been carefully considered
                to ensure your comfort and satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-map-pin-line text-rose-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Shop 5/57/61 Emerald Dr
                    </p>
                    <p className="text-gray-600">Regents Park QLD 4118</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line text-rose-500" />
                  </div>
                  <a
                    href="tel:(07) 3123 4567"
                    className="text-gray-700 hover:text-rose-500 transition-colors"
                  >
                    (07) 3123 4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-time-line text-rose-500" />
                  </div>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="E'LAN BEAUTY Regents Park Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                src="https://readdy.ai/api/search-image?query=elegant%20beauty%20salon%20reception%20area%20in%20Regents%20Park%2C%20modern%20luxury%20spa%20interior%20with%20comfortable%20seating%2C%20warm%20lighting%20and%20professional%20atmosphere&width=600&height=400&seq=rpabout&orientation=landscape"
              />
            </div>
          </div>
        </div>
      </section>
    <section
  id="services"
  className="py-20 bg-gradient-to-br from-rose-50 to-pink-50"
>
  <div className="max-w-6xl mx-auto px-6">
    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-gray-800 mb-4">
        Services &amp; Pricing
      </h2>
      <div className="w-24 h-px bg-[#c69c7e] mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover our comprehensive range of beauty and wellness services,
        designed to enhance your natural radiance.
      </p>
    </div>

    <div className="space-y-12">
      {/* ================= SPA & AESTHETICS ================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c69c7e] px-8 py-6">
          <h3 className="text-2xl font-serif text-white">
            Spa &amp; Aesthetics
          </h3>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Signature Facial", "60 min", "$120"],
            ["Anti-Aging Treatment", "75 min", "$150"],
            ["Hydrating Facial", "45 min", "$95"],
            ["Deep Cleansing Facial", "60 min", "$110"],
          ].map(([title, time, price], i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-[#f4ece6] transition"
            >
              <div>
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{time}</p>
              </div>
              <p className="font-semibold text-[#c69c7e]">{price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HAIR BEAUTY ================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c69c7e] px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Hair Beauty</h3>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Cut & Style", "90 min", "$85"],
            ["Color & Highlights", "180 min", "$180"],
            ["Hair Treatment", "60 min", "$65"],
            ["Bridal Hair", "120 min", "$150"],
          ].map(([title, time, price], i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-[#f4ece6] transition"
            >
              <div>
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{time}</p>
              </div>
              <p className="font-semibold text-[#c69c7e]">{price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= NAILS ================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c69c7e] px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Nails</h3>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Gel Manicure", "45 min", "$45"],
            ["Gel Pedicure", "60 min", "$55"],
            ["Nail Art", "30 min", "$25"],
            ["French Manicure", "45 min", "$50"],
          ].map(([title, time, price], i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-[#f4ece6] transition"
            >
              <div>
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{time}</p>
              </div>
              <p className="font-semibold text-[#c69c7e]">{price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HEAD SPA ================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c69c7e] px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Head Spa</h3>
        </div>

        <div className="p-8 space-y-10">
          {/* HEAD SPA EXPERIENCE */}
          <div className="border border-gray-100 rounded-xl p-6 hover:bg-[#f4ece6] transition">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xl font-semibold text-gray-800">
                Head Spa Experience
              </h4>
              <span className="text-2xl font-bold text-[#c69c7e]">$199*</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">60 min</p>

            <h5 className="font-medium text-gray-800 mb-2">
              Treatment Includes:
            </h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Herbal &amp; Epsom Salt Foot Bath</li>
              <li>• Dry Head Massage</li>
              <li>• Steam Therapy</li>
              <li>• Radiating Facial</li>
              <li>• Neck, Shoulder &amp; Arm Massage</li>
              <li>• Tailored Shampoo &amp; Conditioning</li>
              <li>• Scalp Massage</li>
              <li>• Waterfall Halo</li>
              <li>• Gentle Hair Dry</li>
            </ul>

            <p className="text-xs text-gray-500 italic mt-3">
              *Additional charges may apply for long hair from $20
            </p>
          </div>

          {/* HEAD SPA PREMIUM */}
          <div className="border border-gray-100 rounded-xl p-6 hover:bg-[#f4ece6] transition">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xl font-semibold text-gray-800">
                Head Spa Premium
              </h4>
              <span className="text-2xl font-bold text-[#c69c7e]">$299*</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">90 min</p>

            <h5 className="font-medium text-gray-800 mb-2">
              Treatment Includes:
            </h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• All Head Spa Experience Treatments</li>
              <li>• Extended Massage Time</li>
              <li>• Customized Face Mask</li>
              <li>• Restorative Hair Mask</li>
              <li>• Scalp Renewal Exfoliation</li>
            </ul>

            <p className="text-xs text-gray-500 italic mt-3">
              *Additional charges may apply for long hair from $20
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-gray-800 mb-4">Gallery</h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Take a glimpse inside our beautiful Regents Park location
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://public.readdy.ai/ai/img_res/ebcdb081197416e72d25b5c13a091568.jpg"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=professional%20facial%20treatment%20in%20progress%2C%20serene%20spa%20environment%2C%20luxury%20skincare%20products%20display&width=400&height=300&seq=rp2&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=beautiful%20hair%20styling%20station%2C%20modern%20salon%20chairs%2C%20professional%20hair%20care%20setup&width=400&height=300&seq=rp3&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=elegant%20nail%20station%20with%20luxury%20manicure%20setup%2C%20professional%20nail%20art%20tools%2C%20clean%20modern%20design&width=400&height=300&seq=rp4&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=relaxing%20spa%20waiting%20area%2C%20comfortable%20seating%2C%20calming%20atmosphere%20with%20plants&width=400&height=300&seq=rp5&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 6"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=luxury%20beauty%20products%20display%2C%20premium%20skincare%20collection%2C%20elegant%20retail%20area&width=400&height=300&seq=rp6&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Real experiences from our valued Regents Park clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The most relaxing facial I've ever had. The staff at Regents
                Park are incredibly skilled and the atmosphere is so peaceful."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Sarah Mitchell</p>
                <p className="text-sm text-gray-500">
                  Signature Facial • 2 weeks ago
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Amazing transformation! The stylists really listened to what I
                wanted and delivered beyond my expectations."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Emma Thompson</p>
                <p className="text-sm text-gray-500">
                  Hair Color &amp; Cut • 1 month ago
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Perfect nails every time. The attention to detail and quality
                of service is outstanding."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Jessica Chen</p>
                <p className="text-sm text-gray-500">
                  Gel Manicure • 3 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingSection/>
      <Footer />
    </>
  );
};

export default Regents;
