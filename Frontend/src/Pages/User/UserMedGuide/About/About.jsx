import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, var(--background-dark), var(--background-darker))',
        color: '#ffffff'
      }}
    >
      {/* About Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, var(--background-dark), var(--background-accent))'
        }}
        className="w-full py-20 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            style={{
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              paddingBottom: '8px'
            }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Diagnosify
          </h1>
          <p 
            style={{ color: 'var(--text-muted)' }}
            className="text-lg md:text-xl mb-8"
          >
            Diagnosify is your trusted companion for personalized health
            predictions, expert advice, and insightful recommendations. Our goal
            is to empower you to take charge of your well-being with the help of
            cutting-edge technology and medical expertise.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, var(--background-darker), var(--background-dark))'
        }}
        className="w-full py-20 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h2 
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="text-3xl font-semibold mb-4"
            >
              Our Mission
            </h2>
            <p 
              style={{ color: 'var(--text-muted)' }}
              className="text-lg"
            >
              At Diagnosify, our mission is to make healthcare more accessible,
              reliable, and personalized. By combining advanced algorithms and
              expert medical insights, we aim to deliver timely, accurate, and
              actionable health recommendations to everyone, everywhere.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              className="p-6 rounded-xl"
            >
              <h3 
                style={{
                  background: 'linear-gradient(135deg, #ffd700, var(--accent-color))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                className="text-xl font-semibold mb-2"
              >
                Why Choose Diagnosify?
              </h3>
              <ul 
                style={{ color: 'var(--text-muted)' }}
                className="list-disc list-inside space-y-1"
              >
                <li>Accurate health insights</li>
                <li>Trusted medical professionals</li>
                <li>24/7 support for your health journey</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, var(--background-dark), var(--background-accent))'
        }}
        className="w-full py-20 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 
            style={{
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            className="text-3xl font-semibold mb-6"
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              className="p-6 rounded-xl hover:border-[#00d4aa] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/20"
            >
              <h3 
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                className="text-xl font-semibold mb-4"
              >
                Innovation
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Continuously improving through advanced technology and AI
                solutions.
              </p>
            </div>
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              className="p-6 rounded-xl hover:border-[#0099cc] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0099cc]/20"
            >
              <h3 
                style={{
                  background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                className="text-xl font-semibold mb-4"
              >
                Trust
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Building confidence with reliable and expert-driven advice.
              </p>
            </div>
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              className="p-6 rounded-xl hover:border-[#ff6b6b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/20"
            >
              <h3 
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color), #ff4757)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                className="text-xl font-semibold mb-4"
              >
                Accessibility
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Ensuring healthcare solutions are available to everyone, always.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
