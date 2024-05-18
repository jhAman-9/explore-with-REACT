# Online Status Custom Hook
- This will show you that you are online or offline

        import { useEffect, useState } from "react";
        const useOnlineStatus = () => {
            const [onlineStatus, setOnlineStatus] = useState(true);

            useEffect(() => {
                window.addEventListener("online", () => {
                    setOnlineStatus(true)
                });

                window.addEventListener("offline", () => {
                    setOnlineStatus(false);
                })

            },[])
            return onlineStatus;
        }


        export default useOnlineStatus