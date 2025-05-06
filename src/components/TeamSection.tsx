
import { Card, CardContent } from "@/components/ui/card";

const directors = [
  {
    name: "Ijaktu Ogbole",
    role: "Director",
    image: "/placeholder.svg"
  },
  {
    name: "Stephanie Ken Ogbole",
    role: "Director",
    image: "/placeholder.svg"
  },
  {
    name: "Okojokwu Kennedy Ogbole",
    role: "Director",
    image: "/placeholder.svg"
  }
];

const shareholders = [
  "Ijaktu Ogbole",
  "Stephanie Ken Ogbole",
  "Andrella Ken Ogbole",
  "Karenhappuch Ken Ogbole",
  "Okojokwu Kennedy Ogbole"
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-agro-primary">Team</span></h2>
          <div className="w-20 h-1 bg-agro-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Meet the team behind Agropo Seeds Nigeria Limited, dedicated to revolutionizing seed quality in Nigerian agriculture.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-32 h-32 object-cover" 
                  />
                </div>
                <CardContent className="text-center py-6">
                  <h4 className="text-xl font-semibold">{director.name}</h4>
                  <p className="text-agro-primary">{director.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Shareholders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shareholders.map((shareholder, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-agro-light flex items-center justify-center">
                    <span className="font-semibold text-agro-primary">
                      {shareholder.split(" ")[0][0]}
                    </span>
                  </div>
                  <span className="font-medium">{shareholder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
