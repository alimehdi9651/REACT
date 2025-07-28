import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlinestatues] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinestatues(false);
    });
    window.addEventListener("online", () => {
      setOnlinestatues(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
