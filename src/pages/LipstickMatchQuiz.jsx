import { useRef, useState } from "react";
import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

const questions = [
  {
    id: "veins",
    question:
      "When you look at the veins on your wrist in natural light, what do they usually look like?",
    options: [
      {
        label: "More blue or purple",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "More green or olive",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Hard to tell, or a mix of both",
        scores: { balancedSignature: 2, softEveryday: 1 },
      },
    ],
  },
  {
    id: "white-test",
    question:
      "Which tends to flatter your skin more: crisp white or creamy ivory?",
    options: [
      {
        label: "Crisp white",
        scores: { classicCool: 2, softEveryday: 1 },
      },
      {
        label: "Creamy ivory",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Both can work pretty well",
        scores: { balancedSignature: 2, softEveryday: 1 },
      },
    ],
  },
  {
    id: "jewelry",
    question: "Which jewelry usually flatters you most?",
    options: [
      {
        label: "Silver or white gold",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "Gold or rose gold",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Both look good on me",
        scores: { balancedSignature: 2, softEveryday: 1 },
      },
    ],
  },
  {
    id: "colors",
    question: "Which clothing colors tend to make your skin look its best?",
    options: [
      {
        label: "Berry, navy, emerald, icy pink",
        scores: { classicCool: 2, softEveryday: 1 },
      },
      {
        label: "Camel, olive, coral, terracotta",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Taupe, soft white, dusty rose, mixed tones",
        scores: { balancedSignature: 2, softEveryday: 1 },
      },
    ],
  },
  {
    id: "red-family",
    question: "Which red lipstick family feels most like you?",
    options: [
      {
        label: "Blue-red or cherry red",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "Orange-red or brick red",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Soft true red or balanced red",
        scores: { balancedSignature: 2, softEveryday: 1 },
      },
    ],
  },
  {
    id: "intensity",
    question: "How bold do you like your lipstick to feel?",
    options: [
      {
        label: "Polished and classic",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "Warm, glowing, and expressive",
        scores: { warmRadiant: 2, boldRadiant: 2 },
      },
      {
        label: "Soft, wearable, and versatile",
        scores: { softEveryday: 2, balancedSignature: 1 },
      },
    ],
  },
  {
    id: "priority",
    question: "What do you want your red lipstick to do most?",
    options: [
      {
        label: "Make my smile look brighter",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "Add warmth and life to my face",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Feel balanced and easy to wear",
        scores: { balancedSignature: 2, softEveryday: 2 },
      },
    ],
  },
  {
    id: "style",
    question: "Which style mood sounds most like you?",
    options: [
      {
        label: "Timeless, refined, elegant",
        scores: { classicCool: 2, balancedSignature: 1 },
      },
      {
        label: "Warm, glowy, confident",
        scores: { warmRadiant: 2, boldRadiant: 1 },
      },
      {
        label: "Chic, easy, understated",
        scores: { softEveryday: 2, balancedSignature: 1 },
      },
    ],
  },
];

