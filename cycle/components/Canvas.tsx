'use client';

interface CanvasProps {
  elements: any[];
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, newProps: any) => void;
  isPreviewMode: boolean;
}

export default function Canvas({ 
  elements, 
  selectedElement, 
  onSelectElement, 
  onUpdateElement, 
  isPreviewMode 
}: CanvasProps) {
  const renderElement = (element: any) => {
    const isSelected = selectedElement === element.id && !isPreviewMode;
    
    switch (element.type) {
      case 'text':
        return (
          <div
            key={element.id}
            className={`absolute cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              left: element.position.x,
              top: element.position.y,
              fontSize: element.props.fontSize,
              color: element.props.color,
            }}
            onClick={() => !isPreviewMode && onSelectElement(element.id)}
          >
            {element.props.content}
          </div>
        );
      
      case 'button':
        return (
          <button
            key={element.id}
            className={`absolute px-4 py-2 rounded whitespace-nowrap cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              left: element.position.x,
              top: element.position.y,
              backgroundColor: element.props.backgroundColor,
              color: element.props.color,
            }}
            onClick={() => !isPreviewMode && onSelectElement(element.id)}
          >
            {element.props.text}
          </button>
        );
      
      case 'image':
        return (
          <img
            key={element.id}
            src={element.props.src}
            alt={element.props.alt}
            className={`absolute cursor-pointer object-cover object-top ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              left: element.position.x,
              top: element.position.y,
              width: element.props.width,
              height: element.props.height,
            }}
            onClick={() => !isPreviewMode && onSelectElement(element.id)}
          />
        );
      
      case 'container':
        return (
          <div
            key={element.id}
            className={`absolute border-2 border-dashed border-gray-300 cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              left: element.position.x,
              top: element.position.y,
              width: element.props.width,
              height: element.props.height,
              backgroundColor: element.props.backgroundColor,
              padding: element.props.padding,
            }}
            onClick={() => !isPreviewMode && onSelectElement(element.id)}
          >
            <div className="text-gray-500 text-sm">Container</div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-gray-100 relative overflow-auto">
      <div className="absolute inset-0 bg-white m-8 shadow-lg rounded-lg overflow-hidden">
        <div 
          className="relative w-full h-full bg-white"
          onClick={() => !isPreviewMode && onSelectElement(null)}
        >
          {elements.map(renderElement)}
          
          {!isPreviewMode && elements.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <i className="ri-cursor-line w-12 h-12 flex items-center justify-center mx-auto mb-4 text-4xl"></i>
                <p className="text-lg font-medium">Start building your page</p>
                <p className="text-sm mt-2">Drag elements from the sidebar to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {!isPreviewMode && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-2">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>100%</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span>1920 × 1080</span>
          </div>
        </div>
      )}
    </div>
  );
}