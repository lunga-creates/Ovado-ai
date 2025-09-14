import React, { useState } from 'react'
import {
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from 'lucide-react'

const ContactUs = () => {
  const [status, setStatus] = useState('') // success / error message

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/myzdvrbr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('Thanks for your message! We’ll get back to you soon.')
        form.reset()
      } else {
        setStatus('Oops! Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact-us" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-2">
              Let&apos;s connect !
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Tell us a bit about yourself & we will promptly get in touch with
              you.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Carter"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="SuperCorp"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(414) 845-2391"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="heard-about"
                  className="block text-sm font-medium text-gray-700"
                >
                  How did you hear about Ovado AI ?
                </label>
                <input
                  type="text"
                  id="heard-about"
                  name="heard-about"
                  placeholder="About Ovado AI"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Please type your message here..."
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors"
                >
                  Send message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>

            {status && (
              <p className="text-center mt-4 text-sm text-green-600">
                {status}
              </p>
            )}

            {/* Social Media Icons */}
            <div className="mt-8 hidden md:flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
