---
name: Skill Surge Notifier
slug: skill-surge-notifier
version: 0.1.0
author: "@gkauf_gm"
tags: [monitoring, clawhub, acceleration, meta]
---

# Skill Surge Notifier

Monitors ClawHub for skills gaining traction. Tracks download and star counts over time and alerts when a skill is surging.

A surge is triggered when any of these are true:
- Download growth >30% since last check
- Total downloads >50,000
- Stars >200
- A new skill appeared in the top 10

---

## Setup

```bash
npm install -g skill-surge-notifier
```

Requires Node.js.

---

## Commands

| Command | What it does |
|---|---|
| `skill-surge-notifier fetch` | Show top 20 skills by downloads |
| `skill-surge-notifier check` | Run surge detection, top movers, and update state |
| `skill-surge-notifier status` | Last check, thresholds, notification status |
| `skill-surge-notifier profile` | Show current agent profile |
| `skill-surge-notifier profile set "description" "kw1,kw2"` | Set profile for relevance scoring |
| `skill-surge-notifier config movers=5` | Set number of top movers shown |
| `skill-surge-notifier config movers-off` | Disable top movers |
| `skill-surge-notifier config growth=30 downloads=50000 stars=200` | Update surge thresholds |

Every `check` run always shows top N movers (by download delta) regardless of thresholds, so there's always something to look at.

When a profile is set, surges are scored 0-10 for relevance and sorted accordingly — most relevant first.

---

## Notes

- State is stored in `~/.skill-surge-notifier/state.json`. The first run seeds the baseline; growth % appears from the second run onward.
- To run automatically, add to crontab (`crontab -e`):

```bash
0 */4 * * * skill-surge-notifier check >> ~/.skill-surge-notifier/surge.log 2>&1
```
