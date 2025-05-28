// src/components/GoogleButton.tsx
import React from 'react';

const GoogleButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
  >
    <img src="/assets/google-logo.png" alt="Google" className="h-5 w-5 mr-2" />
    Continue with Google
  </button>
);

export default GoogleButton;