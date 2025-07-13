'use client';

import { useState } from 'react';

interface SidebarProps {
  onAddElement: (type: string) => void;
}

export default function Sidebar({ onAddElement }: SidebarProps) {
  const [activeTab, setActiveTab] = useState('elements');

  const elements = [
    { type: 'text', label: 'Text', icon: 'ri-text' },
    { type: 'button', label: 'Button', icon: 'ri-radio-button-line' },
    { type: 'image', label: 'Image', icon: 'ri-image-line' },
    { type: 'container', label: 'Container', icon: 'ri-layout-line' },
  ];

  const templates = [
    { name: 'Hero Section', image: 'https://readdy.ai/api/search-image?query=modern%20hero%20section%20template%20with%20clean%20design%20minimal%20layout%20professional%20website%20header%20with%20text%20and%20call%20to%20action%20button&width=200&height=120&seq=hero1&orientation=landscape' },
    { name: 'Card Layout', image: 'https://readdy.ai/api/search-image?query=card%20layout%20template%20modern%20web%20design%20with%20multiple%20cards%20clean%20minimal%20interface%20professional%20dashboard%20style&width=200&height=120&seq=card1&orientation=landscape' },
    { name: 'Contact Form', image: 'https://readdy.ai/api/search-image?query=contact%20form%20template%20modern%20clean%20design%20with%20input%20fields%20and%20submit%20button%20professional%20web%20interface&width=200&height=120&seq=form1&orientation=landscape' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('elements')}
            className={`flex-1 px-3 py-2 text-sm rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'elements' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Elements
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex-1 px-3 py-2 text-sm rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'templates' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Templates
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'elements' && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Basic Elements</h3>
            {elements.map((element) => (
              <button
                key={element.type}
                onClick={() => onAddElement(element.type)}
                className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <i className={`${element.icon} w-5 h-5 flex items-center justify-center text-gray-600`}></i>
                  <span className="text-sm text-gray-800">{element.label}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Page Templates</h3>
            {templates.map((template, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-20 object-cover object-top"
                />
                <div className="p-3">
                  <span className="text-sm text-gray-800">{template.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}