import type { Metadata } from "next";
import Link from "next/link";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "app/components/icons";
import { AudienceCompanies } from "app/components/audience-companies";
import { withUtmSource } from "app/utils/utm";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Audience, reach, and rates for sponsored developer content with Arindam Majumder across YouTube, X, and LinkedIn.",
};

type Stat = {
  label: string;
  value: string;
  delta?: string;
  note?: string;
};

type Share = {
  label: string;
  percent: number;
};

type Breakdown = {
  title: string;
  basis: string;
  rows: Share[];
};

type TopItem = {
  title: string;
  detail: string;
  metric: string;
};

type Platform = {
  name: string;
  icon: () => React.ReactNode;
  href: string;
  handle: string;
  period: string;
  stats: Stat[];
  audiencePeriod: string;
  breakdowns: Breakdown[];
  highlights: string[];
  topTitle: string;
  top: TopItem[];
};

type Offer = {
  name: string;
  icons: (() => React.ReactNode)[];
  price: string;
  unit: string;
  description: string;
};

const totals = [
  { value: "27.8K", label: "Followers across YouTube, X, and LinkedIn" },
  { value: "2.28M", label: "Monthly impressions on X and LinkedIn" },
  { value: "31.8K", label: "Monthly engagements on X and LinkedIn" },
  { value: "210K+", label: "Lifetime YouTube views" },
];

const audienceHighlights = [
  "25–34 is the largest age group on every platform: 47% of YouTube views and 37% of X impressions.",
  "66% of LinkedIn followers work in software development, IT services, or internet companies. The top job titles are software engineer, founder, and AI engineer.",
  "India leads on YouTube (43% of views) and the US leads on X (30% of impressions). LinkedIn followers cluster in Bengaluru, Kolkata, Delhi, Hyderabad, and the SF Bay Area.",
  "Most reach comes from new people: 93% of LinkedIn impressions are out-of-network, 96.5% of X impressions come from non-followers, and 94.8% of monthly YouTube viewers are new.",
];

