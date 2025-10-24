import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const values = [
    {
      icon: "🌳",
      title: "Sustainable Sourcing",
      description: "We use only FSC-certified wood and eco-friendly materials in all our products."
    },
    {
      icon: "🔨",
      title: "Artisan Craftsmanship",
      description: "Each piece is handcrafted by skilled artisans with attention to every detail."
    },
    {
      icon: "💚",
      title: "Quality Guarantee",
      description: "All our furniture comes with a 10-year warranty and lifetime customer support."
    },
    {
      icon: "🚚",
      title: "White Glove Delivery",
      description: "We deliver, assemble, and place your furniture exactly where you want it."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20"> {/* Added pt-20 to push content below header */}
      {/* Hero Section */}
      <section className={`${styles.heroSection} relative h-36 flex items-center justify-center bg-[#231D1A]`}>
        <div className="absolute inset-0 bg-[#6e422c] bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting beautiful spaces with furniture that tells your story
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our showroom or browse our collection online. Our design consultants are here to help you create the home of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Browse Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;