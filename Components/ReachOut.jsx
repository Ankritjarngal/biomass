import { Phone, Mail } from "lucide-react";

const ReachOut = () => {
  return (
    <div className="px-4 py-10 md:py-16 bg-white flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#257E2C]  mb-8 text-center">
        REACH OUT DIRECTLY AT
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl items-start justify-center">
        {/* Map Embed */}
        <div className="w-full md:w-2/3 h-[200px] md:h-[300px] rounded-xl overflow-hidden">
          <iframe
            title="Sreenee Green Location"
            src="https://www.google.com/maps?q=17.586444,78.451694&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-none"
          />
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="border border-[#257E2C]  p-4 rounded-md flex items-start gap-3 shadow-sm">
            <Phone className="text-green-700 mt-1" />
            <div>
              <p className="text-sm text-gray-600">Phone Number</p>
              <a
                href="tel:+919381124568"
                className="text-green-700 font-semibold hover:underline"
              >
                +91-93811-24568
              </a>
            </div>
          </div>

          <div className="border border-[#257E2C]  p-4 rounded-md flex items-start gap-3 shadow-sm">
            <Mail className="text-green-700 mt-1" />
            <div>
              <p className="text-sm text-gray-600">Email Address</p>
              <a
                href="mailto:ssrao@sreeneegreen.in"
                className="text-[#257E2C]  font-semibold hover:underline break-words"
              >
                ssrao@sreeneegreen.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
