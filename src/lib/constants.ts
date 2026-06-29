export const BRAND = {
  name: "CLUB UNDEFINED",
  tagline: "Calm focus for high-pressure lives.",
  subTagline: "Low stimulation. Stable energy.",
  description:
    "Low-caffeine freeze-dried coffee with L-theanine and Lion's Mane. Designed for those who want clarity without the chaos.",
} as const;

export const NAV_ITEMS = [
  { label: "Join", href: "#waitlist" },
] as const;

export const PROBLEMS = [
  {
    title: "Overstimulation",
    description:
      "Constant inputs. Endless notifications. A nervous system that never settles into rest.",
  },
  {
    title: "The Crash Cycle",
    description:
      "Caffeine spikes. Brief clarity. Then the trough. Rinse. Repeat. It doesn't have to be this way.",
  },
  {
    title: "Mental Noise",
    description:
      "The background hum that won't quiet. Focus feels borrowed, never owned.",
  },
] as const;

export const INGREDIENTS = [
  {
    name: "Low-Caf Coffee",
    benefit: "Smooth, steady energy.",
    detail:
      "Freeze-dried to preserve clarity of flavor. Enough caffeine to focus, not enough to fracture your attention.",
  },
  {
    name: "L-Theanine",
    benefit: "Calm alertness.",
    detail:
      "An amino acid found in green tea. Promotes a state of relaxed focus — present but not pressed.",
  },
  {
    name: "Lion's Mane",
    benefit: "Cognitive clarity.",
    detail:
      "A nootropic mushroom with a long history. Supports nerve health and quiet, sustained concentration.",
  },
] as const;

export const PRODUCT = {
  name: "Daily Clarity",
  description:
    "Matte black sachets. Single-serve precision. Designed to disappear into your routine.",
} as const;

export const WAITLIST = {
  heading: "Early access.",
  description:
    "We are preparing something deliberate. Be the first to know when it is ready.",
  emailPlaceholder: "Email address (optional)",
  phonePlaceholder: "Phone (optional)",
  wechatPlaceholder: "WeChat ID",
  button: "Join early access",
  success: "Thank you. We will be in touch.",
  disclaimer: "No spam. No noise. Just an update when it is time.",
} as const;

export const FOOTER = {
  text: "CLUB UNDEFINED",
} as const;
