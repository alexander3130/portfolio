import React from "react";

const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-auto bg-black bg-opacity-90 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg overflow-hidden relative w-80 max-w-lg">
        <span className="absolute top-4 right-4 text-white text-3xl font-bold transition duration-300 cursor-pointer" onClick={onClose}>&times;</span>
        <img src={src} alt={alt} />
        {caption && <div className="text-center text-gray-400 py-2">{caption}</div>}
      </div>
    </div>
  );
};

export default Modal;
