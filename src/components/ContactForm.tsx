"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HiMail } from "react-icons/hi"
import { useToast } from "@/context/ToastContext"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { showToast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    showToast("Sending your message...", "success")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
        showToast("Thank you! Your message has been sent successfully.", "success")
      } else {
        showToast(data.error || "Failed to send message. Please try again.", "error")
      }
    } catch (error) {
      console.error("Error:", error)
      showToast("Something went wrong. Please try again later.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="w-full max-w-md px-6 py-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6">
        <HiMail className="w-8 h-8 text-blue-500 mr-4" />
        <motion.h2
          className="text-4xl font-bold font-poppins text-white"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Us
        </motion.h2>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 disabled:opacity-50"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.section>
  )
}

