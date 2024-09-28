// src/routes/routes.ts
const ROUTES = {
  MAIN: "/",
  SEARCH_PAGE: "/:animeName",
  ANIME_INFO: "/anime/:id",
} as const;

export type RoutesType = (typeof ROUTES)[keyof typeof ROUTES]; // Union type for all routes
export default ROUTES;
