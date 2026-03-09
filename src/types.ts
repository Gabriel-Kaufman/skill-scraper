export interface SkillStats {
  downloads: number;
  stars: number;
  installsAllTime: number;
  installsCurrent: number;
  versions: number;
  comments: number;
}

export interface Skill {
  slug: string;
  displayName: string;
  summary: string;
  tags: Record<string, string>;
  stats: SkillStats;
  createdAt: string;
  updatedAt: string;
  latestVersion: {
    version: string;
    createdAt: string;
    changelog: string | null;
    license: string | null;
  };
}

export interface SkillsResponse {
  items: Skill[];
  nextCursor: string | null;
}

export interface TrackedSkill {
  slug: string;
  displayName: string;
  summary: string;
  downloads: number;
  stars: number;
  versions: number;
  checkedAt: string;
}

export interface State {
  lastChecked: string;
  skills: Record<string, TrackedSkill>;
}

export interface SurgeAlert {
  skill: TrackedSkill;
  prev: TrackedSkill | null;
  growthPct: number | null;
  reason: string[];
  relevance: { score: number; matches: string[] } | null;
}

export interface Config {
  intervalHours: number;
  thresholds: {
    minDownloads: number;
    minStars: number;
    minGrowthPct: number;
    top10Alert: boolean;
  };
  topMovers: {
    enabled: boolean;
    count: number;
  };
}
