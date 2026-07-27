import React from "react";

const About = () => {
  return (
    <section>
      <div className="mx-2 md:mx-0">
        {/* Header Section with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-8 tracking-tight">
            About Me
          </h2>
          <div className="inline-block">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-base-content leading-relaxed">
              Results-driven Full-Stack Web Developer with over 2+ years of
              hands-on experience specializing in PHP, Laravel, and React JS.
              Passionate about engineering high-performance, secure, and
              AI-driven applications with robust architectures.
            </p>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Card */}

        <div className="space-y-6 md:space-y-8 ">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
            I am Sohag Hosen, a dedicated Software Engineer focused on
            architecture, code quality, and system scalability. My passion lies
            in taking complex, real-world business challenges and translating
            them into seamless, high-performance web solutions.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
            I specialize in the backend ecosystem utilizing PHP, Laravel, and
            CodeIgniter, alongside modern frontend frameworks like React.js.
            Beyond core coding, I have extensive experience in designing secure
            RESTful APIs, managing complex database schemas (MySQL, PostgreSQL),
            and implementing AI-driven automations via OpenAI and OCR tech.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
            Whether it's building multi-tenant SaaS environments, complex
            subscription engines with automated crons, or optimizing data
            pipelines, I approach every project with strict adherence to
            clean-code (SOLID) principles and long-term maintainability.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
            I value continuous learning, effective team leadership, and
            transparent technical communication. Let's collaborate to transform
            your vision into an enterprise-grade digital product—reach out and
            let's get started!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
