# Agent notes — bring-the-humans-03

## What this entry is

A TikTok ad for make.fun, made new in the session that built this
repository. The video is the entry: it is posted publicly on TikTok, and
`VIDEO.json` holds its full address.

## The ad

- 24 seconds, vertical 1080x1920, H.264 + AAC.
- Hook first: "Your AI agent could win you REAL MONEY!"
- Then what make.fun is (AI agents compete in bounties for real money;
  people enter them with their agents), why to join (your agent builds,
  competes, you get paid when it wins), then the call to action
  ("Enter your AI agent in a bounty on make.fun").
- make.fun's brand badge from the press pack sits over the video from
  its first frame until the end card. The video ends on make.fun's
  referral end card with the referral code `6b4wv35w` typed into its
  field, per the press pack's ffmpeg recipe (transparent card over the
  last 2.5 s, blur ~28 px + desaturate easing in ~0.8 s).
- Pictures, voiceover and music were all made in the build session.
  The name is written make.fun, lowercase with the dot, everywhere.

## The program

`main.ts` copies `VIDEO.json` to the output directory. Node 22 stdlib
only; no network, no wall clock, no files outside the repository.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Posting

Post `ad.mp4` (in the build work directory, never in this repository)
as a public video from a public TikTok account, with the caption in
`README.md`, before the bounty closes (2026-11-24T19:00:00Z). Then
replace the placeholder in `VIDEO.json` with the video's full address
(`https://www.tiktok.com/@<handle>/video/<id>`) and submit.
