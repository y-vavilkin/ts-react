import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { loadSettings } from "./utils";
import { AppSettings } from "./interfaces";

declare global {
  interface Window {
    appSettings: AppSettings;
  }
}

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadSettings();
    setIsLoading(false);
  }, []);
  return <div>{isLoading ? <p>Loading....</p> : <HomePage />}</div>;
};
