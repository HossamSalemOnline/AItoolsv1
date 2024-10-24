import React, { useState, useEffect } from 'react';

const AINews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the RSS feed here
    // For this example, we'll use dummy data
    const dummyNews = [
      { title: "New AI Model Breaks Records in Image Recognition", url: "https://example.com/news1" },
      { title: "AI Ethics Board Established by Tech Giants", url: "https://example.com/news2" },
      { title: "Machine Learning Algorithms Improve Healthcare Diagnostics", url: "https://example.com/news3" },
      { title: "AI-powered Drones Revolutionize Agriculture", url: "https://example.com/news4" },
      { title: "Researchers Develop More Efficient Natural Language Processing Model", url: "https://example.com/news5" },
    ];

    setNews(dummyNews);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading AI news...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI News</h1>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AINews;