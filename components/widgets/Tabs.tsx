'use client';
import { useState } from "react";

export default function Tabs({ tabs }: { tabs: {label: string, content: React.ReactNode}[] }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((t, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={"px-3 py-1.5 rounded-xl " + (i===idx ? "bg-[var(--brand)] text-white" : "bg-white border")}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[i]?.content}</div>
    </div>
  )
}