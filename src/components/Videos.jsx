import React from 'react';

const VideoCard = ({ title, thumbnail, url }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        Watch Video
      </a>
    </div>
  </div>
);

const Videos = () => {
  const categories = [
    {
      name: "Image Generation",
      videos: [
        { title: "DALL-E 2 Tutorial", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example1" },
        { title: "Midjourney Masterclass", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example2" },
        { title: "Stable Diffusion Guide", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example3" },
      ]
    },
    {
      name: "Natural Language Processing",
      videos: [
        { title: "GPT-3 for Beginners", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example4" },
        { title: "Advanced NLP Techniques", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example5" },
        { title: "Building Chatbots with AI", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example6" },
      ]
    },
    {
      name: "Computer Vision",
      videos: [
        { title: "Introduction to OpenCV", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example7" },
        { title: "Object Detection with YOLO", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example8" },
        { title: "Facial Recognition Systems", thumbnail: "https://via.placeholder.com/300x200", url: "https://youtube.com/example9" },
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Tutorial Videos</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((video, videoIndex) => (
              <VideoCard key={videoIndex} {...video} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;