'use client';

interface PropertiesPanelProps {
  element: any;
  onUpdateElement: (id: string, newProps: any) => void;
  onDeleteElement: (id: string) => void;
}

export default function PropertiesPanel({ element, onUpdateElement, onDeleteElement }: PropertiesPanelProps) {
  if (!element) return null;

  const handleChange = (key: string, value: any) => {
    onUpdateElement(element.id, { [key]: value });
  };

  const renderProperties = () => {
    switch (element.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                value={element.props.content}
                onChange={(e) => handleChange('content', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                maxLength={500}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
              <input
                type="text"
                value={element.props.fontSize}
                onChange={(e) => handleChange('fontSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="color"
                value={element.props.color}
                onChange={(e) => handleChange('color', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
          </div>
        );
      
      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
              <input
                type="text"
                value={element.props.text}
                onChange={(e) => handleChange('text', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
              <input
                type="color"
                value={element.props.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
              <input
                type="color"
                value={element.props.color}
                onChange={(e) => handleChange('color', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={element.props.src}
                onChange={(e) => handleChange('src', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
              <input
                type="text"
                value={element.props.alt}
                onChange={(e) => handleChange('alt', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
                <input
                  type="text"
                  value={element.props.width}
                  onChange={(e) => handleChange('width', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                <input
                  type="text"
                  value={element.props.height}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 'container':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
              <input
                type="color"
                value={element.props.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
                <input
                  type="text"
                  value={element.props.width}
                  onChange={(e) => handleChange('width', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                <input
                  type="text"
                  value={element.props.height}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Padding</label>
              <input
                type="text"
                value={element.props.padding}
                onChange={(e) => handleChange('padding', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-800 capitalize">{element.type} Properties</h3>
          <button
            onClick={() => onDeleteElement(element.id)}
            className="p-1 text-gray-400 hover:text-red-500 cursor-pointer"
          >
            <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {renderProperties()}
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Position</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">X Position</label>
              <input
                type="number"
                value={element.position.x}
                onChange={(e) => onUpdateElement(element.id, { position: { ...element.position, x: parseInt(e.target.value) } })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Y Position</label>
              <input
                type="number"
                value={element.position.y}
                onChange={(e) => onUpdateElement(element.id, { position: { ...element.position, y: parseInt(e.target.value) } })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}