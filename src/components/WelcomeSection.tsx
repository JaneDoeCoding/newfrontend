// WelcomeSection.tsx
import React from 'react';
import './WelcomeSection.css';

const WelcomeSection: React.FC = () => {
  return (
    <>
      {/* 打招呼界面 */}
      <section className="welcome-section greeting-only">
        <div className="greeting">
          <h1>Hi, I'm Claire!</h1>
          <p>
            A person who loves technology, as well as fish products and food nutrition. Welcome to the "Fish Products Nutritional Analysis" website, and I'm so glad to meet you here!
          </p>
        </div>
      </section>

      {/* 使命界面 */}
      <section className="welcome-section mission-only">
        <div className="mission">
          <h2>Mission & Purpose</h2>
          <p>
            In 2019, I first came across the field of food nutrition, and that's when I discovered fish products. Known for their high protein and low-fat characteristics, fish products are popular worldwide and are often considered healthy food options. This sparked an idea in me. I wanted to help more people understand the nutritional value of fish products and, through scientific data, assist them in making healthier dietary choices.
          </p>
          <p>
            In 2025, I learned full-stack development during my studies, gaining both front-end and back-end skills. So, I decided to create this website, "Fish Products Nutritional Analysis", through which I aim to provide nutritional analysis content on fish products, helping people not only enjoy the taste but also better understand the benefits they offer.
          </p>
          <p>
            My mission is to bring technology and food together, helping people make better dietary choices through data and promoting the adoption of healthy lifestyles.
          </p>
          <p>Are you ready to begin the journey of discovery?</p>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
