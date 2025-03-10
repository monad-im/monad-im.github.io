import React from 'react';
import { Github, ExternalLink, Blocks, Wrench, Sparkles } from 'lucide-react';

function App() {
  const tools = [
    {
      name: "Testnet Notification Bot",
      description: "A tiny but powerful transaction notification Telegram Bot for the Monad testnet, with real-time data and small analytics.",
      status: "Coming after Testnet Launch",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      name: "Monad Messenger",
      description: "Coming soon - a decentralized messaging app built on Monad, with end-to-end encryption.",
      status: "Coming Soon",
      icon: <Wrench className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Rest of the component remains the same */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <Blocks className="w-16 h-16 mb-6 text-blue-400" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Monad Hackathon Project
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            This is project for Monad evm/accathon 2025. We are building a set of tools to help developers and users interact with the Monad blockchain.
          </p>
          <br/>
          <p className="text-x1 text-blue-300 max-w-2xl">
            This project is not affiliated with Monad or Monad Foundation. It is a community-driven project.
          </p>
        </div>

        {/* Tools Grid */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  {tool.icon}
                </div>
                <span className="text-sm px-3 py-1 bg-blue-500/20 rounded-full text-blue-300">
                  {tool.status}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <a href="https://github.com/monad-im"
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://monad.xyz" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <ExternalLink className="w-5 h-5" />
              Learn More about Monad Blockchain
            </a>
          </div>
          <p className="text-gray-400">
            Stay tuned for more exciting tools and updates!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Blocks className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Monad Tools</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;