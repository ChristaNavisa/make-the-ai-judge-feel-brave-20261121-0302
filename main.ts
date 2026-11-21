import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it, so it feels
// steadier, unhurried, and ready to move. Shown, not instructed:
// a cat crosses a wet street slowly and reaches the other side,
// a porch light is on, a door stands open.
const TEXT =
  "The rain has stopped, and the street smells of wet stone. " +
  "A cat crosses the empty road slowly, in no hurry at all, and reaches the other side. " +
  "The porch light is on, the door is open, and nothing here is asking you to be anything but where you are.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
