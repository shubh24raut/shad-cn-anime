// src/pages/AnimeInfoPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

const AnimeInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>Anime Info for ID: {id}</h1>;
};

export default AnimeInfoPage;
