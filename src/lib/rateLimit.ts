import { LRUCache } from "lru-cache";

const tokenCache = new LRUCache<string, number>({
  max: 500,
  ttl: 60 * 1000,
});

const LIMIT = 5;

export function isRateLimited(ip: string): boolean {
  const count = tokenCache.get(ip) ?? 0;
  if (count >= LIMIT) {
    return true;
  }
  tokenCache.set(ip, count + 1);
  return false;
}
