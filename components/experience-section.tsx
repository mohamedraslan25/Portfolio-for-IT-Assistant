import Image from "next/image"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Nahdet Misr",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nahda_masr-usqpHKUCJB7yZGwR0NB1KF9DbT0NbE.png",
      position: "Network Administrator",
      period: "November 2023 – Present",
      description:
        "Responsible for all main IT support tasks related to company users' devices and comprehensive server room management.",
      achievements: [
        "Manage IT support for all user devices including PCs and printers",
        "Monitor, repair, and configure server room equipment (servers, switches, routers, firewalls)",
        "Ensure network infrastructure reliability and security",
      ],
    },
    {
      company: "Redington Distribution",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Redington_Distribution-057ihhACmtvuh5B4GVYpIvMlw0Tv3O.png",
      position: "Support Engineer",
      period: "2017 – October 2023",
      description:
        "Highly skilled technician at authorized service center for multiple PC brands including HP, Lenovo, IBM, Dell, Acer, and Asus.",
      achievements: [
        "Repaired personal computers (laptops & PCs) for warranty and out-of-warranty support",
        "Replaced laptop internal components (motherboards, LCDs, LCD cables, SSDs, hard disks)",
        "Implemented full QC checks according to each vendor's tool and standards",
        "Performed comprehensive diagnosis following standard process maps",
      ],
    },
    {
      company: "Paradise Inn Hotels",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paradise_Inn_Hotels-x2BP1yFPWcdZpqb4ZtUMFUWaJjkXNx.png",
      position: "IT Assistant Area Director",
      period: "2012 – 2017",
      description:
        "Supported hospitality management systems including Micros Fidelio, Suite 8, Micros 3700, Micros 9700, HR and SUN systems.",
      achievements: [
        "Diagnosed and troubleshot hardware, software, and system problems",
        "Coordinated with ACT IT Solution Provider for system support",
        "Replaced defective components and maintained hotel IT infrastructure",
        "Managed PMS, point of sales, and back-office systems",
      ],
    },
    {
      company: "PC-LINK",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pclink-NfruXC0S4uTnT77WhqO0CC0d6MZKkB.png",
      position: "IT Supervisor",
      period: "2007 – 2011",
      description:
        "Supervised contract support and network installations for major companies including Alexandria Carbon Black, Alexandria Fertilizers, Methanex, Amideast Egypt, and Alex-Fiber.",
      achievements: [
        "Supervised contracts support and daily computer system performance",
        "Installed company networks and servers",
        "Resolved user inquiries regarding hardware and software operations",
        "Provided email/Outlook troubleshooting and general network support",
      ],
    },
    {
      company: "Pharma Overseas",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pharmoverseas-w0WtLIGbH5tvafWwS06YEznDRzw2aB.png",
      position: "IT Supervisor",
      period: "2004 – 2007",
      description:
        "Supervised company branches and managed IT infrastructure including network installation, server management, and daily system operations.",
      achievements: [
        "Supervised IT operations across company branches",
        "Installed and maintained company networks and servers",
        "Managed daily performance of computer systems",
        "Provided comprehensive technical support and troubleshooting",
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border shadow-sm p-8 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 relative bg-white rounded-lg p-2 border border-border flex items-center justify-center">
                <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} fill className="object-contain p-2" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary mb-1">{exp.position}</h3>
                <p className="text-lg font-semibold text-foreground mb-1">{exp.company}</p>
                <p className="text-sm text-accent font-medium">{exp.period}</p>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Skills Section */}
      <div className="bg-primary/5 rounded-lg border border-border shadow-sm p-8 mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Technical Skills & Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-primary mb-3">Network & Infrastructure</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Active Directory Services (2003-2008)</li>
              <li>• Network Design & WiFi Coverage</li>
              <li>• Router DHCP & Switch Technologies</li>
              <li>• Cabling Infrastructure & Wireless</li>
              <li>• Telecommunications Systems</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Server & Virtualization</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Windows Server 2003-2008</li>
              <li>• Hyper-V Virtual Machines</li>
              <li>• Backup Scripts (X Copy)</li>
              <li>• Fax Server 2003/2008</li>
              <li>• Server Installation & Configuration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Hospitality Applications</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Micros PMS (9700, 3700)</li>
              <li>• Fidelio Front Office (V.8, 7.13)</li>
              <li>• Food Cost Management (M.C)</li>
              <li>• General Store Application</li>
              <li>• Back Office (SUN System)</li>
              <li>• Alcatel Call Accounting</li>
              <li>• ACT Payroll & HR System</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Hardware Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Multi-brand PC Repair (HP, Lenovo, Dell, IBM, Acer, Asus)</li>
              <li>• Motherboard Replacement</li>
              <li>• LCD & LCD Cable Replacement</li>
              <li>• SSD & Hard Disk Installation</li>
              <li>• Vendor QC Implementation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">System Administration</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Email/Outlook Administration</li>
              <li>• User Account Management</li>
              <li>• Security & Access Privileges</li>
              <li>• Fingerprint Systems</li>
              <li>• Technical Problem Resolution</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Additional Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• WiFi Troubleshooting</li>
              <li>• Network Monitoring</li>
              <li>• Data Communication Tracking</li>
              <li>• Equipment Installation</li>
              <li>• Technical Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