const platforms: Platform[] = [
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: withUtmSource("https://ggl.link/arindam-youtube"),
    handle: "@Arindam_1729",
    period: "Last 90 days · Aug 1 – Oct 29, 2026",
    stats: [
      { label: "Subscribers", value: "2,741", note: "+417 in 90 days" },
      {
        label: "Views (90 days)",
        value: "50.6K",
        note: "13.8K in the last 28 days",
      },
      {
        label: "Watch hours (90 days)",
        value: "755",
        note: "206 in the last 28 days",
      },
      {
        label: "Monthly viewers",
        value: "6.8K",
        note: "Unique viewers, last 28 days",
      },
      { label: "Lifetime views", value: "210.6K", note: "Across 144 videos" },
      { label: "Lifetime watch hours", value: "4.8K", note: "Since Aug 2020" },
    ],
    audiencePeriod: "Share of views, last 90 days",
    breakdowns: [
      {
        title: "Age",
        basis: "Share of views",
        rows: [
          { label: "18–24", percent: 22.6 },
          { label: "25–34", percent: 47.3 },
          { label: "35–44", percent: 24.6 },
          { label: "45–54", percent: 4.9 },
        ],
      },
      {
        title: "Top countries",
        basis: "Share of views",
        rows: [
          { label: "India", percent: 43.3 },
          { label: "United States", percent: 9.7 },
          { label: "Germany", percent: 0.6 },
          { label: "Canada", percent: 0.5 },
        ],
      },
      {
        title: "Device",
        basis: "Share of watch time",
        rows: [
          { label: "Computer", percent: 64.6 },
          { label: "Mobile phone", percent: 30.5 },
          { label: "TV", percent: 2.9 },
          { label: "Tablet", percent: 1.9 },
        ],
      },
      {
        title: "Gender",
        basis: "Share of views",
        rows: [
          { label: "Male", percent: 98.5 },
          { label: "Female", percent: 1.5 },
        ],
      },
    ],
    highlights: [
      "Subscriber growth was 67% higher than the previous 90 days.",
      "94.8% of monthly viewers are new to the channel.",
    ],
    topTitle: "Top videos, lifetime",
    top: [
      {
        title: "How to use 100+ Open Source models on VS Code via HuggingFace",
        detail: "Oct 2025",
        metric: "20,183 views",
      },
      {
        title: "Why PayPal Bans US Accounts",
        detail: "May 2026",
        metric: "16,356 views",
      },
      {
        title: "MCP Explained in 10 Minutes (with Code Examples!)",
        detail: "Apr 2025",
        metric: "8,054 views",
      },
      {
        title: "AWS Strands Agents Crash Course: Build Your First Agent",
        detail: "Jul 2025",
        metric: "6,740 views",
      },
      {
        title: "Build your Personal AI CRM with Claude Code and Insforge",
        detail: "Feb 2026",
        metric: "5,067 views",
      },
    ],
  },
  {
    name: "X (Twitter)",
    icon: TwitterIcon,
    href: withUtmSource("https://dub.sh/arindam-x"),
    handle: "@Arindam_1729",
    period: "Last 4 weeks · Oct 3 – 30, 2026",
    stats: [
      { label: "Followers", value: "9,634", note: "1.4K verified" },
      { label: "Impressions", value: "1.7M", delta: "+1K%" },
      {
        label: "Engagements",
        value: "22.1K",
        note: "1.2% engagement rate",
      },
      { label: "Likes", value: "8.3K", note: "1K replies" },
      { label: "Bookmarks", value: "8K" },
      {
        label: "Reposts + shares",
        value: "3.1K",
        note: "1.5K profile visits",
      },
    ],
    audiencePeriod: "Share of impressions, last 28 days",
    breakdowns: [
      {
        title: "Age",
        basis: "Share of impressions",
        rows: [
          { label: "18–24", percent: 13.3 },
          { label: "25–34", percent: 37.3 },
          { label: "35–44", percent: 25.4 },
          { label: "45–54", percent: 12.2 },
          { label: "55+", percent: 10.5 },
        ],
      },
      {
        title: "Top countries",
        basis: "Share of impressions",
        rows: [
          { label: "United States", percent: 30.2 },
          { label: "India", percent: 8.7 },
          { label: "Japan", percent: 7.1 },
          { label: "Vietnam", percent: 5.5 },
          { label: "United Kingdom", percent: 3.6 },
        ],
      },
      {
        title: "Device",
        basis: "Share of impressions",
        rows: [
          { label: "iOS", percent: 50.8 },
          { label: "Web", percent: 28.1 },
          { label: "Android", percent: 21.1 },
        ],
      },
      {
        title: "Gender",
        basis: "Share of impressions",
        rows: [
          { label: "Male", percent: 81.0 },
          { label: "Female", percent: 11.0 },
          { label: "Not specified", percent: 8.0 },
        ],
      },
    ],
    highlights: [
      "96.5% of impressions come from people who don't follow the account yet.",
      "Last 3 months: 2M impressions and 26K engagements.",
    ],
    topTitle: "Top posts, last 4 weeks",
    top: [
      {
        title: "A Practical 5 Layer Setup for Faster & Safer Agentic Coding",
        detail: "Article · Oct 8",
        metric: "313K impressions",
      },
      {
        title: "Whoever leaked this Claude Code setup deserves a raise",
        detail: "Video post · Oct 9 · 1.1K likes",
        metric: "213K impressions",
      },
      {
        title: "Learn How to Build a Jev like Decision Models",
        detail: "Article · Oct 13",
        metric: "124K impressions",
      },
      {
        title: "Jev is getting a lot of attention right now",
        detail: "Video post · Oct 4 · 704 likes",
        metric: "120K impressions",
      },
    ],
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: withUtmSource("https://dub.sh/arindam-linkedin"),
    handle: "Arindam Majumder",
    period: "Monthly average · Sep 1 – Oct 30, 2026",
    stats: [
      { label: "Followers", value: "15,468", note: "+4,490 in 90 days" },
      { label: "Impressions / month", value: "580K", delta: "+307%" },
      { label: "Members reached / month", value: "243K" },
      {
        label: "Engagements / month",
        value: "9.7K",
        note: "Mostly saves and reactions",
      },
      { label: "Link clicks / month", value: "6.9K" },
      {
        label: "Out-of-network reach",
        value: "93%",
        note: "Of all impressions",
      },
    ],
    audiencePeriod: "Share of followers, last 90 days",
    breakdowns: [
      {
        title: "Job title",
        basis: "Share of followers",
        rows: [
          { label: "Software Engineer", percent: 13 },
          { label: "Founder", percent: 4 },
          { label: "AI Engineer", percent: 4 },
          { label: "Co-Founder", percent: 3 },
          { label: "Data Scientist", percent: 2 },
        ],
      },
      {
        title: "Seniority",
        basis: "Share of followers",
        rows: [
          { label: "Entry", percent: 31 },
          { label: "Senior", percent: 28 },
          { label: "Owner", percent: 4 },
          { label: "CXO", percent: 4 },
          { label: "Director", percent: 3 },
        ],
      },
      {
        title: "Industry",
        basis: "Share of followers",
        rows: [
          { label: "Software Development", percent: 27 },
          { label: "IT Services & Consulting", percent: 25 },
          { label: "Technology & Internet", percent: 14 },
          { label: "Higher Education", percent: 2 },
          { label: "Financial Services", percent: 2 },
        ],
      },
      {
        title: "Location",
        basis: "Share of followers",
        rows: [
          { label: "Greater Bengaluru", percent: 11 },
          { label: "Greater Kolkata", percent: 8 },
          { label: "Greater Delhi", percent: 6 },
          { label: "Greater Hyderabad", percent: 4 },
          { label: "SF Bay Area", percent: 4 },
        ],
      },
    ],
    highlights: [
      "Impressions grew 307% compared with the previous 60 days.",
      "19% of followers work at companies with 10,001+ employees.",
    ],
    topTitle: "Top posts, last 90 days",
    top: [
      {
        title: "Claude prompting techniques from a top engineering team",
        detail: "Video share · 4,131 engagements",
        metric: "234.4K impressions",
      },
      {
        title: "16 visual resources for learning Transformers and LLMs",
        detail: "Resource list · 7,314 engagements",
        metric: "219.1K impressions",
      },
      {
        title: "A free 12-hour CUDA and GPU programming course",
        detail: "Resource post · 5,081 engagements",
        metric: "112.3K impressions",
      },
    ],
  },
];

