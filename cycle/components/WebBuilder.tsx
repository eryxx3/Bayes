'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import PropertiesPanel from './PropertiesPanel';
import TopToolbar from './TopToolbar';

export default function WebBuilder() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elements, setElements] = useState<any[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const addElement = (type: string) => {
    const newElement = {
      id: Date.now().toString(),
      type,
      props: getDefaultProps(type),
      position: { x: 100, y: 100 },
    };
    setElements([...elements, newElement]);
  };

  const getDefaultProps = (type: string) => {
    switch (type) {
      case 'text':
        return { content: 'Sample Text', fontSize: '16px', color: '#000000' };
      case 'button':
        return { text: 'Click Me', backgroundColor: '#3B82F6', color: '#FFFFFF' };
      case 'image':
        return { src: 'https://readdy.ai/api/search-image?query=modern%20web%20design%20placeholder%20image%20with%20clean%20minimal%20background%20and%20professional%20layout&width=300&height=200&seq=placeholder1&orientation=landscape', alt: 'Image', width: '300px', height: '200px' };
      case 'container':
        return { backgroundColor: '#F3F4F6', padding: '20px', width: '400px', height: '200px' };
      default:
        return {};
    }
  };

  const updateElement = (id: string, newProps: any) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, props: { ...el.props, ...newProps } } : el
    ));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <TopToolbar 
        isPreviewMode={isPreviewMode}
        setIsPreviewMode={setIsPreviewMode}
      />
      
      <div className="flex-1 flex">
        {!isPreviewMode && (
          <Sidebar onAddElement={addElement} />
        )}
        
        <Canvas
          elements={elements}
          selectedElement={selectedElement}
          onSelectElement={setSelectedElement}
          onUpdateElement={updateElement}
          isPreviewMode={isPreviewMode}
        />
        
        {!isPreviewMode && selectedElement && (
          <PropertiesPanel
            element={elements.find(el => el.id === selectedElement)}
            onUpdateElement={updateElement}
            onDeleteElement={deleteElement}
          />
        )}
      </div>
    </div>
  );
}