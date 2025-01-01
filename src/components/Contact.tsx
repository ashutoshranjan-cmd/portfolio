import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import  { useState } from 'react';
import { useRef } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const { toast } = useToast();
  const ref = useRef<any>();

  // States to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Collect the form data
    const { name, email, subject, message }:any = formData;

    // You can log or manipulate the data here before sending it
    console.log('Form Data:', { name, email, subject, message });

    // Send the email using EmailJS (assuming the same logic as before)
    emailjs.sendForm('service_te37qjj', 'template_dly8mhk',ref.current, 'ibSirtwsO4DQrpCaw')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: "There was an issue sending your message. Please try again later.",
        });
      });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <Card className="p-6">
          <form onSubmit={handleSubmit} ref={ref} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  type="email" 
                  placeholder="Your email" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Message subject" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}
