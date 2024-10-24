import React, { useState } from 'react';
import { Search, Moon, Sun, Brain, Star, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Resources from './components/Resources';
import AINews from './components/AINews';
import Videos from './components/Videos';
import Bookmarks from './components/Bookmarks';

const categories = ["Image", "Video", "Content", "Coding", "Audio", "Others"];

const initialTools = [
  { id: 1, name: "DALL-E 2", description: "AI system that creates realistic images and art from natural language descriptions.", category: "Image", favorite: false, url: "https://openai.com/dall-e-2", image: "https://via.placeholder.com/120x80" },
  { id: 2, name: "Midjourney", description: "AI-powered tool that generates images from textual descriptions.", category: "Image", favorite: false, url: "https://www.midjourney.com", image: "https://via.placeholder.com/120x80" },
  { id: 3, name: "Stable Diffusion", description: "Latent text-to-image diffusion model capable of generating photo-realistic images.", category: "Image", favorite: false, url: "https://stabilityai.com", image: "https://via.placeholder.com/120x80" },
  { id: 4, name: "Runway ML", description: "AI-powered video editing and generation platform.", category: "Video", favorite: false, url: "https://runwayml.com", image: "https://via.placeholder.com/120x80" },
  { id: 5, name: "Synthesia", description: "AI video creation platform that turns text into video with AI avatars.", category: "Video", favorite: false, url: "https://www.synthesia.io", image: "https://via.placeholder.com/120x80" },
  { id: 6, name: "GPT-3", description: "Advanced language model capable of generating human-like text.", category: "Content", favorite: false, url: "https://openai.com/gpt-3", image: "https://via.placeholder.com/120x80" },
  { id: 7, name: "GitHub Copilot", description: "AI pair programmer that suggests code completions.", category: "Coding", favorite: false, url: "https://github.com/features/copilot", image: "https://via.placeholder.com/120x80" },
  { id: 8, name: "Descript", description: "AI-powered audio and video editing software.", category: "Audio", favorite: false, url: "https://www.descript.com", image: "https://via.placeholder.com/120x80" },
  { id: 9, name: "Anthropic", description: "AI research company focused on building safe and ethical AI systems.", category: "Others", favorite: false, url: "https://www.anthropic.com", image: "https://via.placeholder.com/120x80" },
];

const EliteAIToolsUI = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tools, setTools] = useState(initialTools);
  const [sortBy, setSortBy] = useState('name');

  const filteredTools = tools
    .filter(tool => 
      (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || tool.category === selectedCategory)
    )
    .sort((a, b) => {
      if (a.favorite !== b.favorite) return b.favorite ? 1 : -1;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleFavorite = (id) => {
    setTools(tools.map(tool => 
      tool.id === id ? { ...tool, favorite: !tool.favorite } : tool
    ));
  };

  return (
    <Router>
      <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-800'}`}>
        <div className="container mx-auto px-4">
          <header className="flex flex-col md:flex-row justify-between items-center py-6">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="text-indigo-600 w-8 h-8" />
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                Elite AI Tools
              </span>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
                <li><Link to="/" className="hover:text-indigo-600 transition-colors duration-200">Home</Link></li>
                <li><Link to="/resources" className="hover:text-indigo-600 transition-colors duration-200">Resources</Link></li>
                <li><Link to="/ai-news" className="hover:text-indigo-600 transition-colors duration-200">AI News</Link></li>
                <li><Link to="/videos" className="hover:text-indigo-600 transition-colors duration-200">Videos</Link></li>
                <li><Link to="/bookmarks" className="hover:text-indigo-600 transition-colors duration-200">Bookmarks</Link></li>
              </ul>
            </nav>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
            </button>
          </header>

          <main className="mt-12">
            <Routes>
              <Route path="/" element={
                <>
                  <h1 className="text-4xl font-extrabold text-center mb-8 leading-tight">
                    Discover and Master the Latest
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                      AI Tools
                    </span>
                  </h1>

                  <div className="flex justify-center mb-8">
                    <div className="relative w-full md:w-2/3">
                      <input
                        type="text"
                        placeholder='Search AI tools...'
                        className={`w-full p-4 pr-12 border-2 rounded-full focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-200 ${
                          darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                        }`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                          selectedCategory === category
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : darkMode
                            ? 'bg-gray-800 text-white hover:bg-gray-700'
                            : 'bg-white text-gray-800 hover:bg-gray-100 shadow'
                        }`}
                        onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mb-4 text-right">
                    <select
                      className={`p-2 text-sm border rounded-md ${
                        darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="name">Sort by Name</option>
                      <option value="favorite">Sort by Favorite</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map((tool) => (
                      <div 
                        key={tool.id} 
                        className={`rounded-lg p-6 flex flex-col ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-750' 
                            : 'bg-white hover:shadow-xl'
                        } transition-all duration-200 transform hover:scale-105`}
                      >
                        <div className="flex items-center mb-4">
                          <img src={tool.image} alt={tool.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-bold">{tool.name}</h3>
                              <button 
                                onClick={() => toggleFavorite(tool.id)} 
                                className={`text-yellow-500 hover:text-yellow-600 transition-colors duration-200 ${tool.favorite ? 'animate-pulse' : ''}`}
                              >
                                <Star className={tool.favorite ? "fill-current" : ""} />
                              </button>
                            </div>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                              darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-indigo-100 text-indigo-800'
                            }`}>
                              {tool.category}
                            </span>
                          </div>
                        </div>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex-grow`}>{tool.description}</p>
                        <div className="mt-auto">
                          <a 
                            href={tool.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Visit <ExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              } />
              <Route path="/resources" element={<Resources />} />
              <Route path="/ai-news" element={<AINews />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </main>

          <footer className="mt-12 py-6 text-center border-t">
            <p>&copy; 2023 Elite AI Tools. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default EliteAIToolsUI;