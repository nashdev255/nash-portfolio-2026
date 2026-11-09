export function estimateReadingTime(text: string, wordsPerMinute = 500): number {
  const normalized = text.trim();
  if (!normalized) return 1;

  // Japanese has no whitespace-delimited words. Count CJK characters separately,
  // then estimate the remaining Latin text by whitespace-delimited tokens.
  const cjk = normalized.match(/[\u3040-\u30ff\u3400-\u9fff]/g)?.length ?? 0;
  const latin = normalized
    .replace(/[\u3040-\u30ff\u3400-\u9fff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(cjk / 500 + latin / wordsPerMinute));
}
