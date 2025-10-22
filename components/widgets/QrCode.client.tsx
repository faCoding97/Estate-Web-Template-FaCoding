'use client';
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

export default function QrCodeClient({ value, label = "Download PNG" }: { value: string; label?: string }) {
  const ref = useRef<QRCodeCanvas>(null);

  const download = () => {
    const canvas = (ref.current as any)?.canvasRef?.current as HTMLCanvasElement | null;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr.png";
    a.click();
  };

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <QRCodeCanvas value={value} size={160} includeMargin ref={ref as any} />
      <button onClick={download} className="px-3 py-1.5 rounded-xl bg-[var(--brand)] text-white">{label}</button>
    </div>
  )
}