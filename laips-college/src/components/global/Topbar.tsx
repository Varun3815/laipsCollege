import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
} from "react-icons/fa";
function Topbar() {
  return (
    <div className="border-b border-gray-300 hidden sm:block  text-white "  style={{ backgroundColor: "#28186b" }}>
      <div className="container py-4">
        <div className="flex items-center justify-center text-sm">
            <div className="mr-4 ">
              <FaPhone className="inline-block"/> <span >+91 7247282851</span>
            </div>
            <div className="mr-4">
              <FaWhatsapp className="inline-block"/> <span >Whatsapp</span>
            </div>
            <div className="mr-4">
              <FaEnvelope className="inline-block"/> <span ><Link href="mailto:admin@laipscollege.in">admin@laipscollege.in</Link></span>
            </div>
            <div className="mr-4">
              <FaEnvelopeOpenText className="inline-block"/> <span ><Link href="/contact">Contact Us</Link></span>
            </div>
            
         
        </div>
      </div>
    </div>
  );
}

export default Topbar;
