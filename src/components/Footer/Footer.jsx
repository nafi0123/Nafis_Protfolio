import React from 'react';
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-24 text-center text-white py-10 ">
      <h3 className="text-xl font-semibold">Nafi Mahmud Bukhari</h3>
      <p className="text-gray-400 mt-1">
        Designed with love, all rights reserved for Nafi Mahmud Bukhari.
      </p>

      {/* ICONS */}
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="https://www.facebook.com/share/1FExeKGjZC/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 hover:shadow-[0_0_15px_#1877F2] transition-all duration-300"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://github.com/nafi0123"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-slate-800 hover:bg-gray-900 hover:shadow-[0_0_15px_#ffffff] transition-all duration-300"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/nafi-mahmud-bukhari?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-slate-800 hover:bg-blue-700 hover:shadow-[0_0_15px_#0A66C2] transition-all duration-300"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
