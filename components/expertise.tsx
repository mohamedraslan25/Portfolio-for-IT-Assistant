export default function Expertise() {
  const skills = [
    {
      title: "Network Infrastructure",
      description: "Network design, switches, routers, firewalls, and WiFi solutions",
    },
    {
      title: "Server Administration",
      description: "Windows Server 2003-2008, Hyper-V, Active Directory, and backup systems",
    },
    {
      title: "Hardware Support",
      description: "Multi-brand PC repair (HP, Lenovo, Dell, IBM, Acer, Asus) and component replacement",
    },
    {
      title: "Hospitality Systems",
      description: "Micros PMS, Fidelio, point of sales, and hotel management applications",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors shadow-sm"
          >
            <h3 className="font-semibold text-lg text-primary mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
