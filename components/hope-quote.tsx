interface HopeQuoteProps {
  quote: string
  author?: string
  className?: string
}

export function HopeQuote({ quote, author, className = "" }: HopeQuoteProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="bg-yellow-50 p-6 shadow-lg transform rotate-1 border-l-4 border-yellow-400"
        style={{
          clipPath: "polygon(0% 0%, 95% 0%, 100% 15%, 98% 85%, 100% 100%, 5% 100%, 0% 85%, 2% 15%)",
        }}
      >
        <p className="text-gray-800 font-medium italic text-lg leading-relaxed">"{quote}"</p>
        {author && <p className="text-gray-600 text-sm mt-2 text-right">- {author}</p>}
      </div>
    </div>
  )
}
