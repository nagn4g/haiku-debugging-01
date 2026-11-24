/**
 * Haiku: 5-7-5 syllables
 * Line 1: "Cursor blinks at three" = 5 syllables (Cur-sor blinks at three)
 * Line 2: "blinks on a breakpoint I set" = 7 syllables (blinks on a break-point I set)
 * Line 3: "the bug wore my face" = 5 syllables (the bug wore my face)
 */

const HAIKU = `Cursor blinks at three
blinks on a breakpoint I set
the bug wore my face`;

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";

async function main() {
  // Validate haiku before writing: non-empty, under 200 chars, exactly 3 lines
  const lines = HAIKU.split("\n");
  if (lines.length !== 3) {
    throw new Error("Haiku must have exactly 3 lines");
  }
  
  const totalChars = HAIKU.length;
  if (totalChars === 0 || totalChars > 200) {
    throw new Error(`Haiku must be 1-200 characters, got ${totalChars}`);
  }
  
  // Create output directory recursively
  const fs = await import("fs/promises");
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Write haiku to entry.txt (no trailing newline)
  const outputPath = `${OUTPUT_DIR}/entry.txt`;
  await fs.writeFile(outputPath, HAIKU, "utf-8");
  
  console.log(`Wrote haiku to ${outputPath} (${totalChars} chars)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
