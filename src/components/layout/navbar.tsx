export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold text-slate-900">
          CareerCopilot AI
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-slate-600 hover:text-slate-900">
            Features
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900">
            Pricing
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900">
            FAQ
          </a>
        </nav>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700">
          Join Beta
        </button>
      </div>
    </header>
  );
}