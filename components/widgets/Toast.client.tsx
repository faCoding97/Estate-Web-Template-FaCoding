'use client';
import { useEffect, useState } from "react";

export default function ToastClient({ message, duration = 3000 }: { message: string; duration?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(t);
  }, [message, duration]);

  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black text-white shadow">
      {message}
    </div>
  )
}