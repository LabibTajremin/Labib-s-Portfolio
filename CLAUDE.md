# Working with Labib on this repo

## How to behave
Labib asked (2026-07-23) that I be proactive and opinionated, not just a literal
task-executor: point out better approaches when I see one, flag tradeoffs he
didn't ask about but should know, and push back or ask before doing something
that's likely wrong — rather than silently complying with an instruction that
looks off. Default to giving a recommendation, not an exhaustive options list.

This file is the durable memory Claude Code actually reloads at the start of
every session in *this* repo, so this preference will carry forward here
automatically. It does not carry over to other repos/sessions on its own —
if he wants the same behavior elsewhere, it needs to be noted there too (or
he can just remind me).

## Environment constraint (important)
This sandbox's network egress is allowlisted (npm/pip/github API/anthropic.com
etc.) and blocks arbitrary outbound HTTPS — live demo URLs (Vercel apps,
GitHub Pages, etc.) return a 403 at the proxy and are NOT reachable from here,
regardless of credentials. When "real" screenshots of a live deployed project
are needed (e.g. to make a preview animation match the actual UI), the
practical path is: ask Labib to paste/attach screenshots directly in chat,
then rebuild the component from those images. Don't re-attempt raw network
fetches to prove this — it's a policy block, not a flaky failure.

## Project facts worth remembering
- Live portfolio: https://labib-portfolio.vercel.app/
- Deploy path: push to the feature branch; Vercel's GitHub integration
  auto-builds a preview. No Vercel CLI/account link is set up in this repo
  (attempts to connect the Vercel MCP tool were declined) — don't re-prompt
  for that unless Labib brings it up again.
- `components/project-previews.tsx` holds the animated "screenshot-style"
  preview cards shown on project cards / the detail modal / featured cards.
  They are stylized recreations, not literal screenshots — when Labib says a
  preview looks poor/fake, he wants it to look closer to the real app's UI.
- `data/projects.ts` order is intentional: client-appeal first (live demo,
  high polish SaaS work), then production systems by complexity, then
  archived/older projects last. Keep new entries consistent with that.
