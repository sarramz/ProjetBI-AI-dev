"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faPaperPlane,
  faSpinner,
  faCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`
                  w-full pl-10 pr-3 py-2 rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.name ? "border-red-500" : "border-gray-300"}
                `}
                placeholder="Your name"
              />
            </div>
            {errors.name && <p className="mt-1 text-red-500 text-xs italic">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full pl-10 pr-3 py-2 rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.email ? "border-red-500" : "border-gray-300"}
                `}
                placeholder="your@email.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-red-500 text-xs italic">{errors.email}</p>}
          </div>

          {/* Subject Input */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`
                w-full px-3 py-2 rounded-lg border
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.subject ? "border-red-500" : "border-gray-300"}
              `}
              placeholder="What is this about?"
            />
            {errors.subject && <p className="mt-1 text-red-500 text-xs italic">{errors.subject}</p>}
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`
                w-full px-3 py-2 rounded-lg border
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.message ? "border-red-500" : "border-gray-300"}
              `}
              placeholder="Your message here..."
            />
            {errors.message && <p className="mt-1 text-red-500 text-xs italic">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full bg-[#0B162C] hover:bg-blue-600 text-white font-bold 
                py-2 px-4 rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 transition-colors
                ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
              `}
            >
              <div className="flex items-center justify-center">
                {isSubmitting ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                ) : (
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </div>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus && (
            <div
              className={`
              mt-4 p-3 rounded-lg flex items-center
              ${submitStatus === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
            `}
            >
              <FontAwesomeIcon icon={submitStatus === "success" ? faCheck : faExclamationCircle} className="mr-2" />
              {submitStatus === "success" ? "Message sent successfully!" : "Failed to send message. Please try again."}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm

