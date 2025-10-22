import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>(function Input({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={"w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)] " + className}
      {...props}
    />
  );
});

export default Input;