// src/components/ContentRoutes.tsx
import AnimeInfoPage from "@/modules/AnimeInfoPage";
import HomePage from "@/modules/HomePage";
import NotFoundPage from "@/modules/NotFoundPage";
import SearchPage from "@/modules/SearchPage";
import ROUTES from "@/routes/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ContentRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<HomePage />} />
      <Route path={ROUTES.SEARCH_PAGE} element={<SearchPage />} />
      <Route path={ROUTES.ANIME_INFO} element={<AnimeInfoPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
    </Routes>
  );
};

export default ContentRoutes;
