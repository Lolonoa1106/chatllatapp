import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactForm() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
        AOS.refresh();
    }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // wallet: "",
    role: "Freelancer",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setStatus({ type: "", message: "" });
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, role: e.target.value }));
    setStatus({ type: "", message: "" });
  };

    const validateForm = () => {
        if (!formData.firstName.trim()) return "First Name is required.";
        if (!formData.email.trim()) return "Email is required.";
        if (!formData.role.trim()) return "Company or Project name is required.";
        if (!formData.subject.trim()) return "Subject is required.";
        if (!formData.message.trim()) return "Message is required.";

        // Optional: Add email format validation if email is entered
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            return "Email format is invalid.";
        }

        return null; // ✅ No errors
    };

  const sendEmail = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
        setStatus({ type: "error", message: `❌ ${error}` });
        return;
    }
    emailjs.send(
      "service_uhmjgcp",
      "template_dprihb4",
      {
        name: formData.firstName + " " + formData.lastName, // Concatenate first and last name
        // last_name: formData.lastName,
        email: formData.email,
        // wallet: formData.wallet,
        role: formData.role,
        subject: formData.subject,
        message: formData.message,
      },
      "kQy6aEijP5TuvfW79" // Your user ID from EmailJS
    )
    .then(() => {
      setStatus({ type: "success", message: "✅ Message sent successfully!" });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        // wallet: "",
        role: "Freelancer",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({ type: "error", message: "❌ Failed to send message." });
    });
  };

  const inputStyles = "w-full py-3.5 px-6 rounded-3xl bg-transparent border border-gray-900 border-opacity-50 focus:border-opacity-100 focus:outline-none placeholder-gray-400 transition-all duration-500 text-white placeholder:text-gray-500 ring-0 focus:ring-0";

  return (
    <form
      onSubmit={sendEmail}
      className="space-y-4 md:space-y-6"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputStyles}
            required
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputStyles}
            required
            />
        </div>
        <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
            required
        />
        {/* <input
            type="text"
            name="wallet"
            placeholder="Wallet address (optional but useful for account-specific help)"
            value={formData.wallet}
            onChange={handleChange}
            className={inputStyles}
        /> */}
        <div className="space-y-2">
            <p className="text-gray-300 font-medium">What's your Role?</p>
            <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center border border-gray-900 rounded-full px-3 md:px-6 py-2 md:py-3.5 text-white relative">
                    <input
                    type="radio"
                    name="role"
                    value="Freelancer"
                    checked={formData.role === "Freelancer"}
                    onChange={handleRadioChange}
                    className="form-radio opacity-0 absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                    />
                    <span className={`w-4 h-4 border ${formData.role === "Freelancer" ? 'border-white' : 'border-gray-900'} rounded-full flex items-center justify-center mr-2.5`}>
                        {formData.role === "Freelancer" && (
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        )}
                    </span>
                    <span>Freelancer</span>
                </label>
                <label className="inline-flex items-center border border-gray-900 rounded-full px-3 md:px-6 py-2 md:py-3.5 text-white relative">
                    <input
                    type="radio"
                    name="role"
                    value="Client"
                    checked={formData.role === "Client"}
                    onChange={handleRadioChange}
                    className="form-radio opacity-0 absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                    />
                    <span className={`w-4 h-4 border ${formData.role === "Client" ? 'border-white' : 'border-gray-900'} rounded-full flex items-center justify-center mr-2.5`}>
                        {formData.role === "Client" && (
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        )}
                    </span>
                    <span>Client</span>
                </label>
                <label className="inline-flex items-center border border-gray-900 rounded-full px-3 md:px-6 py-2 md:py-3.5 text-white relative">
                    <input
                    type="radio"
                    name="role"
                    value="Other"
                    checked={formData.role === "Other"}
                    onChange={handleRadioChange}
                    className="form-radio opacity-0 absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                    />
                    <span className={`w-4 h-4 border ${formData.role === "Other" ? 'border-white' : 'border-gray-900'} rounded-full flex items-center justify-center mr-2.5`}>
                        {formData.role === "Other" && (
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        )}
                    </span>
                    <span>Other</span>
                </label>
            </div>
        </div>
        <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputStyles}
            required
        />
        <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`${inputStyles} resize-none`}
            required
        ></textarea>
        <button
            type="submit"
            className='inline-flex mt-8 px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300'>
            SUBMIT FORM
        </button>
        {/* {status && <p className="text-green-400">{status}</p>} */}
            {/* {status.message && (
                <p
                    className={`mt-2 text-sm ${
                    status.type === "success" ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {status.message}
                </p>
            )} */}
            <AnimatePresence>
                {status.message && (
                    <motion.p
                        key="status-message"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className={`mt-4 text-sm ${
                            status.type === "success" ? "text-green-400" : "text-red-400"
                        }`}
                    >
                    {status.message}
                    </motion.p>
                )}
            </AnimatePresence>
    </form>
  );
}