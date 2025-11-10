import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import './Blogs.css';

const blogPosts = [
  { title: 'Artificial Intelligence in Engineering.', url: 'https://medium.com/@tarunreddy007/artificial-intelligence-in-engineering-f83bf93c9b12' },
  { title: 'Computer Vision Revolutionizing the Agritech Industry.', url: 'https://medium.com/@tarunreddy007/computer-vision-revolutionizing-the-agritech-industry-5d1ea049be0f' },
  { title: 'Scope and Research Areas in Artificial Intelligence.', url: 'https://medium.com/@tarunreddy007/scope-and-research-areas-in-artificial-intelligence-f84ad7d97fdb' },
  { title: 'Empowering Wildlife Conservation through Computer Vision in Forests.', url: 'https://medium.com/@tarunreddy007/empowering-wildlife-conservation-through-computer-vision-in-forests-140c5bc9fafb' },
  { title: 'Transforming Agriculture with Machine Learning and Artificial Intelligence.', url: 'https://medium.com/@tarunreddy007/transforming-agriculture-with-machine-learning-and-artificial-intelligence-4142bdb6f363' },
  { title: 'Enhancing Basic Financial and Legal Literacy Through Generative AI.', url: 'https://medium.com/@tarunreddy007/enhancing-basic-financial-and-legal-literacy-through-generative-ai-4e76c339f27a' },
  { title: 'Generative AI in the Medical Industry: Shaping the Future of Healthcare.', url: 'https://medium.com/@tarunreddy007/generative-ai-in-the-medical-industry-shaping-the-future-of-healthcare-4b85be95a255' },
  { title: 'Advancements in Computer Vision for Sign Language Detection.', url: 'https://medium.com/@tarunreddy007/advancements-in-computer-vision-for-sign-language-detection-9e0b3b230ef5' },
  { title: 'The Rising Tide of Chatbots: Deep Learning Revolution in AI.', url: 'https://medium.com/@tarunreddy007/the-rising-tide-of-chatbots-deep-learning-revolution-in-ai-2bbd6a59ea09' },
  { title: 'Revolutionizing First Aid: Harnessing the Power of Generative AI.', url: 'https://medium.com/@tarunreddy007/title-revolutionizing-first-aid-harnessing-the-power-of-generative-ai-328bef7d5bdc' },
  { title: 'Flutter: Accelerating App Development for a Dynamic Digital Era', url: 'https://medium.com/@tarunreddy007/title-flutter-accelerating-app-development-for-a-dynamic-digital-era-1feb76788bdf' },
  { title: 'The Role of Large Language Models in Business Intelligence', url: 'https://medium.com/@tarunreddy007/the-role-of-large-language-models-in-business-intelligence-a3bb00df05cb' }
];

const Blogs = () => {
  return (
    <div className="blogs-page">
      <TopNav />

      <header className="blogs-header">
        <h2>Blogs</h2>
        <p className="blogs-sub">Writings on AI, vision, sustainability & technology applications.</p>
      </header>

      <section className="blogs-grid" aria-label="Blog posts">
        {blogPosts.map(post => (
          <article key={post.url} className="blog-card" tabIndex={0}>
            <h3 className="blog-title">{post.title}</h3>
            <a href={post.url} className="blog-link" target="_blank" rel="noreferrer" aria-label={`Read blog: ${post.title}`}>Read →</a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
