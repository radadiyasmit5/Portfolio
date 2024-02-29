import {EmailOutlined, PhoneAndroid} from "@mui/icons-material"
import React from "react"
import "./contact.css"
import "../navigation/header.css"
import SociealBar from "../navigation/socialBar/SociealBar"
const ContactForm = ({contactRef}) => {
  return (
    <div class="contact-main-container" ref={contactRef}>
      <div className="cotact-sub-container">
        <div className="contact-outer">
          <div className="contact-inner-first mb-20 ">
            <div className="getintouchContent">
              <h1 className="font-bold text-5xl text-white">Get In Touch </h1>
              <p className="text-3xl text-white py-10">
                For any information regarding my work kindly, contact me through
                the following phone number or email address.
              </p>
              <div className="phone">
                <PhoneAndroid fontSize="" className="phoneIcon text-white" />
                <span className="text-white text-xl px-5">+1 4387226285</span>
              </div>

              <br />
              <div className="email">
                <EmailOutlined fontSize="" className="phoneIcon text-white" />
                <span className="text-white text-xl px-5">
                  radadiyasmit5@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="social-bar-container-mid">
            <SociealBar />
          </div>
          <div className="form-control">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Message
                </label>
                <textarea
                  name="txtarea"
                  rows="4"
                  cols="50"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p class="text-center text-white text-lg pb-20 footer">
            &copy;2024 Designed and Developed By Smit Radadiya{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
