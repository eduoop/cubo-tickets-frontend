"use client";
import { Button } from "@/app/_components/ui/button";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={toggleTheme}
      className="bg-transparent text-font-primary hover:bg-transparent shadow-none"
    >
      {isDark ? (
        <MdLightMode fontSize={25} />
      ) : (
        <MdDarkMode fontSize={25} className="text-[#292929]" />
      )}
    </Button>
  );
}

export default ThemeToggle;
