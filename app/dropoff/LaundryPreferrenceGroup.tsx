"use client";
import { useState } from "react";
import { getLabelFromKey } from "@/app/lib/utils";

type LaundryPreferences = "separateWash" | "handDried";
export default function LaundryPreferrenceGroup() {
  const [preferences, setPreferences] = useState({
    separateWash: false,
    handDried: false,
  });

  const handleChange = (key: LaundryPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {(
        Object.entries(preferences) as Array<[LaundryPreferences, boolean]>
      ).map(([key, value]) => (
        <div
          key={key}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-100 cursor-pointer hover:border-indigo-400 hover:bg-zinc-900"
        >
          <input type="hidden" name={key} value={value ? "true" : "false"} />
          <input
            type="checkbox"
            checked={value}
            id={key}
            onChange={() => handleChange(key)}
            className="h-4 w-4 rounded border-zinc-500 bg-zinc-900 text-indigo-500 focus:ring-indigo-500"
          />
          <label htmlFor={key}>{getLabelFromKey(key)}</label>
        </div>
      ))}
    </div>
  );
}
