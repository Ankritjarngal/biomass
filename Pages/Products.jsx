import BiomassProducts from "../Components/OurProducts/Products";
import Navbar from "../Components/Navbar";
import BiomassAdvantages from "../Components/Advantage";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
export function Products() {
    return (
        <div>
            <Navbar></Navbar>
            <BiomassProducts />
            <BiomassAdvantages></BiomassAdvantages>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
}