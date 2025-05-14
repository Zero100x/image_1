'use client';

import Image from 'next/image';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Page() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <section className="w-[350px] bg-white rounded-3xl shadow-xl p-4">
        <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 mx-auto">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={320}
            height={180}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <section className="px-2">
          <header className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-black">Main Heading</h2>
            <span className="text-sm bg-blue-100 text-black px-3 py-1 rounded-full">
              3 months
            </span>
          </header>

          <p className="text-gray-500 text-sm mb-2">Sub Heading</p>

          <p className="text-sm text-gray-500 mb-4">
            Lorem Ipsum is simply dummy text of they printing and typesetting industry. Loremel Ipsum has been the industry’s standards
          </p>

          <div className="flex space-x-4 text-xl text-gray-600 mb-4">
            <FaYoutube className="text-red-600" />
            <FaFacebook className="text-blue-600" />
            <FaInstagram className="text-pink-500" />
            <FaTiktok className="text-black" />
          </div>

          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <span className="text-lg font-bold text-black">USD 3</span>
            <button className="bg-blue-600 text-white font-bold px-9 py-2 rounded-lg hover:bg-blue-700">
              Activate
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
