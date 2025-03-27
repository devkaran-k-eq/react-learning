import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <div className="mt-5 container mx-auto  border-t py-5">
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-3 mx-0 lg:mx-20">
        <div className="mb-6 px-3">
          <div>
            <Link href="/">
              <img
                src="\src\assets\logo.png"
                alt=""
                className="object-contain"
              />
            </Link>
          </div>

          <a
            href="https://www.facebook.com/"
            className="flex items-center mb-3 no-underline mt-2"
            target="_blank"
          >
            <i className="fab fa-facebook text-[#3b5998] text-2xl"></i>
            <p className="text-base ml-2 font-bold">Facebook</p>
          </a>
          <a
            href="https://www.youtube.com/"
            className="flex items-center mb-3 no-underline"
            target="_blank"
          >
            <i className="fab fa-youtube text-[#ed302f] text-2xl"></i>
            <p className="text-base ml-2 font-bold">Youtube</p>
          </a>
          <a
            href="https://in.linkedin.com/"
            className="flex items-center mb-3 no-underline"
            target="_blank"
          >
            <i className="fab fa-linkedin text-[#0082ca] text-2xl"></i>
            <p className="text-base ml-2 font-bold">LinkedIn</p>
          </a>
          <a
            href="https://x.com/?lang=en"
            className="flex items-center mb-3 no-underline"
            target="_blank"
          >
            <i className="fab fa-x-twitter text-2xl"></i>
            <p className="text-base ml-2 font-bold">X</p>
          </a>
          <a
            href="https://www.instagram.com/"
            className="flex items-center mb-3 no-underline"
            target="_blank"
          >
            <i className="fab fa-square-instagram text-[#ac2bac] text-2xl"></i>
            <p className="text-base ml-2 font-bold">Instagram</p>
          </a>
        </div>

        <div className="mb-6 px-3">
          <div className="mb-5 text-4xl font-bold">Getting started</div>
          <ul className="flex flex-col">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Release Notes
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Upgrade Guide
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Browser Support
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Dark Mode
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 px-3">
          <div className="mb-5 text-4xl font-bold">Explore</div>
          <ul className="flex flex-col">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Prototyping
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Design systems
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Security
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 px-3">
          <div className="mb-5 text-4xl font-bold">Community</div>
          <ul className="flex flex-col">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Discussion Forums
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Code of Conduct
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                Contributing
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-800"
              >
                API Reference
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="flex flex-wrap justify-between items-center my-6 border-t mt-5 container mx-auto py-5">
        <h3>Nexton eCommerce. © 2024</h3>

        <ul className="flex justify-center md:justify-end gap-2 mb-0 list-none">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="\src\assets\footer-image\paypal.png"
                alt="PayPal"
                className="w-[85px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="\src\assets\footer-image\visa.png"
                alt="Visa"
                className="w-[85px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="\src\assets\footer-image\stripe.png"
                alt="Stripe"
                className="w-[85px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="\src\assets\footer-image\verisign.png"
                alt="Verisign"
                className="w-[85px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
