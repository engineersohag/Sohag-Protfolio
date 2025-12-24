import React from "react";

const About = () => {

  return (
    <section>
      <div className='mx-2 md:mx-0'>
        {/* Header Section with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-8 tracking-tight">
            About Me
          </h2>
          <div className="inline-block">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-base-content leading-relaxed">
              Full Stack Web Developer skilled in PHP, Laravel, CodeIgniter, JS, React JS, Ajax, DataTables, MySQL & Firebase. Quick learner, Instructor & Debater with strong communication skills.
            </p>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Card */}
        
          
          <div className="space-y-6 md:space-y-8 ">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
              I'm <span className="font-semibold text-base-content bg-primary/10 px-2 py-1 rounded">Sohag Hosen</span>. Since intermediate, my dream was to become a skillful web developer. My main interest has always been web development.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
               I specialize in building modern, high-performance websites and web applications using a wide range of technologies, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, React.js, DataTables, Ajax, PHP, Laravel, CodeIgniter, MySQL, and Firebase.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
              Whether you're looking for a clean and responsive landing page, a dynamic business website, or a full-featured web application, I’m here to bring your ideas to life with precision and creativity. I take every project seriously and treat your success as my own. 
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 py-2">
              Let's work together to build something amazing – feel free to reach out, and let’s get started!
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;