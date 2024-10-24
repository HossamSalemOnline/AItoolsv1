import React from 'react';

const Bookmarks = () => {
  const bookmarkCategories = [
    {
      name: "AI Research",
      bookmarks: [
        { title: "arXiv.org", url: "https://arxiv.org/list/cs.AI/recent" },
        { title: "Google AI", url: "https://ai.google/" },
        { title: "OpenAI", url: "https://openai.com/" },
      ]
    },
    {
      name: "AI Tools",
      bookmarks: [
        { title: "TensorFlow", url: "https://www.tensorflow.org/" },
        { title: "PyTorch", url: "https://pytorch.org/" },
        { title: "Hugging Face", url: "https://huggingface.co/" },
      ]
    },
    {
      name: "AI News",
      bookmarks: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/topic/artificial-intelligence/" },
        { title: "AI News", url: "https://artificialintelligence-news.com/" },
        { title: "Towards Data Science", url: "https://towardsdatascience.com/" },
      ]
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Bookmarks</h1>
      {bookmarkCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <ul className="space-y-2">
            {category.bookmarks.map((bookmark, bookmarkIndex) => (
              <li key={bookmarkIndex} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {bookmark.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;