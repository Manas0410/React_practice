import { useEffect, useMemo, useState } from "react";

export const UserConfigGood = () => {
  const [config, setConfig] = useState({ theme: "", height: 0, width: 0 });

  useEffect(() => {
    const theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const width = window.screen.width;
    const height = window.screen.height;

    setConfig({ theme, width, height });
  }, []);

  console.log("Re-Render: ", config);

  return (
    <div>
      <p>
        {config.theme}-{config.height}-{config.width}
      </p>
    </div>
  );
};

export const UserConfigBest = () => {
  const config = useMemo(() => {
    const theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const width = window.screen.width;
    const height = window.screen.height;

    return { theme, width, height };
  }, []);

  console.log("Re-Render: ", config);

  return (
    <div>
      <p>
        {config.theme}-{config.height}-{config.width}
      </p>
    </div>
  );
};
