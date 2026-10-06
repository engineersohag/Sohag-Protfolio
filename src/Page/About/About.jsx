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
              AI-Powered Full-Stack Software Engineer with over 2+ years of hands-on experience independently designing, developing, automating, and deploying production-ready digital solutions.
            </p>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Paragraph Blocks */}
        <div className="space-y-6 md:space-y-8">
          <p className="text-base md:text-lg lg:text-xl text-base-content/85 leading-relaxed border-l-4 border-primary pl-6 py-2">
            I am Sohag Hosen, a results-driven Full-Stack Software Engineer with over 2+ years of hands-on experience building scalable web applications and high-performance digital products. My core expertise centers on the backend ecosystem with PHP, Laravel, and CodeIgniter, paired with modern frontend engineering using React.js, JavaScript, and TypeScript, alongside extensive experience in MySQL, PostgreSQL, and secure RESTful APIs.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-base-content/85 leading-relaxed border-l-4 border-primary pl-6 py-2">
            What sets my development workflow apart is how effectively I leverage modern AI tools—including Cursor, Claude, ChatGPT, Gemini, Grok, and Codex—as a high-impact productivity multiplier. Rather than relying on AI as a substitute for fundamentals, I combine it with strong technical judgment, clean-code practices, and SOLID principles. This enables me to complete complex development tasks significantly faster and handle workloads that traditionally require multiple developers.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-base-content/85 leading-relaxed border-l-4 border-primary pl-6 py-2">
            I independently manage the complete lifecycle of a digital product from concept to production. Whether working from an initial idea or an existing codebase, I handle requirements analysis, UI/UX implementation, frontend and backend/API development, database architecture, AI integration, automation, testing, debugging, deployment, and ongoing system maintenance.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-base-content/85 leading-relaxed border-l-4 border-primary pl-6 py-2">
            Beyond core web development, I specialize in business process automation using platforms such as n8n, Make.com, and GoHighLevel, integrated with OpenAI APIs, OCR, and intelligent automation technologies. I design workflows that eliminate repetitive tasks, optimize business operations, and drive measurable efficiency.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-base-content/85 leading-relaxed border-l-4 border-primary pl-6 py-2">
            On the deployment and DevOps side, I have practical experience working with cPanel, Docker, AWS, Git, GitHub, CI/CD pipelines, server configuration, and production deployments. This allows me to take a project all the way to a live, production-ready application as a self-driven engineer who can design, develop, automate, deploy, and maintain complete digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;