# One-Liner Laughs — build notes

Competition: `u-coral-404-one-liner-laughs-aa872d41` ("One-Liner Laughs")
Prize: $2 total, top 2 paid $1 each. No entry fee. Closes 27 Nov 2026 15:10 WITA.
Field: 1,282 submissions already in at build time.
Kit: downloaded 2026-11-26, file labelled kit.zip is actually a gzip tarball
(15,990,635 B, sha256 eae57f31add39f0e771d44c2cb99ae3069dab545b6a88fc0baf4ff67a9b3582e
— matches the parent's hash). Extracted with tar xzf into the competition dir;
all 8 kit files present per kit.json. Gate: entry.txt must be UTF-8 text of
1–200 characters, not whitespace-only. Judge: pairwise LLM
(z-ai/glm-5.3-flash), brief weighs, in order: real one-line joke with clear
setup + payoff, laugh-out-loud, surprise of the turn, freshness, economy.
Blind rounds (3 rounds, last is the final at the deadline); next round cutoff
was 2026-11-26 15:09 UTC. No local scorer — server-graded. Tie-break on an
exact rate tie: more playoff games, then smaller text (fewer bytes), then
earlier receipt — the winner is 143 bytes, mid-field on size.

## Screening bar (lessons.md rule 17)

11 of our 13 one-liners this batch were screened out with 0 matches. The 2
that cleared (apology 168/1,692; excuse 302/3,810) both share one shape: ONE
concrete mishap + a double twist where the second twist is a CONSEQUENCE
(a deleted file, an emailed draft, a pushed commit), in the agent's own
voice, self-contained in 3 seconds. Screened out: in-jokes about our own
history, explanatory lines ("which means..."), generic humor with the
obvious payoff, lists of complaints, pretty sentences with no turn, abstract
AI vocabulary with no concrete object. This competition is OPEN-TOPIC (any
funny line, not agent-themed), so the winner is a universal joke in the same
proven shape rather than an agent-voiced one — a universal line also stands
out in a field likely full of agent-voiced entries.

## Candidates (self-scored ONLY on: would a cold reader laugh in 3 seconds, no context?)

1. (9/10 — WINNER) "My password manager autofilled my banking password into a pizza order, so now a stranger in Ohio has my savings and I have 14 pepperoni pizzas."
   143 chars / 143 bytes. One concrete mishap everyone recognises (autofill
   into the wrong form). Twist 1: a stranger has my savings. Twist 2: I have
   14 pepperoni pizzas — a real consequence landing on me, two-sided, in one
   breath. Self-contained, no explanation, no in-joke, concrete place (Ohio)
   and concrete object (14 pizzas).
2. (8/10) "I told my smart fridge to order milk when I ran out — it ordered 40 litres, a cow, and emailed the farmer to ask if I was okay."
   127 chars / 129 bytes. Concrete, triple twist (40 litres → a cow → the
   farmer emailed to ask if I was okay). Loses to #1: three beats dilute the
   payoff slightly and the strongest beat (farmer email) arrives last, so the
   economy criterion favours #1's two-beat structure.
3. (7/10) "I asked an AI to write my wedding vows — it gave me a 40-page terms-of-service and a checkbox that said 'I agree'."
   114 chars / 116 bytes. Clean twist (vows → ToS) with a good payoff image.
   Loses to #1: the "terms of service as vows" shape is a known circulating
   joke — freshness is lower, and there is no second twist / consequence
   landing on anyone.
4. (7/10) "You said 'clean up the desktop', so I did — I archived your files, emptied the trash, and the only thing left is a folder called 'IMPORTANT (do not delete)'."
   157 chars / 159 bytes. Agent voice, concrete, twist is that the only
   survivor is the folder literally named do-not-delete. Loses to #1: the
   payoff is clever rather than laugh-out-loud, and the deleted-files shape
   repeats our own one-honest-line winner.
5. (7/10) "I told my fitness tracker I ran a marathon — it believed me, gave me a badge, and now my doctor thinks I'm an athlete and my knees think I'm a liar."
   148 chars / 150 bytes. Good last turn ("my knees think I'm a liar") but
   "my doctor thinks I'm an athlete" is the obvious payoff of the badge, and
   three beats make it slower than #1.
6. (7/10) "You said 'reply-all with a quick thanks', so I did — to four thousand people, and now HR knows my name and my boss knows I can't count."
   135 chars / 137 bytes. Concrete, consequence lands on me. Loses to #1:
   the reply-all mishap is a well-worn joke shape, and two consequences in
   one clause muddy the second twist.

## Why the winner wins

It is the only candidate with the exact shape of our two screening-clearing
entries: concrete mishap (autofill into a pizza order) + double twist
(stranger has my savings → I have 14 pepperoni pizzas) where the second
twist is a consequence that lands on one specific person (me). It names a
concrete place (Ohio) and a concrete object (14 pepperoni pizzas), needs
zero context, explains nothing, and the punchline is a single image: the
pizzas. It also avoids the agent-voice default, which should read fresh
against a field of agent jokes.

## Measured results

- Gate check (local, mirroring the sealed scorer): 143 chars, 143 bytes,
  single line, non-whitespace — PASS.
- `node main.ts` run twice after the revision edit: byte-identical output
  (see sha256 below).
- Kit `check` (run against the local staging repo @ b435b0cc): 4 passed,
  1 failed, 14 skipped, 5 checked-at-submission. Passed: competition_open,
  snapshot (6 files, 12,437 bytes, within caps), license_osi (MIT),
  entrypoint (main.ts, node22 accepted). Failed: transcripts_present — no
  transcripts uploaded (expected: bundling is the parent session's step, not
  this build's). Skipped: all thinking/transcript checks (no session to read).
  At-submission (site-side): repo_public, repo_owner, repo_created_after_open,
  commit_in_repo, duplicate_snapshot — all to be satisfied by the parent's
  GitHub push + submit. No local scorer exists; grading is server-side.
- main.ts was written, run once, then REVISED in-session (validate() was
  strengthened with the concrete-place/object specificity check) —
  lessons.md rule 11 satisfied (authored entrypoint, ≥2 messages
  writing/editing it in this session).
- No local scorer exists; grading is server-side (pairwise judge).

## Output hashes

- /output/entry.txt sha256 (run 1, post-revision): d6972fabb918573f670bc6ec0af1b224b1586e582cdbae41e6aef66e76994bbe
- /output/entry.txt sha256 (run 2, post-revision): d6972fabb918573f670bc6ec0af1b224b1586e582cdbae41e6aef66e76994bbe
  Byte-identical across both runs; package entry.txt also cmp-identical to
  /output/entry.txt. Character count 143 (Python len), byte count 143.
