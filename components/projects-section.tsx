import { Card } from "@/components/ui/card"
import { Server, Network, Shield, Database, Wrench, Building2 } from "lucide-react"

const projects = [
  {
    title: "Enterprise Network Infrastructure Management",
    company: "Nahdet Misr",
    period: "2023 - Present",
    icon: Network,
    description: "Comprehensive IT infrastructure support and server room management for manufacturing company",
    achievements: [
      "Managed all IT support tasks for company-wide user devices",
      "Monitored and maintained server room equipment including servers, switches, routers, and firewalls",
      "Configured and repaired critical networking infrastructure",
      "Ensured 24/7 network availability and security",
    ],
    technologies: ["Windows Server", "Network Switches", "Routers", "Firewalls", "Active Directory"],
  },
  {
    title: "Multi-Vendor Hardware Support Center",
    company: "Redington Distribution",
    period: "2017 - 2023",
    icon: Wrench,
    description: "Authorized service center operations for HP, Lenovo, IBM, Dell, Acer, and Asus products",
    achievements: [
      "Repaired and maintained warranty and out-of-warranty PC systems",
      "Replaced complex laptop components (motherboards, LCDs, SSDs)",
      "Implemented vendor-specific QC checks and diagnostic procedures",
      "Achieved high customer satisfaction through quality repairs",
    ],
    technologies: ["Hardware Diagnostics", "Component Replacement", "QC Tools", "Vendor Standards"],
  },
  {
    title: "Hospitality IT Systems Management",
    company: "Paradise Inn Hotels",
    period: "2012 - 2017",
    icon: Building2,
    description: "Complete IT infrastructure support for hotel chain including PMS and back-office systems",
    achievements: [
      "Supported Micros Fidelio, Suite 8, Micros 3700, and Micros 9700 systems",
      "Managed front office, point of sales, and back-office applications",
      "Coordinated with ACT IT Solution Provider for system support",
      "Maintained HR, payroll, and telephone billing systems",
    ],
    technologies: ["Micros PMS", "Fidelio", "SUN System", "ACT Payroll", "Alcatel Call Accounting"],
  },
  {
    title: "Corporate Network Installation & Support",
    company: "PC-LINK",
    period: "2007 - 2011",
    icon: Server,
    description: "Contract-based IT support for major industrial and educational organizations",
    achievements: [
      "Installed networks and servers for Alexandria Carbon Black (Adityabirla Group)",
      "Supported Alexandria Fertilizers Co. and Methanex Company IT infrastructure",
      "Provided technical support for Amideast Egypt and Alex-Fiber Company",
      "Supervised daily computer system performance across multiple sites",
    ],
    technologies: ["Network Installation", "Server Setup", "Email Systems", "Hardware Troubleshooting"],
  },
  {
    title: "Pharmaceutical Branch IT Operations",
    company: "Pharma Overseas",
    period: "2004 - 2007",
    icon: Database,
    description: "Multi-branch IT supervision and infrastructure management for pharmaceutical distribution",
    achievements: [
      "Supervised IT operations across company branches",
      "Installed and maintained company-wide networks and servers",
      "Managed daily computer system performance and optimization",
      "Provided comprehensive email/Outlook and network troubleshooting",
    ],
    technologies: ["Branch Networks", "Server Management", "Email Systems", "System Monitoring"],
  },
  {
    title: "Advanced Network & Virtualization Solutions",
    company: "Multiple Organizations",
    period: "2004 - Present",
    icon: Shield,
    description: "Specialized implementations across various industries",
    achievements: [
      "Designed and built network infrastructure with active/passive components",
      "Implemented Hyper-V virtual machine environments",
      "Created backup scripts (X Copy) for server protection",
      "Configured Windows Server 2003-2008 Active Directory infrastructure",
      "Installed and managed fingerprint attendance systems",
    ],
    technologies: ["Hyper-V", "Active Directory", "WiFi Solutions", "Backup Systems", "Fax Server"],
  },
]

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => {
        const Icon = project.icon
        return (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>
                <p className="text-secondary font-medium mb-3">{project.company}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
