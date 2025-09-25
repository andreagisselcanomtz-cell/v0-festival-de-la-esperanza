import { Heart, Instagram } from "lucide-react"
import beneficiaryData from "@/data/beneficiary-section.json"

export function BeneficiarySection() {
  const { title, backgroundColor, textColor, organization, sections, socialMedia } = beneficiaryData
  return (
    <section className="py-12 px-4 text-white" style={{ backgroundColor }}>
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Heart className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <Heart className="w-8 h-8" />
        </div>
        <div className="mb-6">
          <img src={organization.logo} alt={organization.logoAlt} className="h-16 mx-auto mb-4" />
          <div className="text-3xl font-bold">{organization.name}</div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className={`text-sm leading-relaxed ${pIndex > 0 ? 'mt-3' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <a
            href={socialMedia.instagram.url}
            className="flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            {socialMedia.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  )
}
