import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Experience = () => {
  const headerAnimation = useScrollAnimation(0.1);
  const workAnimation = useScrollAnimation(0.1);
  const eduAnimation = useScrollAnimation(0.1);

  const experiences = [
    {
      title: "Lead of Backend Developer",
      company: "BiKTECH Solutions",
      period: "Jun 2025 - Present",
      description: "Leading backend development using NestJS Framework with remote coding to Foreign. DevOps implementation and team management.",
      type: "work"
    },
    {
      title: "Senior Web Developer",
      company: "Pathmazing Inc.",
      period: "Aug 2023 - Jun 2025",
      description: "Using NextJs Framework with remote coding directly to Foreign.",
      type: "work"
    },
    {
      title: "Freelancer",
      company: "Freelance",
      period: "Feb 2021 - Aug 2023",
      description: "Developed Member Management system for one organization. Recommended and consulted with clients on the most appropriate development",
      type: "work"
    },
    {
      title: "Dev Support & Full Stack Developer",
      company: "Moha Kruosar IT Association",
      period: "Mar 2022 - May 2023",
      description: "Developed platform for job matching and sharing. Recommended and consulted with clients on the most appropriate development.",
      type: "work"
    },
    {
      title: "Team Leader & Outsource Developer",
      company: "E-khmer Technology Co.,Ltd.",
      period: "Jul 2021 - Aug 2023",
      description: "Using Symfony Framework with remote coding to Japan. Led team development and implementation. Supervised assessment of development.",
      type: "work"
    },
    {
      title: "Dev Advisor and Full Stack Developer",
      company: "National University of Management",
      period: "Mar 2021 - May 2023",
      description: "Using Laravel Framework with React JS. Developed blockchain-related systems using Web3 and Smart contracts.",
      type: "work"
    },

    {
      title: "Intership Full Stack Developer",
      company: "E-khmer Technology Co.,Ltd.",
      period: "Jan 2020 - Jul 2021",
      description: "Using Meteor JS Framework. Developed blockchain-related systems using Web3 and Smart contracts.",
      type: "work"
    },
  ];

  const education = [
    {
      degree: "Master of Business Administration",
      school: "N/A",
      period: "In Consideration",
      location: "Phnom Penh, Cambodia"
    },
    {
      degree: "Bachelor of Software Development",
      school: "Norton University",
      period: "2019 - 2023",
      location: "Phnom Penh, Cambodia"
    },
    {
      degree: "General Knowledge",
      school: "Bak Tuk High School",
      period: "2016 - 2019",
      location: "Phnom Penh, Cambodia"
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">My Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through continuous learning and hands-on experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <div
            ref={workAnimation.ref}
            className={`transition-all duration-1000 ${workAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-foreground flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-foreground to-transparent" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative pl-16 transition-all duration-700 ${workAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg animate-pulse" />

                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/20 group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground mt-2 md:mt-0 transition-all">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            ref={eduAnimation.ref}
            className={`transition-all duration-1000 ${eduAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-foreground to-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-xl transition-all duration-700 bg-card/50 backdrop-blur-sm border-primary/20 group hover:-translate-y-1 ${eduAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground mt-2 md:mt-0 transition-all">
                      {edu.period}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
