import Navigation from "@/components/navigation"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-16">Key Projects</h1>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
