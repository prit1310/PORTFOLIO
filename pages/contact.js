"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import { personalInfo } from "../data/projects";
import { Mail, Phone, MapPin, Clock3, MessageSquare } from "lucide-react";

export default function Contact({ contactInfo }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact - Prit Senjaliya">
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/30">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 sm:mb-8">
              <span className="mr-2">💬</span>
              Let's Connect
            </div>

            <h1 className="hero-title text-gray-900 dark:text-white mb-4 sm:mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'm always excited to discuss new
              opportunities and collaborate on innovative solutions. Let's
              create something amazing together!
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="subsection-title text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Let's Start a Conversation
                  </h2>
                  <p className="body-medium text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                    I'm always interested in hearing about new projects and
                    opportunities. Whether you're a company looking to hire, or
                    you're a fellow developer wanting to collaborate, I'd love
                    to hear from you.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: (
                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      ),
                      title: "Email",
                      value: contactInfo.email,
                      description: "Drop me a line anytime",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      icon: (
                        <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      ),
                      title: "Phone",
                      value: contactInfo.phone,
                      description: "Mon-Fri from 9am to 6pm",
                      color: "from-green-500 to-green-600",
                    },
                    {
                      icon: (
                        <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      ),
                      title: "Location",
                      value: contactInfo.location,
                      description: "Available for remote work",
                      color: "from-purple-500 to-purple-600",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="card card-hover group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${contact.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-lg sm:text-xl md:text-2xl`}
                        >
                          {contact.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1">
                            {contact.title}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1 break-all">
                            {contact.value}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="card">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Response Time
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 text-lg sm:text-xl">
                        <Clock3 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold gradient-text">
                        {contactInfo.responseTime}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        Email Response
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 text-lg sm:text-xl">
                        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold gradient-text">
                        100%
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        Response Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card order-1 lg:order-2">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send me a message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="spinner mr-3"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="ml-2 icon-send group-hover:translate-x-1 transition-transform duration-300"></span>
                      </>
                    )}
                  </button>
                </form>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl sm:rounded-2xl">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm sm:text-base">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm sm:text-base">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-green-700 dark:text-green-400 text-xs sm:text-sm">
                          Thank you for reaching out. I'll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 rounded-xl sm:rounded-2xl">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white text-sm sm:text-base">
                        ⚠
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-300 text-sm sm:text-base">
                          Oops! Something went wrong
                        </h4>
                        <p className="text-red-700 dark:text-red-400 text-xs sm:text-sm">
                          Please try again or contact me directly via email.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Static generation
export async function getStaticProps() {
  const contactInfo = personalInfo;

  return {
    props: {
      contactInfo,
    },
    revalidate: 3600,
  };
}
