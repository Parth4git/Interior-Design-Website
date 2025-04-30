import React from "react";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5bb2e65f-0193-4f52-a71a-066243e220ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      console.log(result);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Info Section */}
        <div className="text-black space-y-2">
          <h2 className="text-6xl font-bold mb-10">Contact Us</h2>
          <h3 className="text-2xl font-semibold underline">Get in Touch</h3>
          <p className="text-lg text-gray-600 ">
            We would love to hear from you! Whether you have a question, need
            assistance, or want to discuss your project, feel free to reach out.
            Our team is here to help every step of the way.
          </p>
          <div className="space-y-4 mt-6">
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dkarchitects7@gmail.com "
                className="text-gray-600 hover:underline"
              >
                dkarchitects7@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+916395788806"
                className="text-gray-600 hover:underline"
              >
                +91 6395788806
              </a>
            </p>
            <p className="text-lg text-gray-600">
              <strong className="text-black">Address:</strong> 1619/1 Madhav
              puram Delhi road Meerut, Uttar Pradesh 250002
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <form
          className="bg-white p-6 rounded-2xl shadow-xl w-full mt-8 border border-gray-300 h-96"
          onSubmit={onSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-gray-600 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 mt-2 rounded-md hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
