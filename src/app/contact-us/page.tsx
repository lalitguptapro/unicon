"use client"; // Add this at the top to make it a Client Component

import { useState } from "react";
import Pagebanner from "@/components/common/Pagebanner";
import SEO from "@/components/common/SEO";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8ac6fa09-2bfb-47f0-932b-6ab944e50164", // Replace with your actual access key
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      setShowPopup(true); // Show the popup on success
      form.reset(); // Optionally clear the form
    }
  }

  return (
    <div>
      <SEO
        title="Home - Your Digital Marketing Agency"
        description="We provide web design, digital marketing, and SEO services tailored to your business needs."
        keywords="web design, digital marketing, SEO, marketing agency"
        ogImage="/images/home-og-image.png"
        ogType="website"
      />
      <main>
        <Pagebanner pageTitle="Contact Us" />

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              name="message"
              required
              placeholder="Enter Message"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Submit Form
          </button>
        </form>

        {/* Thank You Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold">Thank You!</h2>
              <p>Your message has been submitted successfully.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
