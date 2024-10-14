import React from "react";
import Layout from "../../layout/Layout";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout>
      <section className="w-full min-h-screen flex items-start flex-col justify-center bg-[#eaedf2] px-4 md:px-12 lg:px-14 py-16 lg:py-5 lg:w-11/12">
      <div className="w-full flex flex-col justify-between items-start my-5">
        <h3 className="text-4xl font-bold">GET IN TOUCH</h3>
        <div className="w-16 my-3 h-[2px] bg-[#d9823e]"></div>
        <p className="text-sm text-[#555a64]">A WEB APP DEVELOPER.</p>
      </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="w-full lg:w-7/12 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">SAY SOMETHING</h3>
            <form>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your message *"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                rows="4"
              />
              <button className="w-full bg-[#d9823e] text-white p-3 rounded-lg hover:bg-[#b96d31] transition-all">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaLocationDot className="text-4xl text-[#d9823e]" />
              <div>
                <h2 className="text-xl font-semibold">Our Address</h2>
                <p className="text-gray-600">Orangi Town Karachi</p>
              </div>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaPhone className="text-4xl text-[#d9823e]" />
              <div>
                <h2 className="text-xl font-semibold">Our Phone</h2>
                <p className="text-gray-600">+923413291171</p>
              </div>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaMailBulk className="text-4xl text-[#d9823e]" />
              <div>
                <h2 className="text-xl font-semibold">Our Mail</h2>
                <p className="text-gray-600">itssiddique786@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