const rates: Offer[] = [
  {
    name: "Social post",
    icons: [TwitterIcon, LinkedInIcon],
    price: "$150",
    unit: "USD / post",
    description: "One original post, published on both X and LinkedIn.",
  },
  {
    name: "YouTube video",
    icons: [YoutubeIcon],
    price: "$1,000",
    unit: "USD / video",
    description:
      "A dedicated hands-on video with your link, a pinned comment, and two promo posts across X and LinkedIn.",
  },
  {
    name: "Instagram Reel",
    icons: [InstagramIcon],
    price: "$100",
    unit: "USD / Reel",
    description: "A short Reel showing a demo, use case, or feature highlight.",
  },
];

const bundles = [
  {
    name: "5 social posts",
    price: "$500",
    description: "Five original posts, each adapted for X and LinkedIn.",
  },
  {
    name: "5 Instagram Reels",
    price: "$350",
    description: "Five short Reels covering demos, use cases, or features.",
  },
  {
    name: "Complete package",
    price: "$1,500",
    description:
      "Five posts across X and LinkedIn, one dedicated YouTube video, and two dedicated Reels.",
  },
];

const emailHref =
  "mailto:arindammajumder2020@gmail.com?subject=Media%20kit%20inquiry";

function StatDelta({ delta }: { delta: string }) {
  const isNegative = delta.startsWith("-");
  return (
    <span
      className={
        isNegative
          ? "text-xs font-medium text-red-600 dark:text-red-400"
          : "text-xs font-medium text-emerald-600 dark:text-emerald-400"
      }
    >
      {delta}
    </span>
  );
}

