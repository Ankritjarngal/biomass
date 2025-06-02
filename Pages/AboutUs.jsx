import Navbar from "../Components/Navbar";
import AboutUsHero from "../Components/AboutUsComponents/AboutUsHero";
import GoalFounderSection from "../Components/AboutUsComponents/GoalsAndFounders";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
export default function AboutUs() {
    return(
        <div>
            <Navbar></Navbar>
            <AboutUsHero></AboutUsHero>
            <GoalFounderSection></GoalFounderSection>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    )
}