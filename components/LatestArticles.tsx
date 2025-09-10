'use client'

export default function LatestArticles() {
  const articles = [
    {
      date: 'Recent',
      title: 'Recognition doesn\'t need a calendar invite.',
      description: 'Thoughts on the importance of spontaneous recognition and appreciation in the workplace.',
      link: '#'
    },
    {
      date: 'Recent',
      title: 'SEO is constantly evolving.',
      description: 'Insights on staying current with search engine optimization trends and best practices.',
      link: '#'
    },
    {
      date: 'Recent',
      title: 'Want a website that doesn\'t just look good, but actually works?',
      description: 'Exploring the balance between aesthetic design and functional user experience in web development.',
      link: '#'
    }
  ]

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2 text-white">Latest Thoughts</h2>
        <p className="text-neutral-300">Some of my recent professional insights</p>
      </div>
      
      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="border-b border-neutral-600 pb-6 last:border-b-0">
            <div className="text-sm text-neutral-400 mb-2">{article.date}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">{article.description}</p>
            <a href={article.link} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
