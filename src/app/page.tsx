"use client";
import Header from "@/components/Header"
import CurrentIssues from "@/components/CurrentIssues"
import OneSolution from "@/components/OneSolution"
import MoneyBackGuarantee from "@/components/MoneyBackGuarantee"
import TextPressure from '@/components/TextPressure/TextPressure'
// import ImageSlider from "@/app/components/ImageSlider"
import ContactForm from "@/components/ContactForm"
import OurProcess from "@/components/OurProcess"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import TextRevealComponent from "@/components/RevealText";
import ZuperStudioOffers from "@/components/StudioOffers";
import ImageSlider from "@/components/ImageSlider";
import FilmGallery from "@/components/FilmGallery";
import TeamSlider from "@/components/TeamSlider";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-[99vw]">
      <section className="min-h-screen flex items-center justify-center">
        <Header />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <WhoWeAre />
      </section>
      <section className="min-h-screen w-[99vw] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <CurrentIssues />
      </section>
      <section className="min-h-screen w-[99vw] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <OneSolution />
      </section>
        {/* <section className="min-h-screen w-[99vw] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
            <CarouselDemo />
        </section> */}
      <section className=" w-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <ZuperStudioOffers />
      </section>
      <section className="flex items-center justify-center w-[99vw] bg-gradient-to-b from-black to-gray-900">
        <ImageSlider />
      </section>
      <section className="min-h-screen w-[99vw] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-900">
        <OurProcess />
      </section>
      <section className="w-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <section className="w-8/12 -mb-48">
      <div className="h-16" id="offer"></div>
      <div style={{position: 'relative', height: '350px'}}>
        <TextPressure
          text="Offer!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      </section>
      </section>
      <section className="min-h-[70vh] w-[99vw] -mb-14 flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <MoneyBackGuarantee />
      </section>
      <section className="py-32 w-[99vw] flex items-center justify-center bg-gradient-to-b from-black to-gray-900"> 
        <FilmGallery />
      </section>
      <section className="min-h-screen hidden w-[99vw] md:flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <TextRevealComponent />
      </section>
      <section className="w-[99vw] flex items-center justify-center bg-gradient-to-b from-black to-gray-900"> 
        <TeamSlider />
      </section>
      <section className="min-h-screen flex items-center justify-center w-[99vw] bg-gradient-to-b from-black to-gray-900">
        <Testimonials />
      </section>
      <section className="min-h-screen flex items-center justify-center w-[99vw] bg-gradient-to-b from-black to-gray-900">
        <FAQ />
      </section>
      <section className="min-h-screen flex items-center justify-center w-[99vw] bg-gradient-to-b from-gray-900 to-black">
        <ContactForm />
      </section> 
  {/* <section className="hidden min-h-screen items-center justify-center w-[99vw] bg-gradient-to-b from-gray-900 to-black">
        <Pricing />
      </section>
      
      */}
    </main>
  )
}

