import Navigation from "@/components/navigation"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-16">Professional Experience</h1>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}
