import { fetchArticles } from '@/lib/rss'
import { SECTORS } from '@/lib/feeds'
import { FREELANCE_VIDEOS } from '@/lib/youtube'
import VideoCard from '@/components/VideoCard'
import FeedTimestamp from '@/components/FeedTimestamp'
import HeadlineCard from '@/components/HeadlineCard'

export const dynamic = 'force-dynamic'

export default async function FreelancePage() {
  const articles = await fetchArticles(SECTORS.freelance.feeds)

  return (
    <div>
      <FeedTimestamp sector={SECTORS.freelance} />

      <div className="section-divider">
        <h2>Latest Articles</h2>
      </div>

      <div className="article-grid">
        {articles.slice(0, 20).map((a, i) => (
          <HeadlineCard key={i} article={a} accent={SECTORS.freelance.accent} />
        ))}
      </div>

      <div className="section-divider">
        <h2>Video Tutorials & Case Studies</h2>
      </div>

      <div className="video-grid">
        {FREELANCE_VIDEOS.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  )
}
