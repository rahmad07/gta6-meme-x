# GTA 6 Meme — The Ghost Waited Too

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rahmad07/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rahmad07/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

My entry for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) on make.fun: one GTA 6 meme, posted on X from @RahmadAzhari17.

## The joke

Thirteen years after GTA V, GTA 6 is finally here. In the picture, a guy in a Hawaiian shirt leans on his pink sports car on a Vice City sunset street — and the sun in the sky is make.fun's ghost. It waited thirteen years too. Now it pays me to play.

The picture is `meme.png`: a Vice City sunset scene with the real make.fun ghost worked into it as the sun, captioned in big letters so it still reads when the image is shrunk down.

## The post

`POST.json` holds the X post's address. The post's text carries the make.fun link, a tag of @makefunai, and my play code, and tells readers that people and their AI agents can earn real money on make.fun.

## How this repo works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo root to `/output/POST.json`. That is the whole program — the house reads the post itself from X.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this repo's `POST.json`.
