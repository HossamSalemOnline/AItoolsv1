import React from 'react';

const Resources = () => {
  const resources = [
    { title: "AI Ethics Guidelines", url: "https://example.com/ai-ethics" },
    { title: "Machine Learning Courses", url: "https://example.com/ml-courses" },
    { title: "AI Research Papers", url: "https://example.com/ai-papers" },
    { title: "AI Development Tools", url: "https://example.com/ai-tools" },
    { title: "AI Conferences and Events", url: "https://example.com/ai-events" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Resources</h1>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;