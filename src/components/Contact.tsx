import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Borey Peng Huoth The Star Premier, Phnom Penh, Cambodia",
    },
    {
      icon: Mail,
      label: "Email",
      value: "siveing.huyy@gmail.com",
      link: "mailto:siveing.huyy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+855 17 597 419",
      link: "tel:+85517597419"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <Card className="max-w-3xl mx-auto p-8 bg-card shadow-xl">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">Connect with me on social media</p>
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/siveing', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://linkedin.com/in/siveing', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
