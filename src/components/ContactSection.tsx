
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact <span className="text-agro-primary">Us</span></h2>
          <div className="w-20 h-1 bg-agro-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our services, partnership opportunities, or to inquire about our seeds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                      className="border-gray-300 focus:ring-agro-primary focus:border-agro-primary" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="border-gray-300 focus:ring-agro-primary focus:border-agro-primary" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?"
                    className="border-gray-300 focus:ring-agro-primary focus:border-agro-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..."
                    className="border-gray-300 focus:ring-agro-primary focus:border-agro-primary min-h-[150px]" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-agro-primary hover:bg-agro-dark text-white w-full"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-agro-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-agro-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Head Office Address</h4>
                    <p className="text-gray-600">Plot D245 Abiodun Uwadia St, off SCC Rd, Ushafa, Abuja</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-agro-light flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-agro-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Address</h4>
                    <a href="mailto:Info@agroposeeds.com.ng" className="text-agro-primary hover:underline">
                      Info@agroposeeds.com.ng
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-agro-light flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-agro-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone Number</h4>
                    <a href="tel:+2348051164428" className="text-agro-primary hover:underline">
                      +234(0)8051164428
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-agro-primary text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <p className="mb-4">
                We are just starting and hope with guidance from NASC we will hit the ground running and 
                start providing quality service in no time.
              </p>
              <p>
                We are open and look forward to becoming a reliable and responsible seed company
                serving Nigerian farmers and contributing to the nation's agricultural development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
