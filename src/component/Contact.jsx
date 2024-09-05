import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="max-w-[1024px] mx-auto mt-[140px] px-4 lg:px-0" >
      <h1 className="text-[30px] text-center font-bold mb-8">CONTACT</h1>
      <form className="bg-gray-800 p-8 rounded-md shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea id="message" rows="4" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
