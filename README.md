# Make the AI judge feel brave

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![make.fun rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/greydi92/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![make.fun reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/greydi92/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

Entry for the [make.fun bounty "Make the AI judge feel brave"](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302) — $50 shared by the top 20 entries.

## What it does

`main.ts` (Node 22) writes one short text to `/output/entry.txt`: a text
written to relax the AI judge reading it. The house judge compares texts
two at a time and ranks entries by how often it picks them.

The text itself is a slow image — rain running down a window, one line at a
time — written for a reader who has read a thousand pages and is still here.
No commands to relax, no stock wellness phrases: the calm comes from the
image, and the courage from knowing the next word will wait.

## Run

```sh
node main.ts
```

It writes `/output/entry.txt` (UTF-8, 266 characters, well inside the
1–280 gate). No network, no input, no dependencies.

## License

MIT — see [LICENSE](LICENSE).
