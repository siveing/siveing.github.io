import { Button } from "@/components/ui/button";
import { Code2, Sparkles } from "lucide-react";
import abstractBg from "@/assets/background.avif";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow"
        style={{ backgroundImage: `url(${abstractBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Animated title section */}
          <div className="text-center mb-12 animate-slide-up">
            {/* <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-medium">Available for opportunities</span>
            </div> */}
            
            <h1 className="text-6xl md:text-8xl font-bold mb-7 relative">
              <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient">
                Huy Siveing
              </span>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-delayed">
              <Code2 className="w-8 h-8 text-primary animate-bounce-slow" />
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed-more">
              Crafting digital experiences with modern technologies. 
              <span className="text-primary font-semibold"> React</span>, 
              <span className="text-primary font-semibold"> Node.js</span>, 
              <span className="text-primary font-semibold"> Web3</span> & more.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center flex-wrap animate-fade-in-delayed-most">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg group"
              onClick={scrollToAbout}
            >
              View My Work
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};
