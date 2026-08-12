import weldingAsset from "@/assets/Picture68.jpg.asset.json";
import electricalAsset from "@/assets/Picture22.jpg.asset.json";
import ictAsset from "@/assets/Picture51.jpg.asset.json";
import cohortAsset from "@/assets/Picture75.jpg.asset.json";
import kitchenAsset from "@/assets/Picture74.jpg.asset.json";
import safetyAsset from "@/assets/Picture70.jpg.asset.json";
import panelAsset from "@/assets/Picture73.jpg.asset.json";

// Real BVC photography for the newsroom, keyed by story slug.
const BY_SLUG: Record<string, string> = {
  "learning-by-making": weldingAsset.url,
  "electrical-lab-expansion": electricalAsset.url,
  "ict-industry-partnership": ictAsset.url,
  "class-of-2026": cohortAsset.url,
  "women-in-trades": kitchenAsset.url,
  "safety-certification": safetyAsset.url,
};

const POOL = [weldingAsset.url, electricalAsset.url, ictAsset.url, panelAsset.url];

export function newsImage(slug: string, index = 0) {
  return BY_SLUG[slug] ?? POOL[index % POOL.length];
}
