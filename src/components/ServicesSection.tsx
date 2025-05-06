
import { Sprout, Tractor, Leaf, Database, FileText, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Production of Breeder Seeds",
    description: "We produce high-quality breeder seeds to ensure genetic purity and high yield potential."
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Sourcing and Selling Breeder Seeds",
    description: "We source the best breeder seeds from around the world to bring quality genetics to Nigerian farmers."
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Production of Foundation Seeds",
    description: "We multiply breeder seeds to create foundation seeds that maintain genetic integrity."
  },
  {
    icon: <Tractor className="h-8 w-8" />,
    title: "Seed Distribution",
    description: "We source and distribute certified seeds to farmers across Nigeria to improve crop yields."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Seed Processing & Storage",
    description: "We operate seed processing facilities, cleaners, packaging units, and storage silos to maintain seed quality."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Research & Development",
    description: "We conduct research and development on seeds to improve yields, disease resistance, and adaptability."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-agro-primary">Services</span></h2>
          <div className="w-20 h-1 bg-agro-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of seed-related services to meet the needs of Nigerian farmers and contribute to agricultural development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-agro-light rounded-lg flex items-center justify-center">
                    <div className="text-agro-primary">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-agro-primary rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Additional Areas of Interest</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Maintain network of growers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Publish seeds related magazines and journals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Own and operate seed banks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Maintain databases of seeds, agencies, companies, and breeders</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Projections</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">1</span>
                  </div>
                  <span>Set up all required equipment and systems in line with NASC</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">2</span>
                  </div>
                  <span>Build all necessary capacities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">3</span>
                  </div>
                  <span>Seek partners in line with NASC guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
