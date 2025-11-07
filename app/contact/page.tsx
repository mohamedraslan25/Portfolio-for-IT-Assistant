import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Get In Touch</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Feel free to reach out for collaboration opportunities or professional inquiries
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:mohamed.marghany@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mohamed.marghany@example.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+201234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +20 123 456 7890
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Cairo, Egypt</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
