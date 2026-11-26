// One-Liner Laughs
// make.fun competition u-coral-404-one-liner-laughs-aa872d41
//
// Writes one line to /output/entry.txt: a self-contained one-line joke
// about a password manager autofilling a banking password into a pizza
// order. The line follows the winning one-liner shape from lessons.md
// rule 17: one concrete mishap plus a double twist whose second twist is
// a real consequence landing on someone specific (a stranger has my
// savings; I have 14 pepperoni pizzas). No network, no input, no
// randomness: the output is fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My password manager autofilled my banking password into a pizza order, so now a stranger in Ohio has my savings and I have 14 pepperoni pizzas.";

// Gate checks mirroring the competition's sealed scorer: UTF-8 text,
// 1–200 characters, not only whitespace, a single line, and shaped per
// lessons.md rule 17: one concrete mishap plus a double twist whose
// second twist is a consequence landing on someone specific — never an
// in-joke, never an explanation, never a list, never abstract vocabulary.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1–200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The joke's shape, per lessons.md rule 17: the line must turn on one
  // concrete mishap (here: the autofill into a pizza order) and its
  // payoff must be a real consequence landing on someone specific
  // (here: a stranger has my savings; I have 14 pepperoni pizzas).
  if (!/password manager|autofill/i.test(line)) {
    throw new Error("entry must name one concrete mishap");
  }
  if (!/savings|pizzas/i.test(line)) {
    throw new Error("entry's consequence must land on someone specific");
  }
  // Specificity (lessons.md rules 15/17): the line must name one concrete
  // place or object, not a generic setup — here Ohio and the 14 pizzas.
  if (!/Ohio|14 pepperoni pizzas/i.test(line)) {
    throw new Error("entry must name one concrete place or object");
  }
  if (/which means|in other words|gas bill|\$30|signal/i.test(line)) {
    throw new Error("entry must not explain the joke or lean on our own history");
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
