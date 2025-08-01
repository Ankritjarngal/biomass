import Navbar from "../Components/Navbar";
import AboutUsHero from "../Components/AboutUsComponents/AboutUsHero";
import GoalFounderSection from "../Components/AboutUsComponents/GoalsAndFounders";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutUsMain from "../Components/AboutUsMain";
export default function AboutUs() {
    return(
        <div>
            <Navbar></Navbar>
            <AboutUsHero></AboutUsHero>
            <AboutUsMain></AboutUsMain>
            <GoalFounderSection></GoalFounderSection>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    )
}