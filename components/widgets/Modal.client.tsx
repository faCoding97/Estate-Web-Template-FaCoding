'use client';
import { useState } from "react";

export default function ModalClient({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-xl bg-[var(--brand)] text-white">{label}</button>
      {open && (
        <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl p-4 max-w-lg w-full" onClick={(e)=>e.stopPropagation()}>
            <button className="float-right text-sm" onClick={()=>setOpen(false)}>Close</button>
            <div className="clear-both mt-2">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}