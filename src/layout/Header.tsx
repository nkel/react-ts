import DarkModeBtn from "../components/DarkModeBtn.tsx";



export default function Header() {
  return (
    <nav className="relative top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl flex items-center justify-between px-8 py-4 text-black dark:text-white dark:bg-gray-700 bg-stone-200/70 backdrop-blur-md rounded-full border border-stone-300/50">
      {/* Logo */}
      <span className="font-playfair text-xl font-bold text-stone-900 tracking-wide whitespace-nowrap">
        Serene Spaces
      </span>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-10">
          <li><a href="">home</a></li>
          <li><a href="">home</a></li>
          <li><a href="">home</a></li>

      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Cart icon */}
        <button className="text-stone-700 hover:text-stone-900 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h12M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button>

        {/* Language */}
        <span className="text-sm font-medium text-stone-700">EN</span>

        {/* Contact Us */}
        <button className="px-5 py-2 border border-stone-800 text-stone-900 text-sm font-medium rounded-full hover:bg-stone-800 hover:text-white transition-colors">
          Contact Us
        </button>
          <DarkModeBtn/>
      </div>
    </nav>
  );
}
