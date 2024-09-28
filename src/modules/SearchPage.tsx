// src/pages/SearchPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

const SearchPage: React.FC = () => {
  const { animeName } = useParams<{ animeName: string }>();

  return <h1>Search Results for: {animeName}</h1>;
};

export default SearchPage;
