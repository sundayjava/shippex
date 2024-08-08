import { ReactNode, useEffect, useState } from "react";
import "./style.scss";

interface PullToRefreshProps {
  children: ReactNode;
}

export default function PullToRefresh({ children }: PullToRefreshProps)  {
  const [isLoading, setIsLoading] = useState(false);
  let pStartY = 0;
  let pCurrentY = 0;
  const threshold = 80;

  useEffect(() => {
    const refreshContainer = document.querySelector(
      ".refresh-container"
    ) as HTMLElement | null;
    const spinner = document.querySelector(".spinner") as HTMLElement | null;

    if (!refreshContainer || !spinner) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    const loadInit = () => {
      refreshContainer.classList.add("load-init");
      setIsLoading(true);
    };

    const swipeStart = (e: TouchEvent) => {
      if (!isLoading) {
        const touch = e.targetTouches[0];
        pStartY = touch.screenY;
      }
    };

    const swipe = (e: TouchEvent) => {
      if (!isLoading) {
        const touch = e.changedTouches[0];
        pCurrentY = touch.screenY;

        const changeY = pStartY < pCurrentY ? Math.abs(pStartY - pCurrentY) : 0;

        if (changeY <= threshold) {
          const pullDistance = Math.min(changeY, 80); 
          refreshContainer.style.marginTop = `${pullDistance}px`;
          spinner.style.transform = `rotate(${pullDistance * 13.5}deg)`;

          if (changeY >= 80) loadInit();
        }
      }
    };

    const swipeEnd = (e: TouchEvent) => {
      let touch = e.changedTouches[0];
      pCurrentY = touch.screenY;

      if (isLoading) {
        refreshContainer.classList.add("load-start");

        setTimeout(() => {
          setIsLoading(false);
          refreshContainer.style.marginTop = "0px";
          refreshContainer.classList.remove("load-init");
          window.location.reload()
          refreshContainer.classList.remove("load-start");
        }, 1000);
      }

      if (!isLoading) {
        refreshContainer.style.marginTop = "0px";
        spinner.style.transform = `rotate(0deg)`;
      }
    };

    document.addEventListener("touchstart", swipeStart);
    document.addEventListener("touchmove", swipe);
    document.addEventListener("touchend", swipeEnd);

    return () => {
      document.removeEventListener("touchstart", swipeStart);
      document.removeEventListener("touchmove", swipe);
      document.removeEventListener("touchend", swipeEnd);
    };
  }, [isLoading]);

  return (
    <div>
      <div className="refresh-container">
        <svg className="spinner">
          <use href="#spinner"></use>
        </svg>
      </div>
      {children}
      <svg style={{ display: "none" }}>
        <symbol id="spinner" viewBox="0 0 24 24">
          <path d="M13.146 11.0499L12.9717 9.05752L15.3463 8.84977C14.4472 7.98322 13.2243 7.4503 11.877 7.4503C9.11553 7.4503 6.87695 9.68888 6.87695 12.4503C6.87695 15.2117 9.11553 17.4503 11.877 17.4503C13.6977 17.4503 15.2912 16.4771 16.1655 15.0224L18.1682 15.5231C17.0302 17.8487 14.6406 19.4503 11.877 19.4503C8.01096 19.4503 4.87695 16.3163 4.87695 12.4503C4.87695 8.58431 8.01096 5.4503 11.877 5.4503C13.8234 5.4503 15.5843 6.24474 16.8531 7.52706L16.6078 4.72412L18.6002 4.5498L19.1232 10.527L13.146 11.0499Z" />
        </symbol>
      </svg>
    </div>
  );
}
