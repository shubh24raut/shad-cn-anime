// src/pages/NotFoundPage.tsx
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <span className="text-4xl font-bold animate-bounce">
        404 - Page Not Found
      </span>
    </div>
  );
};

export default NotFoundPage;
