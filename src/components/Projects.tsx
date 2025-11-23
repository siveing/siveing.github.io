import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Package, Calculator, Gavel, ShoppingCart, Gamepad2, View, Globe } from "lucide-react";

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "KhmerDate NPM Package",
      description: "Open-source npm package for seamless Western to Khmer date conversion, used by developers worldwide.",
      link: "https://www.npmjs.com/package/khmerdate-conversion",
      tags: ["NPM", "JavaScript", "Open Source"],
      icon: Package,
      gradient: "from-primary to-accent-foreground"
    },
    {
      title: "JIN 360 Viewer",
      description: "React component for interactive 360-degree product views, enhancing user engagement with smooth rotation and zoom features.",
      link: "https://www.npmjs.com/package/jin-360-viewer",
      tags: ["React", "Node.js", "Open Source"],
      icon: View,
      gradient: "from-accent-foreground to-primary"
    },
    {
      title: "DAPP Token Transfer",
      description: "Decentralized application with Smart Contract integration enabling secure peer-to-peer token transfers on testnet.",
      link: "https://siveing.netlify.app/",
      tags: ["Web3", "Blockchain", "dApp"],
      icon: Rocket,
      gradient: "from-accent-foreground to-primary"
    },
    {
      title: "NFT-Based Identity (NID)",
      description: "NFT-based identity platform allowing users to create, manage, and verify digital identities securely. Utilizing blockchain and web3 technologies for enhanced security and transparency.",
      link: "https://www.nids.app/",
      tags: ["Smart Contract", "Crypto", "Web3"],
      icon: Globe,
      gradient: "from-primary to-accent-foreground"
    },
    {
      title: "Trash Cleaning Incentive (TCI)",
      description: "Trash Cleaning Incentive, Communicate with the team, consult, solve problems, and assign to the team to develop various blockchain-related systems by using Web3 and Smart contracts",
      link: "https://www.camtci.app/",
      tags: ["Smart Contract", "Crypto", "Web3"],
      icon: Globe,
      gradient: "from-accent-foreground via-primary to-accent-foreground"
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications solving real problems with modern tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border-primary/20 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Icon header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <project.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-primary animate-pulse ${hoveredIndex === index ? 'scale-150' : ''} transition-transform duration-300`} />
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-lg transition-all duration-300"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <span className="flex items-center gap-2">
                    View Live Demo
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 border-2 border-primary rounded-lg transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-delayed-most">
          <p className="text-muted-foreground mb-4">Want to see more? Check out my GitHub profile</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://github.com/siveing', '_blank')}
          >
            View GitHub Profile
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
