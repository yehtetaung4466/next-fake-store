"use client"
import React, { useState } from 'react';

export default function Example() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        Click me
      </button>
      {isFocused && (
        <p className="absolute top-0 left-0 mt-2 ml-2 text-gray-600 font-medium transition-all duration-300">
          Text to display when button is focused
        </p>
      )}
    </div>
  );
}