const results = {
  classicCool: {
    title: "Classic Cool Red",
    subtitle: "Your signature red is crisp, polished, and timeless.",
    description:
      "You are most at home in reds that feel refined and brightening. Blue-based reds, cherry reds, and cooler classic reds are likely to flatter you beautifully and make the whole face look more polished.",
    lipstickFamily: ["Blue-red", "Cherry red", "Cranberry", "Classic cool red"],
    bestLinks: [
      { label: "Cool Skin Tone Guide", to: "/cool-skin-tone-colors" },
      {
        label: "Red Lipsticks That Make Teeth Look Whiter",
        to: "/red-lipsticks-that-make-teeth-look-whiter",
      },
      { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
    ],
  },
  warmRadiant: {
    title: "Warm Radiant Red",
    subtitle: "Your best reds bring warmth, glow, and richness.",
    description:
      "You are likely flattered by reds that feel sunlit, rich, and inviting. Orange-reds, brick reds, terracotta reds, and warm classic reds can make your complexion look vibrant and beautifully alive.",
    lipstickFamily: ["Orange-red", "Brick red", "Tomato red", "Terracotta red"],
    bestLinks: [
      { label: "Warm Skin Tone Guide", to: "/warm-skin-tone-colors" },
      { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
      { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
    ],
  },
  balancedSignature: {
    title: "Balanced Signature Red",
    subtitle: "You shine in reds that feel elegant and flexible.",
    description:
      "You likely have the ability to wear both warm and cool influences, but your best reds feel balanced rather than extreme. True reds, softened berry reds, and refined classic reds may suit you especially well.",
    lipstickFamily: ["True red", "Soft red", "Balanced red", "Refined berry red"],
    bestLinks: [
      { label: "Neutral Skin Tone Guide", to: "/neutral-skin-tone-colors" },
      { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
      { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
    ],
  },
  softEveryday: {
    title: "Soft Everyday Red",
    subtitle: "Your ideal red is polished, wearable, and quietly flattering.",
    description:
      "You may prefer reds that feel easy, graceful, and versatile instead of loud. Rose-reds, softened true reds, and elegant satin reds are likely to feel especially beautiful on you.",
    lipstickFamily: ["Rose-red", "Soft true red", "Satin red", "Gentle berry red"],
    bestLinks: [
      { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
      { label: "Neutral Skin Tone Guide", to: "/neutral-skin-tone-colors" },
      {
        label: "Red Lipsticks That Make Teeth Look Whiter",
        to: "/red-lipsticks-that-make-teeth-look-whiter",
      },
    ],
  },
  boldRadiant: {
    title: "Bold Radiant Red",
    subtitle: "Your red should feel warm, expressive, and unforgettable.",
    description:
      "You may look best in reds that bring warmth, glow, and personality. Vibrant warm reds, richer orange-reds, and statement brick reds can help you look energized and striking.",
    lipstickFamily: ["Vivid warm red", "Orange-red", "Brick red", "Rust red"],
    bestLinks: [
      { label: "Warm Skin Tone Guide", to: "/warm-skin-tone-colors" },
      { label: "Blue-Red vs Orange-Red", to: "/blue-red-vs-orange-red" },
      { label: "Best Red Lipsticks Over 40", to: "/best-red-lipsticks-over-40" },
    ],
  },
};

function getWinningResult(answers) {
  const totals = {
    classicCool: 0,
    warmRadiant: 0,
    balancedSignature: 0,
    softEveryday: 0,
    boldRadiant: 0,
  };

  questions.forEach((question) => {
    const selectedIndex = answers[question.id];
    if (selectedIndex == null) return;

    const option = question.options[selectedIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      totals[key] += value;
    });
  });

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

export default function LipstickMatchQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef(null);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

  const winningKey = submitted && isComplete ? getWinningResult(answers) : null;
  const result = winningKey ? results[winningKey] : null;

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
    }, 100);
  }

  function handleRetake() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  if (submitted && isComplete && !result) {
    return (
      <PageLayout bgClassName="bg-[#faf7f2] text-[#2d1e1e]">
        <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 lg:px-16">
          <div className="rounded-[2rem] border border-[#ead9d2] bg-white p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)]">
            <p className="text-sm text-[#9f102d]">
              Something went wrong with the quiz result.
            </p>
            <p className="mt-3 text-[#5f4949]">Please retake the quiz.</p>

            <button
              type="button"
              onClick={handleRetake}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#9f102d] px-6 py-3 text-sm font-medium text-white"
            >
              Retake Quiz
            </button>
          </div>
        </section>
      </PageLayout>
    );
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
              Lipstick Match Quiz
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#2d1e1e] md:text-6xl lg:text-7xl">
              Which red lipstick was made for you?
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
              Discover the red family that feels most flattering, polished, and
              beautifully aligned with your coloring and style.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
              This quick quiz combines undertone clues, color cues, and lipstick
              preferences to help point you toward your most flattering red
              direction.
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
              Your result
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

            <div className="mt-8 flex flex-wrap gap-3">
              {result.lipstickFamily.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-4 py-2 text-sm text-[#6f5555]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                  Keep exploring
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  {result.bestLinks.map((item) => (
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
                See My Result
              </button>

              {!isComplete ? (
                <p className="text-sm text-[#6f5555]">
                  Answer all 8 questions to reveal your lipstick match.
                </p>
              ) : null}
            </div>
          </form>
        </section>
      )}
    </PageLayout>
  );
}