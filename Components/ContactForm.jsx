import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="ml-8 mr-8 flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-10 md:py-16 ">

      {/* Left Section - Image + Contact Info */}
      <div className="relative w-full md:w-[48%] h-[500px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="/badaa488fb990404e0ff130e4f5a605cd176fb74.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
          <div className="text-white space-y-6 w-full max-w-xs">
            <h3 className="text-3xl font-black">CONTACT US</h3>
            <p className="text-lg font-black">FOR ENQUIRIES, CALL OR MAIL US:</p>

            <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
  {/* Phone Number 1 */}
  <div className="flex items-center gap-3">
    <Phone className="text-white" size={25} />
    <div>
      <p className="text-sm text-white">Phone Number</p>
      <a
        href="tel:+919381124568"
        className="text-white font-semibold underline"
      >
        +91-93811-24568
      </a>
      <br />
      <a
        href="tel:+91-94411-09841
"
        className="text-white font-semibold underline"
      >

      +91-94411-09841
      </a>
    </div>
  </div>

  {/* Phone Number 2 */}



</div>


            {/* Email Contact Card */}
            <div className="border border-white rounded-lg p-4 flex items-center gap-3">
              <Mail className="text-white" size={25} />
              <div>
                <p className="text-sm text-white">Email Address</p>
                <a
                  href="mailto:ssrao@sreeneegreen.in"
                  className="text-white font-semibold underline "
                >
                  ssrao@sreeneegreen.in
                </a>
                <br />
                <a
                  href="mailto:info@sreeneegreen.in   "
                  className="text-white font-semibold underline "
                >

info@sreeneegreen.in                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-[48%] h-[500px] border border-green-700 rounded-xl p-8 shadow-lg flex items-center">
        <form className="w-full max-w-md mx-auto space-y-6">
          <h3 className="text-center text-2xl text-green-700 font-bold mb-6">
            GET IN TOUCH
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md text-base  "
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md text-base "
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md text-base "
            required
          />
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md text-base "
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#257E2C]  text-white text-lg py-3 px-6 rounded-md w-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
