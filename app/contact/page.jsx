"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Script from "next/script";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contato@diegofelix.com.br",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "São Paulo, Brazil",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Google Recaptcha
    // This is a global variable from the Google Recaptcha script
    grecaptcha.ready(async () => {
      try {
        const recaptchaToken = await grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

        const response = await fetch("/api/send", {
          method: "POST",
          body: JSON.stringify({ ...formData, recaptchaToken }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          setSuccess(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        } else {
          const data = await response.json();
          setError(data.error?.message || "An error occurred");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  Feel free to reach out if you have any questions or project
                  ideas. I’m always open to discussing new opportunities and
                  collaborations!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  className="h-[200px]"
                  placeholder="Type your message here."
                  onChange={handleInputChange}
                  required
                />

                <Button size="md" className="max-w-40" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </Button>
                {success && <p className="text-accent">Message sent!</p>}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
