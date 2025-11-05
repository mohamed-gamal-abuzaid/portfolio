"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // 🔹 Validate inputs
    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // 🔹 Send email
    setLoading(true);
    const serviceId = "service_52mt6ti";
    const templateId = "template_s43tj5g";
    const publicKey = "ICTSvbZaG3giXue9o";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mohamed Gamal",
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccess("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-16 pb-16">
      <h1 className="text-3xl sm:text-4xl text-white text-center font-bold mb-4">
        Get In Touch
      </h1>
      <span className="block w-16 h-1 bg-amber-200 mx-auto"></span>
      <p className="text-center text-sm sm:text-base text-white mt-4">
        Feel free to contact me — I’ll get back to you soon!
      </p>

      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16">
        <div className="h-full">
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md"
          />
        </div>
        <div className="h-full">
          <textarea
            placeholder="Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
        </div>
      </div>

      {/* ✅ Feedback messages */}
      {error && <p className="text-center text-red-400 mt-4">{error}</p>}
      {success && <p className="text-center text-green-400 mt-4">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`mt-8 bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-md flex items-center gap-2 mx-auto shadow-md cursor-pointer transition ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        <FaPaperPlane size={18} />
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Contact;
