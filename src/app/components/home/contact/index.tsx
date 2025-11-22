"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = {
      access_key: "506a9eb1-8700-4d62-9c1b-23b6040c2d17", // ✅ Your Web3Forms Key
      name: formData.name,
      phone: formData.number,
      email: formData.email,
      message: formData.message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);

      // reset fields
      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="label">Name *</label>
                    <input
                      required
                      className="input"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="label">Phone *</label>
                    <input
                      required
                      className="input"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Email *</label>
                  <input
                    required
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="label">Message *</label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-2 text-green-600">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success"
                      width={30}
                      height={30}
                    />
                    <p>Message sent successfully!</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit py-3 px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                </button>
              </div>
            </form>

            {/* Your right section stays same */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              {/* social links + contact info */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
