"use client";

import { useEffect, useState } from "react";
import { logEvents } from "../lib/mock-data";

export function LogStream() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setLines((current) => {
        if (index >= logEvents.length) {
          return current;
        }

        const next = [...current, `[${new Date().toISOString()}] ${logEvents[index]}`];
        index += 1;
        return next;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return <pre className="max-h-96 overflow-auto rounded border border-slate-800 bg-slate-950 p-3 text-xs">{lines.join("\n") || "waiting for events..."}</pre>;
}
