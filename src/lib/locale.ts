import { useLocation } from "react-router-dom";

export const useIsItalian = () => {
  const { pathname } = useLocation();
  return pathname.startsWith("/it");
};
