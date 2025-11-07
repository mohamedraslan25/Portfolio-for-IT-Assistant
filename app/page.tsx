import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Expertise from "@/components/expertise"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      <main>
        <Hero />
        <Expertise />
      </main>
      <Footer />
    </div>
  )
}
