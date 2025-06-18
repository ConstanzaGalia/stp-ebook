import React, { useState } from "react";

type PdfViewerProps = {
  url: string;
};

const PdfViewer = ({ url }: PdfViewerProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="relative w-48 h-64 border rounded overflow-hidden group cursor-pointer border-2 border-gray rounded-lg p-1 shadow hover:shadow-lg transition duration-200"
        onClick={() => setShowModal(true)}
      >
        <iframe src={url} className="w-full h-full pointer-events-none" />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-[90%] h-[90%] relative">
            <button
              className="absolute top-2 right-2 text-white text-xl bg-secondary p-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <iframe src={url} className="w-full h-full"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
