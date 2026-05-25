

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 px-10 py-12">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <div className="shrink-0">
          <p className="font-playfair text-xl font-semibold text-white mb-2">Serene Spaces</p>
          <p className="text-xs text-stone-500 mt-6">© 2024 Serene Spaces. All rights reserved.</p>
        </div>

        <div className="shrink-0">
          <p className="text-sm font-semibold text-stone-100 mb-4">Join Newsletter</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-stone-800 border border-stone-700 rounded-full px-4 py-2 text-xs text-white placeholder-stone-500 outline-none focus:border-stone-400"
            />
            <button className="px-5 py-2 bg-white text-stone-900 text-xs font-semibold rounded-full hover:bg-stone-100 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
