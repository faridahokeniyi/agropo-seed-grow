
import { Leaf, Flower, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-agro-primary">Agropo Seeds</span></h2>
          <div className="w-20 h-1 bg-agro-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Agropo was incorporated in Nigeria out of the dire need to make quality seeds available and affordable to farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Story Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-agro-light rounded-lg flex items-center justify-center mb-6">
              <Leaf className="text-agro-primary h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-600">
              Agropo Seeds Nigeria Limited was formed out of the dire need to make quality seeds available and affordable. 
              We observed that farmers have been using old seeds that are over 40 years old, resulting in lower yields 
              despite best agronomy practices.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-agro-light rounded-lg flex items-center justify-center mb-6">
              <Flower className="text-agro-primary h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide high quality affordable high yield seeds in time to the farmers across Nigeria, ensuring they have 
              access to the best agricultural resources for improved productivity.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-agro-primary text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-100">
              To be the best affordable highest quality seeds and allied services provider in Nigeria, 
              revolutionizing agricultural practices and contributing to food security across the nation.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80"
                alt="Agricultural field"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose <span className="text-agro-primary">Agropo Seeds?</span></h3>
              <p className="text-gray-600 mb-8">
                We are positioned to provide timely, quality and affordable seeds to farmers across Nigeria. 
                We source new quality high-yield, disease-resistant seeds, multiply and distribute them to farmers.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-agro-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-agro-dark">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Quality Seeds</h4>
                    <p className="text-gray-600">High-quality, disease-resistant seeds that ensure better yields.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-agro-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-agro-dark">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Affordable Pricing</h4>
                    <p className="text-gray-600">Making quality seeds accessible to all farmers at affordable prices.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-agro-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-agro-dark">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Timely Delivery</h4>
                    <p className="text-gray-600">Ensuring farmers receive seeds when they need them for optimal planting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
