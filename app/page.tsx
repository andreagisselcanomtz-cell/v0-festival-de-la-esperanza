"use client"

import { HopeQuote } from "@/components/hope-quote"
import { SectionDivider } from "@/components/section-divider"
import { HeaderSection } from "@/components/sections/header-section"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ActivitiesSection } from "@/components/sections/activities-section"
import { TalksSection } from "@/components/sections/talks-section"
import { WorkshopsSection } from "@/components/sections/workshops-section"
import { TicketsSection } from "@/components/sections/tickets-section"
import { BeneficiarySection } from "@/components/sections/beneficiary-section"
import { LocationSection } from "@/components/sections/location-section"
import { EventMapSection } from "@/components/sections/event-map-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function FestivalEsperanza() {
  const festivalDate = new Date("2025-11-22T08:00:00")

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <HeaderSection />

      <HeroSection festivalDate={festivalDate} />

      <SectionDivider variant="wave" />

      <div className="py-8 px-4 relative">
        <div className="container mx-auto">
          <HopeQuote
            quote="La esperanza es el sueño del hombre despierto"
            author="Aristóteles"
            className="max-w-md mx-auto"
          />
        </div>
      </div>

      <AboutSection />

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

      <div className="py-8 px-4 relative" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto">
          <HopeQuote
            quote="Mantén viva la esperanza, porque ella es el oxígeno del alma"
            className="max-w-lg ml-auto mr-16"
          />
        </div>
      </div>

      <ActivitiesSection />

      {/*<TalksSection />*/}  

      {/*<WorkshopsSection />*/}

      <div className="relative">
        <SectionDivider variant="wave" />
      </div>

      <div className="py-8 px-4 relative">
        <div className="container mx-auto">
          <HopeQuote
            quote="La esperanza es lo último que se pierde, y lo primero que debemos encontrar"
            className="max-w-md mx-auto"
          />
        </div>
      </div>

      <TicketsSection />

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

      <BeneficiarySection />

      <div className="relative">
        <SectionDivider variant="wave" />
      </div>

      <div className="py-8 px-4 relative" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto">
          <HopeQuote
            quote="Donde hay esperanza, hay vida. Donde hay vida, hay posibilidad"
            className="max-w-lg ml-16"
          />
        </div>
      </div>

      <LocationSection />

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

      {/* <EventMapSection /> */}

      <GallerySection />

      <FooterSection />
    </div>
  )
}