function ShareBars({ breakdown }: { breakdown: Breakdown }) {
  const max = Math.max(...breakdown.rows.map((row) => row.percent));

  return (
    <div>
      <p className="text-sm font-medium">{breakdown.title}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {breakdown.basis}
      </p>
      <div className="mt-3 flex flex-col gap-2.5">
        {breakdown.rows.map((row) => (
          <div key={row.label} className="text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <span className="min-w-0 text-neutral-600 dark:text-neutral-400">
                {row.label}
              </span>
              <span className="shrink-0 tabular-nums text-neutral-600 dark:text-neutral-400">
                {row.percent}%
              </span>
            </div>
            <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <span
                className="block h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
                style={{ width: `${Math.max((row.percent / max) * 100, 3)}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MediaKitPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Media kit</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create hands-on tutorials, explainers, and build-alongs on LLMs,
          RAG, AI agents, and AI coding tools for developers and people building
          with AI. Here&apos;s who that content reaches and what it costs to
          partner on it.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {totals.map((total) => (
          <div
            key={total.label}
            className="border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <p className="text-2xl font-medium tracking-tight">{total.value}</p>
            <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              {total.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
        Monthly figures combine X for the last 4 weeks with the LinkedIn monthly
        average for Sep 1 – Oct 30, 2026.
      </p>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <h2>Who you reach</h2>
        <ul>
          {audienceHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <platform.icon />
                {platform.name}
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  {platform.handle}
                </span>
              </a>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {platform.period}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3">
              {platform.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-2xl font-medium tracking-tight">
                      {stat.value}
                    </span>
                    {stat.delta && <StatDelta delta={stat.delta} />}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                  {stat.note && (
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">
                      {stat.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-neutral-100 pt-5 dark:border-neutral-800">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Audience · {platform.audiencePeriod}
              </p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {platform.breakdowns.map((breakdown) => (
                  <ShareBars key={breakdown.title} breakdown={breakdown} />
                ))}
              </div>
              <ul className="mt-5 flex flex-col gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                {platform.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-neutral-100 pt-5 dark:border-neutral-800">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {platform.topTitle}
              </p>
              <ol className="mt-3 flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
                {platform.top.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col gap-1 py-2.5 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="min-w-0">
                      {item.title}
                      <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                        {item.detail}
                      </span>
                    </span>
                    <span className="shrink-0 tabular-nums text-neutral-600 dark:text-neutral-400">
                      {item.metric}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <h2>Rates</h2>
        <p>
          Every piece includes product research, an original angle, and content
          made for the platform where it appears.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {rates.map((rate) => (
          <article
            key={rate.name}
            className="flex flex-col border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <span className="flex shrink-0 items-center gap-1.5">
                {rate.icons.map((Icon, index) => (
                  <Icon key={index} />
                ))}
              </span>
              <h3 className="font-medium">{rate.name}</h3>
            </div>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-1 font-medium tracking-tight">
              <span className="text-3xl">{rate.price}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {rate.unit}
              </span>
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {rate.description}
            </p>
          </article>
        ))}
      </div>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <h2>Bundles</h2>
        <p>
          Bundles lower the cost per piece. Custom and recurring packages are
          also available, and you can see past partners on the{" "}
          <Link href="/collaborations" className="underline">
            collaborations page
          </Link>
          .
        </p>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-neutral-200 border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {bundles.map((bundle) => (
          <div
            key={bundle.name}
            className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <p className="font-medium">{bundle.name}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {bundle.description}
              </p>
            </div>
            <p className="shrink-0 text-xl font-medium tracking-tight">
              {bundle.price}{" "}
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                USD
              </span>
            </p>
          </div>
        ))}
      </div>

      <AudienceCompanies />

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <h2>Let&apos;s work together</h2>
        <p>
          Send me your product, preferred platforms, goals, and ideal timeline
          at{" "}
          <a href={emailHref} className="underline">
            arindammajumder2020@gmail.com
          </a>
          . Prices are in USD. Final scope, timeline, and pricing are confirmed
          before work begins.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Reach and audience figures come from YouTube Studio, X Analytics, and
          LinkedIn creator analytics. Last updated: October 30, 2026.
        </p>
      </div>
    </section>
  );
}
