
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, MapPin, Github, Linkedin, Twitter, Send,  } from 'lucide-react'

function Contact() {
  return (
    <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a]"
    >
       <div className="container lg:px-10 mx-auto flex flex-col justify-center">
        <h2 className="text-[33px] font-bold mb-3 text-center">Let's Work Together</h2>
        <div className="h-1 w-20 bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-8" />
        <div className="boder border-red-500 lg:px-72 text-neutral-700 dark:text-neutral-400">
          <p className="text-center mb-15 ">
            Have a project in mind or need help with web design or development? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* Left: Form */}
          <div className="md:col-span-2">
            <Card className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Name</label>
                    <Input placeholder="Your name" className='bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black'/>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className='bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black'/>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Message</label>
                    <Textarea placeholder="Tell me about your project or how I can help..." className='bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black'/>
                  </div>

                  <div>
                    <Button variant="default" size="lg" className="w-full dark:bg-white dark:text-black bg-black text-white  cursor-pointer hover:opacity-90 justify-center">
                      {/* < className="size-4" /> */}
                      <Send/>
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Info cards stack */}
          <div className="space-y-6">
            <Card className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer">
              <CardContent>
                <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-neutral-300 dark:bg-neutral-700  inline-flex">
                      <Mail className="w-4 h-4 text-gray-800 dark:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Email</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">ezefavourchimereze@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-neutral-300 dark:bg-neutral-700  inline-flex">
                      <MapPin className="w-4 h-4 text-gray-800 dark:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Location</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">Port-Harcourt, Nigeria</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer">
              <CardContent>
                <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
                <div className="flex items-center gap-3 mb-3">
                  <button className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"><Github className="w-4 h-4 text-gray-700 dark:text-white" /></button>
                  <button className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"><Linkedin className="w-4 h-4 text-gray-700 dark:text-white" /></button>
                  <button className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"><Twitter className="w-4 h-4 text-gray-700 dark:text-white" /></button>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Follow me for updates on new projects, technical articles, and insights into web development and technical writing.</p>
              </CardContent>
            </Card>

            <Card className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer">
              <CardContent>
                <h4 className="text-lg font-semibold mb-3">Current Availability</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Open to new projects — available for freelance and contract work.</p>
                <div className="mt-3">
                  <Badge className="dark:bg-black bg-neutral-800 border-neutral-300 text-[#25d366] font-bold dark:text-[#25d366]  dark:border-neutral-700">Available</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact