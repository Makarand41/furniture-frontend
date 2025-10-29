// import React from 'react';
// import styles from './AboutUs.module.css';

// const AboutUs = () => {
//   const values = [
//     {
//       icon: "🌳",
//       title: "Sustainable Sourcing",
//       description: "We use only FSC-certified wood and eco-friendly materials in all our products."
//     },
//     {
//       icon: "🔨",
//       title: "Artisan Craftsmanship",
//       description: "Each piece is handcrafted by skilled artisans with attention to every detail."
//     },
//     {
//       icon: "💚",
//       title: "Quality Guarantee",
//       description: "All our furniture comes with a 10-year warranty and lifetime customer support."
//     },
//     {
//       icon: "🚚",
//       title: "White Glove Delivery",
//       description: "We deliver, assemble, and place your furniture exactly where you want it."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20"> {/* Added pt-20 to push content below header */}
//       {/* Hero Section */}
//       <section className={`${styles.heroSection} relative h-36 flex items-center justify-center bg-[#231D1A]`}>
//         <div className="absolute inset-0 bg-[#6e422c] bg-opacity-40"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl font-bold mb-4">Our Story</h1>
//           <p className="text-xl max-w-2xl mx-auto">
//             Crafting beautiful spaces with furniture that tells your story
//           </p>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-amber-800 text-white">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Visit our showroom or browse our collection online. Our design consultants are here to help you create the home of your dreams.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
//               Browse Collection
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors duration-300">
//               Book Consultation
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react';
// import styles from './AboutUs.module.css';
// import ownerImg from '../assets/fc02.jpg'; // <-- correct path


// const AboutUs = () => {
//   const values = [
//     {
//       icon: "🌳",
//       title: "Sustainable Sourcing",
//       description: "We use only FSC-certified wood and eco-friendly materials in all our products."
//     },
//     {
//       icon: "🔨",
//       title: "Artisan Craftsmanship",
//       description: "Each piece is handcrafted by skilled artisans with attention to every detail."
//     },
//     {
//       icon: "💚",
//       title: "Quality Guarantee",
//       description: "All our furniture comes with a 10-year warranty and lifetime customer support."
//     },
//     {
//       icon: "🚚",
//       title: "White Glove Delivery",
//       description: "We deliver, assemble, and place your furniture exactly where you want it."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Hero Section */}
//       <section className={`${styles.heroSection} relative h-48 flex items-center justify-center`}>
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl font-bold mb-4">New Vishwakarma Furniture Works</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Faizpur City, Taluka Yawal, District Jakgaon • Since 2004
//           </p>
//         </div>
//       </section>

//       {/* About Company */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Our Story</h2>
//         <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
//           Established in November 2004, New Vishwakarma Furniture Works has been a trusted name in
//           premium and customized wooden furniture for more than two decades. From traditional craftsmanship
//           to modern styles, we create furniture that brings comfort, strength, and beauty to your home.
//         </p>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
//             <p className="text-gray-600">
//               To become the most trusted furniture brand known for innovation, craftsmanship,
//               and sustainable wood practices — bringing timeless designs to every home.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
//             <p className="text-gray-600">
//               To deliver durable, elegant, affordable wooden furniture while ensuring
//               quality workmanship, customer satisfaction, and eco-conscious production.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Owner Section */}
//       <section className="py-16 max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
//         <img
//           src={ownerImg}
//           alt="Owner"
//           className="w-64 h-64 object-cover rounded-xl shadow-lg border"
//         />
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">Owner: Mr. Santosh Nimgade</h2>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             With more than 20 years of experience, Mr. Santosh Nimgade has built this business
//             through dedication, honesty, and craftsmanship. He personally ensures high-quality
//             work and customer satisfaction in every project.
//           </p>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-amber-800 text-white">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Custom furniture for home, office, and shop interior. We also take bulk orders.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
//++++++++++++++++++++++++++++++++
import React from 'react';
import styles from './AboutUs.module.css';
import ownerImage from '../assets/owner1.jpg';
const AboutUs = () => {
  const values = [
    {
      icon: "🌳",
      title: "Quality Materials",
      description: "We use premium quality wood and durable materials ensuring long-lasting furniture."
    },
    {
      icon: "🔨",
      title: "Expert Craftsmanship",
      description: "Traditional woodworking techniques combined with modern designs by skilled artisans."
    },
    {
      icon: "💚",
      title: "Customer Satisfaction",
      description: "20 years of trusted service with personalized solutions for every customer."
    },
    {
      icon: "🏠",
      title: "Local Heritage",
      description: "Proudly serving Faizpur City and surrounding areas since 2004."
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Custom Designs" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className={`${styles.heroSection} relative h-56 flex items-center justify-center bg-[#231D1A]`}>
        <div className="absolute inset-0 bg-[#6e422c] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting beautiful furniture in Faizpur City since 2004
          </p>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={ownerImage}
                  alt="Santosh Nimgade - Owner"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Founder</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong>New Vishwakarma Furniture Works</strong> was established in November 2004 by <strong>Mr. Santosh Nimgade</strong> with a vision to provide high-quality, durable furniture to the people of Faizpur City and surrounding areas.
                </p>
                <p className="text-lg">
                  Located in the heart of Faizpur City, Taluka Yawal, District Jalgaon, our workshop has been the go-to destination for furniture that combines traditional craftsmanship with contemporary designs.
                </p>
                <p className="text-lg">
                  Under Mr. Nimgade's leadership, we have built a reputation for excellence, reliability, and customer satisfaction that has stood the test of time for over two decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Journey in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
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

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the most trusted furniture brand in Jalgaon district, known for exceptional quality, 
                innovative designs, and unmatched customer service while preserving traditional woodworking artistry.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-white">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">Our Mission</h3>
              <p className="text-gray-200 text-lg">
                To create beautiful, functional, and affordable furniture that enhances living spaces, 
                built with sustainable practices and delivered with personalized service to every customer in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Visit Our Workshop</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience quality craftsmanship firsthand at our Faizpur City workshop
          </p>
          <div className="bg-white text-gray-800 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">New Vishwakarma Furniture Works</p>
            <p className="mb-1">Faizpur City, Taluka Yawal</p>
            <p className="mb-1">District: Jalgaon</p>
            <p className="mb-1">Established: November 2004</p>
            <p className="mb-1">Owner: Santosh Nimgade</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              View Gallery
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors duration-300">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors duration-300">
              Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;