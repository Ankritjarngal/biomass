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
          src="dc778b9855fdb45ed40d963e8c5a752f6e7a5108.jpg"
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