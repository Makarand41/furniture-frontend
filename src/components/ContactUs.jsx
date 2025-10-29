// import React from "react";
// import styles from "./ContactUs.module.css";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-white pt-[96px]">
//       {/* Hero Section */}
//       <section
//         className={`${styles.heroSection} relative flex flex-col items-center justify-center text-center text-white py-20`}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
//           <p className="text-lg max-w-2xl mx-auto opacity-90">
//             We’d love to hear from you — whether you’re planning a project, need help, or just want to say hello.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Office */}
//           <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="text-4xl mb-3">📍</div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Office</h3>
//             <p className="text-gray-600">
//               TCS Chennai, Siruseri Campus<br />Chennai, Tamil Nadu 603103
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="text-4xl mb-3">📞</div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h3>
//             <p className="text-gray-600">
//               +91 98765 43210<br />Mon – Sat, 9AM to 7PM
//             </p>
//           </div>

//           {/* Email */}
//           <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="text-4xl mb-3">✉️</div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
//             <p className="text-gray-600">
//               support@furnistore.com<br />customercare@furnistore.com
//             </p>
//           </div>

//           {/* ✅ WhatsApp Contact */}
//           <a
//             href="https://wa.me/918379073626"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-50 shadow-md rounded-lg p-8 text-center hover:shadow-lg hover:bg-green-100 transition-all duration-300"
//           >
//             <div className="text-4xl mb-3">💬</div>
//             <h3 className="text-xl font-semibold mb-2 text-green-700">WhatsApp Us</h3>
//             <p className="text-gray-600">
//               Click to start chat directly on WhatsApp<br />
//               <span className="font-medium text-green-700">+91 83790 73626</span>
//             </p>
//           </a>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16">
//         <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="rounded-xl overflow-hidden shadow-md">
//             <img
//               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
//               alt="Contact office"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Form */}
//           <div className="bg-white shadow-lg rounded-xl p-8">
//             <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h2>
//             <form className="space-y-5">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Message</label>
//                 <textarea
//                   rows="5"
//                   placeholder="Write your message..."
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-amber-800 text-white font-semibold py-3 rounded-md hover:bg-amber-900 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import styles from "./ContactUs.module.css";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxUQ73uIvs3s_NWu-MEQv8G54ibOjG9RPK9PIfarjiAMmbBPsP8U-nuHjCGSXeNl2Ki/exec";

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;

    const body = new URLSearchParams({
      Name: form.name.value,
      Email: form.email.value,
      Message: form.message.value,
    }).toString();

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      setStatus("✅ Message sent! We will contact you soon.");
      form.reset();
    } catch (error) {
      setStatus("❌ Failed to send. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[96px]">
      {/* Hero Section */}
      <section
        className={`${styles.heroSection} relative flex flex-col items-center justify-center text-center text-white py-20`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We’d love to hear from you — whether you’re planning a project, need help, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Office</h3>
            <p className="text-gray-600">
              TCS Chennai, Siruseri Campus<br />Chennai, Tamil Nadu 603103
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h3>
            <p className="text-gray-600">
              +91 98765 43210<br />Mon – Sat, 9AM to 7PM
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">
              support@furnistore.com<br />customercare@furnistore.com
            </p>
          </div>

          <a
            href="https://wa.me/918379073626"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-50 shadow-md rounded-lg p-8 text-center hover:shadow-lg hover:bg-green-100 transition-all duration-300"
          >
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">WhatsApp Us</h3>
            <p className="text-gray-600">
              Click to start chat directly on WhatsApp<br />
              <span className="font-medium text-green-700">+91 83790 73626</span>
            </p>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Contact office"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h2>

            {/* ✅ Working Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white font-semibold py-3 rounded-md hover:bg-amber-900 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* ✅ Status Message */}
            {status && (
              <p className="text-center text-gray-700 mt-4 font-medium">
                {status}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

