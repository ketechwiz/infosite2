import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="bg-[#FDFCF8] min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Interested in collaborating on AI research, medical innovation, or educational outreach? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-stone-900 text-white border-none shadow-xl">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Email</h3>
                  <a href="mailto:ramyacvhs@gmail.com" className="text-2xl font-light hover:text-amber-200 transition-colors block break-words">
                    ramyacvhs@gmail.com
                  </a>
                  <a href="mailto:champramya@gmail.com" className="text-lg font-light text-stone-400 hover:text-amber-200 transition-colors block mt-1 break-words">
                    champramya@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/airamya/" target="_blank" rel="noreferrer" className="flex items-center text-xl font-light hover:text-amber-200 transition-colors">
                    <Linkedin className="mr-2 w-5 h-5" /> linkedin.com/in/airamya
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Location</h3>
                  <p className="text-xl font-light">Houston, Texas, USA</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="font-bold text-stone-900 mb-2">Open to Opportunities in:</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-1">
                <li>Research Collaborations</li>
                <li>Speaking Engagements (AI & Health)</li>
                <li>Educational Outreach</li>
                <li>Medical Innovation Projects</li>
              </ul>
            </div>
          </div>

          {/* Form Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <Input id="name" placeholder="Your name" className="bg-stone-50 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-stone-50 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <Textarea id="message" placeholder="How can we collaborate?" className="h-32 bg-stone-50 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-xs text-stone-400 text-center mt-4">
                Note: This is a demo form. Please use the email links to contact directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}