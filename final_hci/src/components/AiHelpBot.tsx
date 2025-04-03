import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

export default function AiHelpBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Bot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-gray-900">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-80 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                Hello! I'm your AI assistant. How can I help you today?
              </p>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}