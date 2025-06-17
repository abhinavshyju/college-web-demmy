import React from "react";

const ContactSection: React.FC = () => {
  return (
    <main className="" id="contact">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 px-8 py-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
          <p className="text-sm">
            Have a question or need assistance? Reach out to us.
          </p>
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex flex-col items-center lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm">Send us an email</p>
              <p className="text-sm">casthamarassery@gmail.com</p>
            </div>
            <div className="flex flex-col items-center lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-sm mb-1">Give use a call</p>
              <p className="text-sm">0495-2963244</p>
              <p className="text-sm">+91 8547005025</p>
            </div>
            <div className="flex flex-col items-center lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="font-semibold mb-2">Location</p>
              <p className="text-sm">Thamarassery, Kozhikode, Kerala.</p>
              <p className="text-sm">Get Direction {">"}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7111996880003!2d75.92397917427085!3d11.428495288762651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668bff97df223%3A0x11e793e1742a507d!2sIHRD%20College%20of%20Applied%20Science!5e0!3m2!1sen!2sin!4v1716212950076!5m2!1sen!2sin"
            width="600"
            className="border-0 h-[300px] lg:h-[450px]"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
