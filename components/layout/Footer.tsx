import site from "../../data/site.json";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5">
      <div className="mx-auto max-w-[--container] px-4 py-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-lg">{site.org.brandName}</h3>
          <p className="text-sm text-gray-600 mt-2">Serving Gqeberha (Port Elizabeth) and surrounds.</p>
          <p className="text-xs text-gray-500 mt-4">
            Disclaimer: Prices, availability and details are subject to change without notice. Images may be illustrative. This is not legal or financial advice.
          </p>
        </div>
        <div className="flex items-center justify-end">
          {/* Signature (must be exact, unchanged) */}
          <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
            <span className="whitespace-nowrap">Written by:</span>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              href="https://elixcode.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="/logo/logo.png"
                alt="Elix Code Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              Elix Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}