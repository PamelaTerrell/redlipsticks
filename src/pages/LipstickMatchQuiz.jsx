import { useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

const questions = [
  {
    id: "veins",
    question:
      "When you look at the veins on your wrist in natural light, what do they usually look like?",
    options: [
      {
        label: "Mostly blue or purple",
        effects: { undertoneCool: 3, smileBrightening: 1 },
      },
      {
        label: "Mostly green or olive",
        effects: { undertoneWarm: 3 },
      },
      {
        label: "A mix, or hard to tell",
        effects: { undertoneNeutral: 3, softPreference: 1 },
      },
    ],
  },
  {
    id: "white-ivory",
    question:
      "Which tends to flatter your skin more: crisp white or creamy ivory?",
    options: [
      {
        label: "Crisp white",
        effects: { undertoneCool: 3, highContrast: 1 },
      },
      {
        label: "Creamy ivory",
        effects: { undertoneWarm: 3, softPreference: 1 },
      },
      {
        label: "Both can work pretty well",
        effects: { undertoneNeutral: 3, balancedPreference: 1 },
      },
    ],
  },
  {
    id: "jewelry",
    question: "Which jewelry usually looks best on you?",
    options: [
      {
        label: "Silver, white gold, or platinum",
        effects: { undertoneCool: 3, elegantClassic: 1 },
      },
      {
        label: "Yellow gold, bronze, or copper",
        effects: { undertoneWarm: 3, boldWarmth: 1 },
      },
      {
        label: "Both gold and silver can look good",
        effects: { undertoneNeutral: 3, balancedPreference: 1 },
      },
    ],
  },
  {
    id: "sun-reaction",
    question: "How does your skin usually react to sun exposure?",
    options: [
      {
        label: "I tend to burn first and tan slowly",
        effects: { undertoneCool: 2, fairLightDepth: 1 },
      },
      {
        label: "I tan fairly easily",
        effects: { undertoneWarm: 2, mediumDeepDepth: 1 },
      },
      {
        label: "It depends / a bit of both",
        effects: { undertoneNeutral: 2 },
      },
    ],
  },
  {
    id: "depth",
    question: "Which description feels closest to your overall coloring depth?",
    options: [
      {
        label: "Fair to light",
        effects: { fairLightDepth: 3, softPreference: 1 },
      },
      {
        label: "Light-medium to medium",
        effects: { mediumDepth: 3, balancedPreference: 1 },
      },
      {
        label: "Tan to deep",
        effects: { mediumDeepDepth: 2, deepDepth: 2, boldWarmth: 1 },
      },
      {
        label: "Rich deep",
        effects: { deepDepth: 4, boldStatement: 2 },
      },
    ],
  },
  {
    id: "contrast",
    question:
      "How much natural contrast do you have between your skin, hair, brows, and eyes?",
    options: [
      {
        label: "Soft contrast",
        effects: { softContrast: 3, softPreference: 2 },
      },
      {
        label: "Medium contrast",
        effects: { mediumContrast: 3, balancedPreference: 2 },
      },
      {
        label: "High contrast",
        effects: { highContrast: 3, boldStatement: 2, elegantClassic: 1 },
      },
    ],
  },
  {
    id: "clothing-colors",
    question: "Which clothing colors usually make you look most alive?",
    options: [
      {
        label: "Berry, navy, emerald, icy pink, charcoal",
        effects: { undertoneCool: 2, elegantClassic: 1, smileBrightening: 1 },
      },
      {
        label: "Camel, olive, coral, terracotta, chocolate",
        effects: { undertoneWarm: 2, boldWarmth: 1 },
      },
      {
        label: "Taupe, rose, soft white, teal, mushroom",
        effects: { undertoneNeutral: 2, balancedPreference: 2 },
      },
    ],
  },
  {
    id: "red-family",
    question: "Which red lipstick family feels most naturally like you?",
    options: [
      {
        label: "Blue-red, cherry, cranberry, berry-red",
        effects: { undertoneCool: 2, smileBrightening: 2, elegantClassic: 1 },
      },
      {
        label: "Orange-red, brick, terracotta, rust",
        effects: { undertoneWarm: 2, boldWarmth: 2 },
      },
      {
        label: "True red, softened red, balanced red",
        effects: { undertoneNeutral: 2, balancedPreference: 2 },
      },
    ],
  },
  {
    id: "finish",
    question: "Which lipstick finish do you usually prefer?",
    options: [
      {
        label: "Satin",
        effects: { satinFinish: 3, elegantClassic: 1 },
      },
      {
        label: "Cream",
        effects: { creamFinish: 3, softPreference: 1 },
      },
      {
        label: "Matte",
        effects: { matteFinish: 3, boldStatement: 1 },
      },
      {
        label: "Gloss or shine",
        effects: { glossFinish: 3, softPreference: 1, boldWarmth: 1 },
      },
    ],
  },
  {
    id: "style",
    question: "Which style mood sounds most like you?",
    options: [
      {
        label: "Timeless, refined, elegant",
        effects: { elegantClassic: 3, satinFinish: 1 },
      },
      {
        label: "Soft, feminine, understated",
        effects: { softPreference: 3, creamFinish: 1 },
      },
      {
        label: "Warm, glowy, expressive",
        effects: { boldWarmth: 3, glossFinish: 1 },
      },
      {
        label: "Bold, polished, statement-making",
        effects: { boldStatement: 3, matteFinish: 1, highContrast: 1 },
      },
    ],
  },
  {
    id: "priority",
    question: "What do you most want your red lipstick to do for you?",
    options: [
      {
        label: "Make my smile look brighter",
        effects: { smileBrightening: 4, undertoneCool: 1 },
      },
      {
        label: "Feel easy and flattering for everyday",
        effects: { softPreference: 3, creamFinish: 1, balancedPreference: 1 },
      },
      {
        label: "Look polished and elevated",
        effects: { elegantClassic: 3, satinFinish: 1 },
      },
      {
        label: "Make a statement",
        effects: { boldStatement: 3, matteFinish: 1, highContrast: 1 },
      },
    ],
  },
  {
    id: "comfort",
    question: "How do you want the red to feel on the face overall?",
    options: [
      {
        label: "Smooth, graceful, and wearable",
        effects: { softPreference: 2, creamFinish: 1, satinFinish: 1 },
      },
      {
        label: "Classic and polished",
        effects: { elegantClassic: 2, satinFinish: 2 },
      },
      {
        label: "Bold and dramatic",
        effects: { boldStatement: 2, matteFinish: 1, highContrast: 1 },
      },
      {
        label: "Warm, lively, and glowing",
        effects: { boldWarmth: 2, glossFinish: 1, undertoneWarm: 1 },
      },
    ],
  },
];

const productLibrary = {
  classicCool: [
    {
      name: "MAC Ruby Woo",
      note: "A vivid blue-red matte with a classic smile-brightening effect.",
      tier: "Prestige",
      retailer: "MAC",
      link: "https://www.maccosmetics.com/product/13854/52593/products/makeup/lips/lipstick/retro-matte-lipstick",
    },
    {
      name: "NARS Dragon Girl",
      note: "A cool bright red with lively contrast and strong visual clarity.",
      tier: "Prestige",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/powermatte-lipstick-dragon-girl-0-8-gr-P508342",
    },
    {
      name: "Dior Rouge Dior 999",
      note: "A polished classic red if you want something refined and iconic.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
  ],
  warmRadiant: [
    {
      name: "Dior Rouge Dior 999",
      note: "A rich classic red that can feel luminous and vibrant on warmer coloring.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
    {
      name: "Maybelline SuperStay Matte Ink in Pioneer",
      note: "A strong statement red with warmth and long wear.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/superstay-matte-ink-liquid-lipstick-xlsImpprod16211185?pr_rd_page=3&sku=2537824",
    },
    {
      name: "L'Oréal Colour Riche True Red",
      note: "A creamy classic option with a softer, wearable finish.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/colour-riche-original-satin-lipstick-2681?sku=2117582",
    },
  ],
  balancedSignature: [
    {
      name: "Dior Rouge Dior 999",
      note: "A balanced iconic red that works beautifully as a signature shade.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
    {
      name: "Revlon Cherries in the Snow",
      note: "A classic berry-red that often suits balanced coloring especially well.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/super-lustrous-lipstick-xlsImpprod2940211?sku=1741444",
    },
    {
      name: "L'Oréal Colour Riche True Red",
      note: "A softer satin red for polished everyday flexibility.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/colour-riche-original-satin-lipstick-2681?sku=2117582",
    },
  ],
  softEveryday: [
    {
      name: "L'Oréal Colour Riche True Red",
      note: "A creamy satin option that feels easier and more forgiving.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/colour-riche-original-satin-lipstick-2681?sku=2117582",
    },
    {
      name: "Revlon Cherries in the Snow",
      note: "A softer berry-leaning classic with vintage polish.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/super-lustrous-lipstick-xlsImpprod2940211?sku=1741444",
    },
    {
      name: "Dior Rouge Dior 999",
      note: "A more elevated option when you want a refined, polished finish.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
  ],
  boldRadiant: [
    {
      name: "Maybelline SuperStay Matte Ink in Pioneer",
      note: "A high-impact red with strong wear and presence.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/superstay-matte-ink-liquid-lipstick-xlsImpprod16211185?pr_rd_page=3&sku=2537824",
    },
    {
      name: "MAC Ruby Woo",
      note: "A statement red if you want strong glamour and edge.",
      tier: "Prestige",
      retailer: "MAC",
      link: "https://www.maccosmetics.com/product/13854/52593/products/makeup/lips/lipstick/retro-matte-lipstick",
    },
    {
      name: "Dior Rouge Dior 999",
      note: "A bold but still luxurious classic choice.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
  ],
};

const resultPalettes = {
  classicCool: [
    { name: "Blue-Red", hex: "#A61E32" },
    { name: "Cherry", hex: "#B3263E" },
    { name: "Cranberry", hex: "#8E2F4F" },
    { name: "Berry", hex: "#8A3D5E" },
    { name: "Charcoal", hex: "#4A4E57" },
    { name: "True White", hex: "#F8F8F6" },
  ],
  warmRadiant: [
    { name: "Brick", hex: "#9E3D2E" },
    { name: "Terracotta", hex: "#B85C38" },
    { name: "Tomato Red", hex: "#C63D2F" },
    { name: "Coral", hex: "#D96C5F" },
    { name: "Camel", hex: "#B88A5A" },
    { name: "Cream", hex: "#F2E2C9" },
  ],
  balancedSignature: [
    { name: "True Red", hex: "#B0303C" },
    { name: "Soft Berry", hex: "#9A4F63" },
    { name: "Dusty Rose", hex: "#B67C86" },
    { name: "Taupe", hex: "#9A8577" },
    { name: "Soft White", hex: "#F5F1EA" },
    { name: "Teal", hex: "#3D6F73" },
  ],
  softEveryday: [
    { name: "Rose-Red", hex: "#B45A68" },
    { name: "Soft Red", hex: "#B6494E" },
    { name: "Muted Berry", hex: "#8C5668" },
    { name: "Mushroom", hex: "#9C8B84" },
    { name: "Soft Ivory", hex: "#F4EBDD" },
    { name: "Satin Taupe", hex: "#A89286" },
  ],
  boldRadiant: [
    { name: "Vivid Red", hex: "#B6202E" },
    { name: "Orange-Red", hex: "#C7442C" },
    { name: "Rust", hex: "#A14D33" },
    { name: "Brick", hex: "#8F3A2D" },
    { name: "Espresso", hex: "#5A392E" },
    { name: "Gold", hex: "#C8A25A" },
  ],
};

function getAxisTotals(answers) {
  const totals = {
    undertoneCool: 0,
    undertoneWarm: 0,
    undertoneNeutral: 0,
    fairLightDepth: 0,
    mediumDepth: 0,
    mediumDeepDepth: 0,
    deepDepth: 0,
    softContrast: 0,
    mediumContrast: 0,
    highContrast: 0,
    satinFinish: 0,
    creamFinish: 0,
    matteFinish: 0,
    glossFinish: 0,
    elegantClassic: 0,
    softPreference: 0,
    boldWarmth: 0,
    boldStatement: 0,
    balancedPreference: 0,
    smileBrightening: 0,
  };

  questions.forEach((question) => {
    const selectedIndex = answers[question.id];
    if (selectedIndex == null) return;

    const option = question.options[selectedIndex];
    Object.entries(option.effects).forEach(([key, value]) => {
      totals[key] += value;
    });
  });

  return totals;
}

function pickUndertone(totals) {
  const entries = [
    ["cool", totals.undertoneCool],
    ["warm", totals.undertoneWarm],
    ["neutral", totals.undertoneNeutral],
  ].sort((a, b) => b[1] - a[1]);

  return entries[0][0];
}

function pickDepth(totals) {
  const entries = [
    ["fair-light", totals.fairLightDepth],
    ["medium", totals.mediumDepth],
    ["medium-deep", totals.mediumDeepDepth],
    ["deep", totals.deepDepth],
  ].sort((a, b) => b[1] - a[1]);

  return entries[0][0];
}

function pickContrast(totals) {
  const entries = [
    ["soft", totals.softContrast],
    ["medium", totals.mediumContrast],
    ["high", totals.highContrast],
  ].sort((a, b) => b[1] - a[1]);

  return entries[0][0];
}

function pickFinish(totals) {
  const entries = [
    ["satin", totals.satinFinish],
    ["cream", totals.creamFinish],
    ["matte", totals.matteFinish],
    ["gloss", totals.glossFinish],
  ].sort((a, b) => b[1] - a[1]);

  return entries[0][0];
}

function pickPrimaryStyle(totals) {
  const entries = [
    ["elegantClassic", totals.elegantClassic],
    ["softPreference", totals.softPreference],
    ["boldWarmth", totals.boldWarmth],
    ["boldStatement", totals.boldStatement],
    ["balancedPreference", totals.balancedPreference],
  ].sort((a, b) => b[1] - a[1]);

  return entries[0][0];
}

function determineProfile(totals) {
  const undertone = pickUndertone(totals);
  const depth = pickDepth(totals);
  const contrast = pickContrast(totals);
  const finish = pickFinish(totals);
  const style = pickPrimaryStyle(totals);
  const smilePriority = totals.smileBrightening >= 4;

  if (
    undertone === "cool" &&
    (style === "elegantClassic" || smilePriority || contrast === "high")
  ) {
    return "classicCool";
  }

  if (
    undertone === "warm" &&
    (style === "boldWarmth" || style === "boldStatement" || depth !== "fair-light")
  ) {
    return "warmRadiant";
  }

  if (
    undertone === "neutral" &&
    (style === "balancedPreference" || contrast === "medium")
  ) {
    return "balancedSignature";
  }

  if (
    style === "softPreference" ||
    finish === "cream" ||
    contrast === "soft"
  ) {
    return "softEveryday";
  }

  if (style === "boldStatement" || contrast === "high") {
    return "boldRadiant";
  }

  if (undertone === "warm") return "warmRadiant";
  if (undertone === "cool") return "classicCool";
  return "balancedSignature";
}

function buildWhyThisFits({ undertone, depth, contrast, finish }) {
  const undertoneText =
    undertone === "cool"
      ? "cooler undertone clues"
      : undertone === "warm"
      ? "warmer undertone clues"
      : "more balanced undertone clues";

  const depthText =
    depth === "fair-light"
      ? "lighter overall coloring"
      : depth === "medium"
      ? "medium-depth coloring"
      : depth === "medium-deep"
      ? "medium-to-deeper coloring"
      : "deeper overall coloring";

  const contrastText =
    contrast === "soft"
      ? "softer natural contrast"
      : contrast === "medium"
      ? "moderate natural contrast"
      : "higher natural contrast";

  const finishText =
    finish === "satin"
      ? "a preference for satin finishes"
      : finish === "cream"
      ? "a preference for creamier finishes"
      : finish === "matte"
      ? "a preference for more defined matte finishes"
      : "a preference for glossier, livelier finishes";

  return `Your answers suggest ${undertoneText}, ${depthText}, ${contrastText}, and ${finishText}. Together, those clues point toward this red direction as a strong place to begin exploring.`;
}

function buildProfile(profileKey, totals) {
  const undertone = pickUndertone(totals);
  const depth = pickDepth(totals);
  const contrast = pickContrast(totals);
  const finish = pickFinish(totals);

  const base = {
    classicCool: {
      title: "Polished Cool Reds",
      subtitle:
        "Your most flattering direction likely leans cooler, clearer, and more refined.",
      description:
        "Based on your answers, you may look especially strong in reds with blue-based, cherry, or cranberry influence rather than orange-heavy warmth. This does not guarantee a single perfect shade, but it gives you a highly promising direction to start from.",
      shadeFamilies: ["Blue-red", "Cherry red", "Cranberry", "Berry-red"],
      pageLinks: [
        { label: "Cool Skin Tone Guide", to: "/cool-skin-tone-colors" },
        {
          label: "Red Lipsticks That Make Teeth Look Whiter",
          to: "/red-lipsticks-that-make-teeth-look-whiter",
        },
        { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
      ],
    },
    warmRadiant: {
      title: "Warm Radiant Reds",
      subtitle:
        "Your strongest direction likely leans warm, rich, and glowing.",
      description:
        "Your answers suggest that reds with warmth, richness, and radiance may feel especially flattering. Brick reds, terracotta-leaning reds, and richer warm classics are likely worth exploring before cooler, blue-heavy reds.",
      shadeFamilies: ["Brick red", "Orange-red", "Terracotta red", "Warm classic red"],
      pageLinks: [
        { label: "Warm Skin Tone Guide", to: "/warm-skin-tone-colors" },
        { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
        { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
      ],
    },
    balancedSignature: {
      title: "Balanced Signature Reds",
      subtitle:
        "Your best direction is likely elegant, flexible, and not too extreme.",
      description:
        "Your answers suggest you may wear both warm and cool influence fairly well, but your strongest reds likely feel balanced rather than highly icy or strongly orange. True reds, softened berry reds, and classic satin reds may be especially promising.",
      shadeFamilies: ["True red", "Balanced red", "Soft berry red", "Classic red"],
      pageLinks: [
        { label: "Neutral Skin Tone Guide", to: "/neutral-skin-tone-colors" },
        { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
        { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
      ],
    },
    softEveryday: {
      title: "Soft Everyday Reds",
      subtitle:
        "Your most flattering direction may be polished, wearable, and quietly refined.",
      description:
        "Your answers suggest you may prefer reds that feel easier, softer, and more graceful on the face rather than extremely sharp statement reds. Creamier finishes, satin textures, and softened red families may suit you especially well.",
      shadeFamilies: ["Soft true red", "Rose-red", "Gentle berry red", "Satin red"],
      pageLinks: [
        { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
        { label: "Neutral Skin Tone Guide", to: "/neutral-skin-tone-colors" },
        {
          label: "Red Lipsticks That Make Teeth Look Whiter",
          to: "/red-lipsticks-that-make-teeth-look-whiter",
        },
      ],
    },
    boldRadiant: {
      title: "Bold Statement Reds",
      subtitle:
        "Your strongest direction may be richer, stronger, and more dramatic.",
      description:
        "Your answers suggest you may carry statement reds especially well, particularly when the shade has enough richness or clarity to stand up to your natural presence. High-impact classics, richer reds, and stronger finishes are likely worth testing.",
      shadeFamilies: ["Statement red", "Rich classic red", "Bold cherry red", "Deep vivid red"],
      pageLinks: [
        { label: "Warm Skin Tone Guide", to: "/warm-skin-tone-colors" },
        { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
        { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
      ],
    },
  }[profileKey];

  return {
    ...base,
    undertone,
    depth,
    contrast,
    finish,
    products: productLibrary[profileKey],
    palette: resultPalettes[profileKey],
    whyThisFits: buildWhyThisFits({ undertone, depth, contrast, finish }),
  };
}

export default function LipstickMatchQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef(null);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

  const result = useMemo(() => {
    if (!submitted || !isComplete) return null;
    const totals = getAxisTotals(answers);
    const profileKey = determineProfile(totals);
    return buildProfile(profileKey, totals);
  }, [answers, submitted, isComplete]);

  function handleSelect(questionId, optionIndex) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isComplete) return;

    setSubmitted(true);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 120);
  }

  function handleRetake() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <PageLayout bgClassName="bg-[#faf7f2] text-[#2d1e1e]">
      <section className="relative overflow-hidden border-b border-[#ead9d2] bg-gradient-to-b from-[#fffdf9] via-[#faf7f2] to-[#f8f0eb]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-[#d8b3b3]/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-[#c7a76c]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-20">
          <Link
            to="/"
            className="inline-flex text-sm font-medium text-[#9f102d] transition hover:opacity-70"
          >
            ← Back to Home
          </Link>

          <div className="mt-8 max-w-5xl">
            <img
              src="/kiss.png"
              alt="Red Lipsticks logo"
              className="mb-8 h-auto w-28 md:w-36 drop-shadow-[0_18px_40px_rgba(159,16,45,0.14)]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
              Personalized Shade Match
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#2d1e1e] md:text-6xl lg:text-7xl">
              Find your most flattering red lipstick direction
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
              This personalized quiz combines undertone clues, coloring cues,
              finish preferences, and style direction to help point you toward
              red lipstick families that are likely to flatter you.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
              It is meant to guide your starting point thoughtfully, not promise
              a single perfect lipstick for every face.
            </p>
          </div>
        </div>
      </section>

      {submitted && result ? (
        <section
          ref={resultRef}
          className="mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-18"
        >
          <div className="rounded-[2.4rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_22px_58px_rgba(64,34,34,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9f102d]">
              Your red lipstick profile
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              {result.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
              {result.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555]">
              {result.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-[1.4rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a76c]">
                  Undertone clue
                </p>
                <p className="mt-2 text-sm font-medium capitalize text-[#2d1e1e]">
                  {result.undertone}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a76c]">
                  Depth clue
                </p>
                <p className="mt-2 text-sm font-medium capitalize text-[#2d1e1e]">
                  {result.depth}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a76c]">
                  Contrast clue
                </p>
                <p className="mt-2 text-sm font-medium capitalize text-[#2d1e1e]">
                  {result.contrast}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a76c]">
                  Finish leaning
                </p>
                <p className="mt-2 text-sm font-medium capitalize text-[#2d1e1e]">
                  {result.finish}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a76c]">
                Why this profile fits
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                {result.whyThisFits}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Promising shade families
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {result.shadeFamilies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-4 py-2 text-sm text-[#6f5555]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Your palette direction
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6f5555]">
                These colors reflect the overall direction your answers point
                toward and can help guide both lipstick and wardrobe choices.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {result.palette.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-[1.4rem] border border-[#ead9d2] bg-[#fffaf6] p-4 text-center"
                  >
                    <div
                      className="mx-auto h-14 w-14 rounded-full border border-black/5 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="mt-3 text-sm font-medium text-[#2d1e1e]">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Recommended picks to explore
              </p>

              <div className="mt-5 grid gap-5">
                {result.products.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(64,34,34,0.05)]"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#2d1e1e]">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#5f4949]">
                          {item.note}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <span className="rounded-full bg-[#9f102d]/10 px-3 py-1 text-xs font-medium text-[#9f102d]">
                          {item.tier}
                        </span>
                        <span className="rounded-full bg-[#efe4dc] px-3 py-1 text-xs font-medium text-[#6a5050]">
                          {item.retailer}
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-4 inline-flex rounded-full bg-[#9f102d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#890d26]"
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag("event", "quiz_product_click", {
                            product_name: item.name,
                            retailer: item.retailer,
                            quiz_profile: result.title,
                          });
                        }
                      }}
                    >
                      View Pick
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                  Keep exploring
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  {result.pageLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block font-medium text-[#9f102d] transition hover:text-[#7f0c21]"
                    >
                      {item.label} →
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleRetake}
                className="inline-flex items-center justify-center rounded-full border border-[#d9c2b7] bg-white px-6 py-3 text-sm font-medium text-[#2d1e1e] transition hover:-translate-y-0.5 hover:border-[#c7a76c]"
              >
                Retake Quiz
              </button>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-[#ead9d2] bg-[#fffaf6] px-5 py-5">
              <p className="text-sm leading-7 text-[#5f4949]">
                These recommendations are style guidance based on common color
                theory, undertone clues, and your quiz preferences. They are
                meant to help you narrow the field intelligently, not guarantee
                a single official best lipstick for every individual face.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-18">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Progress
              </p>
              <p className="mt-2 text-sm text-[#6f5555]">
                {answeredCount} of {questions.length} questions answered
              </p>
            </div>

            <div className="w-44 overflow-hidden rounded-full bg-[#ead9d2]">
              <div
                className="h-2 rounded-full bg-[#9f102d] transition-all"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((question, qIndex) => (
              <section
                key={question.id}
                className="rounded-[2.2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                  Question {qIndex + 1}
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {question.question}
                </h2>

                <div className="mt-8 grid gap-4">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[question.id] === optionIndex;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => handleSelect(question.id, optionIndex)}
                        className={`rounded-[1.5rem] border px-5 py-4 text-left text-sm leading-7 transition md:text-base ${
                          selected
                            ? "border-[#9f102d] bg-[#fff6f8] text-[#2d1e1e] shadow-[0_12px_28px_rgba(159,16,45,0.08)]"
                            : "border-[#ead9d2] bg-[#fffaf6] text-[#5f4949] hover:border-[#d9c2b7] hover:bg-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={!isComplete}
                className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26] disabled:cursor-not-allowed disabled:opacity-60"
              >
                See My Profile
              </button>

              {!isComplete ? (
                <p className="text-sm text-[#6f5555]">
                  Answer all {questions.length} questions to reveal your profile.
                </p>
              ) : null}
            </div>
          </form>
        </section>
      )}
    </PageLayout>
  );
}