import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Code, Database, Globe, Layers, 
  FileCode2, Brackets, Braces, 
  ServerCog, Boxes, Package,
  Leaf, CircuitBoard, Smartphone,
  Network, LayoutTemplate, Settings
} from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: Globe,
      color: "from-primary to-accent-foreground",
      skills: [
        { name: "React JS", level: 85, icon: Code, iconColor: "text-cyan-500" },
        { name: "Next.js", level: 60, icon: FileCode2, iconColor: "text-cyan-500" },
        { name: "Angular", level: 60, icon: Brackets, iconColor: "text-cyan-500" },
        { name: "Vue", level: 60, icon: Braces, iconColor: "text-cyan-500" },
      ]
    },
    {
      id: "backend",
      name: "Backend",
      icon: Database,
      color: "from-accent-foreground to-primary",
      skills: [
        { name: "Node.js", level: 75, icon: ServerCog, iconColor: "text-green-600" },
        { name: "NestJS", level: 80, icon: Code, iconColor: "text-indigo-600" },
        { name: "Symfony", level: 80, icon: Boxes, iconColor: "text-foreground" },
        { name: "Laravel", level: 80, icon: Package, iconColor: "text-red-500" },
        { name: "Spring Boot", level: 80, icon: Network, iconColor: "text-primary" },
        { name: "MeteorJS", level: 50, icon: CircuitBoard, iconColor: "text-cyan-500" },
      ]
    },
    {
      id: "database",
      name: "Database",
      icon: Layers,
      color: "from-primary via-accent-foreground to-primary",
      skills: [
        { name: "MongoDB", level: 85, icon: Leaf, iconColor: "text-green-500" },
        { name: "MySQL", level: 80, icon: Database, iconColor: "text-blue-600" },
        { name: "PostgreSQL", level: 80, icon: Database, iconColor: "text-blue-800" },
        { name: "Redis", level: 70, icon: Database, iconColor: "text-red-600" },
        { name: "Elasticsearch", level: 70, icon: Database, iconColor: "text-pink-500" },
      ]
    },
    {
      id: "other",
      name: "Other",
      icon: Code,
      color: "from-accent-foreground to-primary",
      skills: [
        { name: "React Native", level: 80, icon: Smartphone, iconColor: "text-cyan-500" },
        { name: "Web3", level: 45, icon: CircuitBoard, iconColor: "text-purple-500" },
        { name: "DevOps", level: 60, icon: LayoutTemplate, iconColor: "text-orange-500" },
        { name: "Microservices", level: 70, icon: Settings, iconColor: "text-yellow-500" },
        { name: "Docker", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "CI/CD", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Kubernetes", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Jest", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Cypress", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Playwright", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Github Actions", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
        { name: "Gitlab CI", level: 70, icon: ServerCog, iconColor: "text-blue-500" },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.id, color: cat.color }))
  ).sort((a, b) => b.level - a.level);

  const displaySkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const headerAnimation = useScrollAnimation(0.1);
  const filterAnimation = useScrollAnimation(0.2);
  const gridAnimation = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,68,138,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(218,68,138,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Code className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building modern web applications
          </p>
        </div>

        {/* Category filters */}
        <div 
          ref={filterAnimation.ref}
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            filterAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Badge
            className={`px-6 py-3 text-base cursor-pointer transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-lg scale-110"
                : "bg-card hover:bg-accent text-foreground"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Skills
          </Badge>
          {skillCategories.map((category) => (
            <Badge
              key={category.id}
              className={`px-6 py-3 text-base cursor-pointer transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-110"
                  : "bg-card hover:bg-accent text-foreground"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Skills grid with icons */}
        <div 
          ref={gridAnimation.ref}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displaySkills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <Card
                  key={`${skill.name}-${index}`}
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20 ${
                    gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: gridAnimation.isVisible ? `${index * 0.05}s` : '0s'
                  }}
                >
                  <div className="p-6 relative z-10">
                    <div className={`mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${skill.iconColor}`}>
                      <SkillIcon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    {/* <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ 
                          width: gridAnimation.isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.05 + 0.3}s`
                        }}
                      />
                    </div> */}
                  </div>
                
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center animate-fade-in-delayed-most">
          <p className="text-muted-foreground mb-4">Always learning, always growing</p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
