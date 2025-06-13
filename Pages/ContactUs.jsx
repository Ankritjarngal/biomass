import Navbar from "../Components/Navbar"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"
import ReachOutSection from "../Components/ReachOut"
const ContactUs=()=>{
    return(
        <div className="w-full">
            <Navbar></Navbar>
            <div className="relative">
        <img
          src="/6c21b68c706e1f92a7d1043ba8e0a50a6f94c0b5.jpg"
          alt="Header"
          className="w-full h-[400px] object-cover"
        />
        <h2 className="absolute left-6 bottom-6 text-4xl md:text-[52px] font-bold text-white">
          Contact Us
        </h2>
      </div>
      <ContactForm></ContactForm>
      <ReachOutSection></ReachOutSection>
      <Footer></Footer>
      

        </div>
    )
}
export default ContactUs