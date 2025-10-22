"use client";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

type QrCodeClientProps = {
  value: string;
  label?: string;
  size?: number;
  className?: string;
};

export default function QrCodeClient({
  value,
  label = "Download PNG",
  size = 160,
  className = "",
}: QrCodeClientProps) {
  // به جای useRef<QRCodeCanvas> همین div را نگه می‌داریم
  const rootRef = useRef<HTMLDivElement | null>(null);

  const download = () => {
    const container = rootRef.current;
    if (!container) return;

    // canvas داخلی کامپوننت را پیدا کن
    const canvas = container.querySelector(
      "canvas"
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr.png";
    a.click();
  };

  return (
    <div
      ref={rootRef}
      className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <QRCodeCanvas value={value} size={size} includeMargin />
      <button
        type="button"
        onClick={download}
        className="px-3 py-1.5 rounded-xl bg-[var(--brand,#16a34a)] text-white">
        {label}
      </button>
    </div>
  );
}
