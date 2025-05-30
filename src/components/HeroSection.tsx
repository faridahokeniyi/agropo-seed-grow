import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-28 bg-gradient-to-r from-agro-light to-white"
    >
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-agro-accent/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-agro-dark">
                Reg No: 1912255
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Seeds for{" "}
              <span className="text-agro-primary">Nigerian Farmers</span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-12">
              Providing high-quality, affordable, high-yield seeds in time to
              farmers across Nigeria. We're committed to helping farmers improve
              their yields and livelihoods.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-agro-primary hover:bg-agro-dark text-white px-6"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-agro-primary text-agro-primary hover:bg-agro-primary/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 md:w-32 md:h-32 bg-agro-accent/30 rounded-full -z-10"></div>
              <img
                src="img/field.jpg"
                alt="Agricultural field with seeds"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -right-6 -bottom-6 w-24 h-24 md:w-32 md:h-32 bg-agro-primary/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
