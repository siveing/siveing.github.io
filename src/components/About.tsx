import { useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Sparkles, Target, Zap } from "lucide-react";

export const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const highlights = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Passionate about creating impactful solutions with cutting-edge technologies",
      color: "from-primary to-accent-foreground"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Constantly exploring and mastering the latest web development trends",
      color: "from-accent-foreground to-primary"
    },
    {
      icon: Sparkles,
      title: "Creative Mind",
      description: "Blending technical expertise with creative problem-solving approaches",
      color: "from-primary via-accent-foreground to-primary"
    }
  ];

  const stats = [
    { number: "23", label: "Years Old", suffix: "" },
    { number: "5", label: "Years Experience", suffix: "+" },
    { number: "15", label: "Technologies", suffix: "+" },
    { number: "50", label: "Projects Built", suffix: "+" }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <User className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient">
              Who I Am
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer from Cambodia, building the future one line of code at a time
          </p>
        </div>

        {/* Stats grid with stagger animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-delayed group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Highlight cards with hover effects */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20 group animate-fade-in-delayed"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full transform origin-left transition-transform duration-500 ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}`} />
            </Card>
          ))}
        </div>

        {/* Bio text with enhanced styling */}
        <Card className="max-w-4xl mx-auto p-10 bg-card/50 backdrop-blur-sm shadow-2xl border-primary/20 animate-fade-in-delayed-more">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              Hey there! I'm <span className="font-bold text-primary">Jin</span> (Huy Siveing), a Full Stack Developer based in 
              <span className="font-semibold text-primary"> Phnom Penh, Cambodia</span>. My journey in tech is fueled by an 
              insatiable curiosity for the latest technologies and a drive to build meaningful digital experiences.
            </p>
            <p className="text-foreground">
              Beyond coding, I'm all about balance—whether it's exploring the outdoors with friends, diving into fantasy worlds 
              through movies and shows, or staying ahead of the curve in both frontend and backend development. Every day is an 
              opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="flex-1 h-2 bg-gradient-to-r from-primary via-accent-foreground to-primary rounded-full animate-pulse" />
              <Sparkles className="w-6 h-6 text-primary animate-spin-slow" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
