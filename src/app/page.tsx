const keyFacts = [
  { label: "Also known as", value: "Farsightedness" },
  { label: "Primary issue", value: "Difficulty focusing on close objects" },
  { label: "Main symptom", value: "Blurry near vision, eye strain" },
  { label: "Treatments", value: "Corrective lenses, contact lenses, laser surgery" },
];

const sections = [
  {
    title: "What Is Hypermetropia?",
    body: "Hypermetropia, or farsightedness, is a common refractive error where light focuses behind the retina instead of directly on it. People with this condition usually see distant objects clearly but struggle with near tasks such as reading or using a smartphone.",
  },
  {
    title: "Typical Symptoms",
    body: "Blurry vision at close range, headaches after prolonged near work, eye strain or burning sensation, difficulty concentrating on small print, and fatigue while reading are hallmark symptoms. Children may also avoid reading or hold objects far away.",
  },
  {
    title: "Underlying Causes",
    body: "The eye may be shorter than average or the cornea too flat, preventing light from bending sharply enough. Hypermetropia can be inherited; most babies are born mildly farsighted and grow out of it as their eyes lengthen.",
  },
  {
    title: "Diagnosis",
    body: "An optometrist performs a comprehensive eye exam that measures visual acuity and refractive error. Retinoscopy and automated refraction help determine the lens prescription needed to focus light correctly on the retina.",
  },
  {
    title: "Treatment Options",
    body: "Corrective eyeglasses or contact lenses adjust how light enters the eye. Refractive surgeries such as LASIK, LASEK, or PRK reshape the cornea to improve focus. For age-related hypermetropia (presbyopia), multifocal lenses and lifestyle changes support close work.",
  },
  {
    title: "Managing Day to Day",
    body: "Take breaks from screens using the 20-20-20 rule, ensure good task lighting, maintain regular eye exams, and monitor children’s study habits. Balanced nutrition, staying hydrated, and managing chronic illnesses like diabetes support overall eye health.",
  },
];

const myths = [
  {
    myth: "Hypermetropia only affects the elderly.",
    fact: "People of all ages—including children—can have farsightedness. Early detection is key because kids may not recognize the problem.",
  },
  {
    myth: "Wearing glasses makes your eyes weaker.",
    fact: "Corrective lenses simply redirect light. They do not worsen or improve the shape of the eye, but they do reduce symptoms and prevent eye strain.",
  },
  {
    myth: "Laser surgery is the only permanent fix.",
    fact: "Surgery is optional. Many people comfortably manage hypermetropia with glasses or contact lenses throughout life.",
  },
];

const faqs = [
  {
    question: "Can hypermetropia be cured?",
    answer:
      "There is no medicine that permanently cures farsightedness. However, vision can be fully corrected with glasses, contacts, or refractive surgery tailored to your lifestyle and prescription.",
  },
  {
    question: "Is hypermetropia the same as presbyopia?",
    answer:
      "No. Hypermetropia is usually present from birth or early life due to eye shape, while presbyopia develops with age because the natural lens stiffens. Both cause near-vision difficulties but stem from different mechanisms.",
  },
  {
    question: "When should I see an eye specialist?",
    answer:
      "Schedule an exam if you notice persistent headaches, squinting, blurry near vision, or difficulty focusing on close tasks. Children should have routine eye checks, especially before starting school.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-900">
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_50%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-24 pt-24 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-slate-800/70 px-4 py-1 text-sm font-medium uppercase tracking-wide text-sky-200">
              Eye Health Guide
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Hypermetropia (Farsightedness)
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Understand why near objects can look blurry, how eye care
              specialists diagnose the condition, and the modern treatments that
              restore comfortable close-up vision.
            </p>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur lg:max-w-sm">
            {keyFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-slate-300">
                  {fact.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-16 skew-y-[3deg] bg-slate-950" />
      </header>

      <main className="-mt-16 space-y-24 pb-24">
        <section className="mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl shadow-emerald-100/40 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl bg-slate-950 px-8 py-12 text-white shadow-2xl shadow-slate-200/40">
          <header>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
              Myths vs Facts
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Common Misconceptions</h2>
          </header>
          <div className="space-y-6">
            {myths.map((item) => (
              <div
                key={item.myth}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                  Myth
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  {item.myth}
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-emerald-200">
                  Fact
                </p>
                <p className="mt-1 text-base text-slate-100">{item.fact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-emerald-100 bg-white/70 p-8 shadow-lg shadow-emerald-100/30 backdrop-blur">
          <header>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Frequently Asked
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Hypermetropia FAQ
            </h2>
          </header>
          <div className="space-y-5">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-100 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-sky-50 p-8 shadow-lg shadow-sky-100">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-slate-900">
              When to Seek Professional Help
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Vision changes should never be ignored. Schedule an appointment if
              you notice persistent headaches, need to hold reading material at
              arm&apos;s length, or if a child struggles with schoolwork and
              complains of tired eyes. Regular checkups every one to two years
              help detect refractive errors early and keep your eyes comfortable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://www.aao.org/eye-health/diseases/hyperopia-farsightedness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-400/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Learn more from the AAO
              </a>
              <a
                href="https://www.optometry.org.au/patients-and-public/facts-about-vision/hyperopia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Find an optometrist
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 py-10 text-center text-sm text-slate-500">
        Information on this page is for education only and cannot replace
        personalized advice from a qualified eye care professional.
      </footer>
    </div>
  );
}
