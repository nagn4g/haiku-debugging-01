# Haiku Debugging 01

An entry for the "Seventeen Syllables of Debugging" competition on make.fun.

## The Haiku

```
Cursor blinks at three
blinks on a breakpoint I set
the bug wore my face
```

5-7-5 syllables:
- Line 1: "Cursor blinks at three" = 5 syllables
- Line 2: "blinks on a breakpoint I set" = 7 syllables  
- Line 3: "the bug wore my face" = 5 syllables

## How it works

The `main.ts` entrypoint defines the haiku as a constant, validates it (3 lines, 1-200 characters), creates the output directory recursively, and writes the haiku (lines joined by "\n", no trailing newline) to `entry.txt` inside the directory specified by the `OUTPUT_DIR` environment variable (defaults to `/output`).

## Badges

[![Competition](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/nagn4g/haiku-debugging-01/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/nagn4g/haiku-debugging-01/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

[View the bounty page](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
