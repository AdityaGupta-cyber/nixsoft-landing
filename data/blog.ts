export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string;
  }
  
  export const blogData: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Cloud Technology in 2025 and beyond",
      slug: "future-cloud-technology-2025",
      excerpt: "Explore the emerging trends in cloud technology and their impact on businesses in 2025 and beyond.",
      content: `
        <h1>The Future of Cloud Technology in 2025 and beyond</h1>
        
        <p>Cloud technology continues to evolve at an unprecedented pace, transforming how businesses operate and scale. In 2025, we're seeing several emerging trends that are reshaping the cloud computing landscape.</p>
        
        <h2>Key Trends</h2>
        
        <h3>Multi-cloud Strategy</h3>
        <p>Organizations are increasingly adopting multiple cloud providers to minimize vendor lock-in and optimize costs. This approach provides greater flexibility and resilience.</p>
        
        <h3>Edge Computing</h3>
        <p>The rise of edge computing is bringing cloud capabilities closer to where data is generated, enabling faster processing and reduced latency.</p>
        
        <h3>AI Integration</h3>
        <p>Cloud providers are embedding advanced AI capabilities into their services, making machine learning more accessible to businesses of all sizes.</p>
        
        <h2>Impact on Businesses</h2>
        <p>The evolution of cloud technology is enabling businesses to be more agile, scalable, and innovative than ever before. Companies that embrace these changes are positioning themselves for success in the digital age.</p>`,
      author: "John Doe",
      date: "May 13, 2025",
      imageUrl: "/cloud.jpeg"
    },
    {
      id: 2,
      title: "Best Practices in Modern Website Development",
      slug: "modern-website-development-best-practices",
      excerpt: "Learn the essential techniques and best practices for building modern, performant websites.",
      content: `
        <h1>Best Practices in Modern Website Development</h1>
        
        <p>The landscape of web development continues to evolve at a rapid pace. Staying current with best practices is essential for creating websites that are fast, accessible, and provide excellent user experiences.</p>
        
        <h2>Performance-First Approach</h2>
        <p>Website performance has become a critical factor for success. Users expect near-instant loading times, and search engines penalize slow sites.</p>
        
        <h2>Accessibility as Standard</h2>
        <p>Creating inclusive websites that work for everyone is both an ethical imperative and increasingly a legal requirement.</p>
        
        <h2>Security Considerations</h2>
        <p>Security must be integrated into every aspect of website development, from frontend to backend implementations.</p>`,
      author: "Jane Smith",
      date: "May 10, 2025",
      imageUrl: "/Hero.jpg"
    },
    {
      id: 3,
      title: "Implementing Artificial Intelligence in Database Operations",
      slug: "ai-database-operations",
      excerpt: "Discover how AI is revolutionizing database management and operations.",
      content: `
        <h1>Implementing Artificial Intelligence in Database Operations</h1>
        
        <p>Artificial intelligence is revolutionizing how we manage and optimize database operations. From automated tuning to predictive maintenance, AI is transforming database management.</p>
        
        <h2>Self-Tuning Databases</h2>
        <p>AI-powered databases can automatically optimize their performance based on usage patterns and workload characteristics.</p>
        
        <h2>Predictive Maintenance</h2>
        <p>Machine learning models can predict potential issues before they occur, enabling proactive maintenance.</p>
        
        <h2>Intelligent Query Optimization</h2>
        <p>AI algorithms can analyze query patterns and suggest optimizations for better performance.</p>`,
      author: "Sarah Johnson",
      date: "May 5, 2025",
      imageUrl: "/cybersecurity.jpg"
    }
  ];