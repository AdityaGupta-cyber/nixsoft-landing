import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          Ready to Transform Your Business?
        </h2>

        <a
          href="/contact-us"
          className="inline-block bg-white text-blue-600 font-medium px-8 py-4 rounded-md text-lg hover:bg-blue-50 transition-colors"
        >
          Let&apos;s Work Together
        </a>
      </div>
    </section>
  );
};

export default CTASection;
