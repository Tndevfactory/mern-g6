import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white  pt-6 ">
      <div id="social-media" className="flex gap-2 justify-center ">
        <Facebook /> <Instagram /> <Linkedin />
      </div>
      <div
        id="information"
        className="p-2 grid grid-cols-4 gap-4
       place-items-center  "
      >
        <div>
          <h2>E-store</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            blanditiis natus ducimus.
          </p>
        </div>
        <div>
          <ul>
            <li>Service</li>
            <li>Service1</li>
            <li>Service2</li>
            <li>Service3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Service</li>
            <li>Service1</li>
            <li>Service2</li>
            <li>Service3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Service</li>
            <li>Service1</li>
            <li>Service2</li>
            <li>Service3</li>
          </ul>
        </div>
      </div>
      <div id="copyright" className="flex justify-center text-xs pb-2">
        &copy; 2024 powered by{" "}
        <span className="text-orange-500 mx-1 ">TNDEV-ART</span>
      </div>
    </div>
  );
};

export default Footer;
