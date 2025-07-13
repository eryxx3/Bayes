'use client';

interface TopToolbarProps {
  isPreviewMode: boolean;
  setIsPreviewMode: (mode: boolean) => void;
}

export default function TopToolbar({ isPreviewMode, setIsPreviewMode }: TopToolbarProps) {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>
          WebBuilder
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded whitespace-nowrap cursor-pointer">
            <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>Save
          </button>
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded whitespace-nowrap cursor-pointer">
            <i className="ri-history-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>Undo
          </button>
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded whitespace-nowrap cursor-pointer">
            <i className="ri-share-forward-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>Redo
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className={`px-4 py-2 text-sm rounded whitespace-nowrap cursor-pointer ${
            isPreviewMode 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <i className={`${isPreviewMode ? 'ri-edit-line' : 'ri-eye-line'} w-4 h-4 flex items-center justify-center mr-1 inline-block`}></i>
          {isPreviewMode ? 'Edit' : 'Preview'}
        </button>
        
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 whitespace-nowrap cursor-pointer">
          <i className="ri-rocket-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>Publish
        </button>
      </div>
    </div>
  );
}