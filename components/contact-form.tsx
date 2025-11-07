"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log(formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground font-semibold">Email</p>
            <a href="mailto:Mohamed.a.marghany@gmail.com" className="text-primary hover:underline">
              Mohamed.a.marghany@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-semibold">Phone</p>
            <a href="tel:+201003023462" className="text-primary hover:underline">
              +20 (100) 302-3462
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
