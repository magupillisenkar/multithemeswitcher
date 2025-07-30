import React from "react";

export default function Contact() {
  return (
    <div className="pt-30  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
   
      {/* Left Side - Contact Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p><strong>Phone:</strong> +91 97895 43210</p>
        <p><strong>Email:</strong> support@loopproducts.com</p>
        <p><strong>Location:</strong> 123 Tech Park, Hyderabad, India</p>
      </div>

      {/* Right Side - Contact Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
