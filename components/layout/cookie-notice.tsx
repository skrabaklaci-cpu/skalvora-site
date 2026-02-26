"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "skalvora_cookie_ack";

type CookieNoticeProps = {
  title: string;
  description: string;
  acceptLabel: string;
};

export function CookieNotice({ title, description, acceptLabel }: CookieNoticeProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = window.localStorage.getItem(COOKIE_KEY);
    if (!hasAccepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 w-[min(92vw,360px)] rounded-xl2 border border-border bg-surface p-4 shadow-card">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-xs text-muted">{description}</p>
      <div className="mt-4 flex gap-2">
        <Button type="button" onClick={acceptCookies} className="text-xs" fullWidth>
          {acceptLabel}
        </Button>
      </div>
    </div>
  );
}
