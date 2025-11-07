import Image from "next/image"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mohamed Adel Marghany</h1>
          <p className="text-xl text-primary font-semibold mb-6">IT Assistant Area Director</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experienced IT professional with expertise in network administration, server management, and technical
            support. Specialized in enterprise infrastructure, hospitality systems, and multi-vendor hardware support
            with a proven track record across manufacturing, distribution, hospitality, and pharmaceutical sectors.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="/experience"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personal%20Photo-eNILZUcOil7nRJhki8DLCtF2zTKV0o.png"
                alt="Mohamed Adel Marghany"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
