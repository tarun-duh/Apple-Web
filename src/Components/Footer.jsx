import React from "react";
import { footerLinks } from "../Contants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-sm">
            More ways to shop:{" "}
            <span className="text-blue underline"> Find an Apple store </span>{" "}
            or <span className="text-blue underline"> other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-sm">
            or call 00080-0012-4411
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-sm">
            Copyrights @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="font-semibold text-gray text-sm" key={link}>
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
