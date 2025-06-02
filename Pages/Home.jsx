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


export default function Home() {
    return (
        <div>
        <Navbar />
        <HeroSection />
        <AboutUsMain></AboutUsMain>
        <HeroSection2></HeroSection2>
        <OurProducts></OurProducts>
        <OurServices></OurServices>
        <FuelClientsSection></FuelClientsSection>

        <BiomassAdvantages></BiomassAdvantages>
        <ContactForm></ContactForm>
        <Footer />

        
        
        
        

        </div>
    );
}