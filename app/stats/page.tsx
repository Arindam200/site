import type { Metadata } from "next";
import { LinkedInIcon, TwitterIcon, YoutubeIcon } from "app/components/icons";
import { withUtmSource } from "app/utils/utm";

export const metadata: Metadata = {
  title: "Stats",
  description:
    "Content performance across the platforms Arindam Majumder creates on — LinkedIn, YouTube, X, and Instagram.",
};

type PlatformStat = {
  label: string;
  value: string;
  delta?: string;
};

type CountryShare = {
  country: string;
  percent: number;
};

type Platform = {
  name: string;
  icon: () => React.ReactNode;
  href: string;
  period: string;
  stats: PlatformStat[];
  topCountries?: CountryShare[];
};

const platforms: Platform[] = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: withUtmSource("https://dub.sh/arindam-linkedin"),
    period: "Last 30 days",
    stats: [
      { label: "Impressions", value: "347,599", delta: "+814%" },
      { label: "Members reached", value: "170,153" },
      { label: "Social engagements", value: "6,018" },
      { label: "Link engagements", value: "3,891" },
    ],
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: withUtmSource("https://ggl.link/arindam-youtube"),
    period: "Last 28 days",
    stats: [
      { label: "Views", value: "11,713" },
      { label: "Watch time (hours)", value: "202.1" },
      { label: "Subscribers", value: "+80" },
    ],
    topCountries: [
      { country: "India", percent: 32.0 },
      { country: "United States", percent: 14.2 },
      { country: "Indonesia", percent: 0.7 },
      { country: "Canada", percent: 0.3 },
      { country: "Germany", percent: 0.2 },
    ],
  },
  {
    name: "X (Twitter)",
    icon: TwitterIcon,
    href: withUtmSource("https://dub.sh/arindam-x"),
    period: "Last 28 days",
    stats: [
      { label: "Impressions", value: "218.4K", delta: "+17%" },
      { label: "Engagements", value: "2K", delta: "+33%" },
      { label: "Likes", value: "1.1K", delta: "+77%" },
      { label: "Profile visits", value: "440", delta: "+29%" },
    ],
  },
];

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

export default function StatsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Stats</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A running look at content performance across the platforms I create
          on.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {platforms.map((platform) => {
          const maxCountryPercent = platform.topCountries
            ? Math.max(...platform.topCountries.map((c) => c.percent))
            : 0;

          return (
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
                </a>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {platform.period}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                  </div>
                ))}
              </div>

              {platform.topCountries && (
                <div className="mt-6 border-t border-neutral-100 pt-5 dark:border-neutral-800">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Top countries
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    {platform.topCountries.map((c) => (
                      <div
                        key={c.country}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="w-28 shrink-0 text-neutral-600 dark:text-neutral-400">
                          {c.country}
                        </span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                          <span
                            className="block h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
                            style={{
                              width: `${Math.max(
                                (c.percent / maxCountryPercent) * 100,
                                3,
                              )}%`,
                            }}
                          />
                        </span>
                        <span className="w-12 shrink-0 text-right tabular-nums text-neutral-600 dark:text-neutral-400">
                          {c.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <p>
          Want to collaborate on content that reaches this audience? See the{" "}
          <a href="/collaborations" className="underline">
            collaborations page
          </a>
          .
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: September 13, 2026
        </p>
      </div>
    </section>
  );
}
