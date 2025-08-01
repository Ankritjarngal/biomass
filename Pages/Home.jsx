import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero";
import AboutUsMain from "../Components/AboutUsMain"
import HeroSection2 from "../Components/Hero2";
import OurProducts from "../Components/OurProductMain";
import OurServices from "../Components/OurServicesMain";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import BiomassAdvantages from "../Components/Advantage";
import FuelClientsSection from "../Components/FuelClient";
import NewsSocialSection from "../Components/SocialSection";
import StatsSection from "../Components/StatsMain";
export default function Home() {
    return (
        <div>
        <Navbar />
        <HeroSection />
        <StatsSection></StatsSection>
        <HeroSection2></HeroSection2>
        <OurProducts></OurProducts>
        <OurServices></OurServices>
        <FuelClientsSection></FuelClientsSection>
        <NewsSocialSection></NewsSocialSection>

        <BiomassAdvantages></BiomassAdvantages>
        <ContactForm></ContactForm>
        <Footer />

        
        
        
        

        </div>
    );
}