import type { Metadata } from "next";
import { baseUrl } from "app/sitemap";
import { withUtmSource } from "app/utils/utm";

const title = "Vid0: AI YouTube Growth Analytics for Creators";
const description =
  "AI YouTube growth analytics for creators. Type a topic and Vid0 picks what to make next from videos already winning on YouTube.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/vid0",
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/vid0`,
    siteName: "Arindam Majumder",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    title,
    card: "summary_large_image",
    description,
  },
};

function Vid0Link({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={withUtmSource("https://vid0.in")}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      {children}
    </a>
  );
}

export default function Vid0Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Vid0</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I kept running into the same wall with YouTube. The next video is
          usually a guess. I pick a topic because it feels timely, and I only
          find out later whether videos in that niche were already proving the
          idea works. Creators guess what to make next, and I was doing the same
          thing. I launched <Vid0Link>Vid0</Vid0Link> in October 2026 so that
          guess has somewhere to go.
        </p>
        <p>
          Vid0 is AI YouTube growth analytics for creators. You type a topic. It
          looks at what is already winning on YouTube and picks what you should
          make next. The job is the video in front of you: what to film, and
          whether a channel your size can win with it.
        </p>
        <p>
          vidIQ and TubeBuddy are keyword tools. They help with search terms,
          tags, and the scores around those terms. Vid0 is aimed at the earlier
          question, which is what to make. It starts from videos that are
          already performing in a niche, then works back to a topic you can
          actually produce.
        </p>
        <p>
          On <Vid0Link>Vid0</Vid0Link>, you type a topic and it shows outlier
          videos in that niche. Those are videos beating their own
          channel&apos;s usual views at the same age. It also looks at whether
          the topic is winnable at your size, by checking how many of the top
          results come from channels like yours. When you save an idea, the
          videos that inspired it stay attached, so the recommendation still has
          its evidence the next time you open it.
        </p>
        <p>
          Before you publish, Vid0 scores titles, thumbnails, and descriptions,
          and it can draft fixes from what is already working in the niche. If
          you connect your channel, access stays read-only. You can review
          retention, traffic sources, a channel audit, and a post-mortem of a
          video you already shipped. Views and upload dates come from YouTube.
          Anything Vid0 calculates on top of that, such as an outlier multiple
          or a score, is labeled &quot;Vid0 estimate, not YouTube data&quot;.
        </p>
        <p>
          Vid0 also has a <Vid0Link>free Chrome extension</Vid0Link>. It adds
          those scores and stats on youtube.com and inside YouTube Studio, so
          you can check a video without leaving the page you are already on. You
          can try the product on your own channel at <Vid0Link>Vid0</Vid0Link>.
          I am building it as its own product, and it is not affiliated with
          YouTube or Google.
        </p>
      </div>
    </section>
  );
}
