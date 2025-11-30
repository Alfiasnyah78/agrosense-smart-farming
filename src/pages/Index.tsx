import {
  type ElementType,
  type FormEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivitySquare,
  AlertTriangle,
  BarChart3,
  Bolt,
  Brain,
  CheckCircle2,
  CircuitBoard,
  Cloudy,
  Command,
  Fingerprint,
  LockKeyhole,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  SignalHigh,
  Skull,
  Target,
  Timer,
} from "lucide-react";

const challenges = [
  {
    prompt: "Type the decoded keyword: 636965626572",
    hint: "Hex for a six-letter alias",
    answer: "cipher",
  },
  {
    prompt: "Reconstruct the call sign: dark + net + ops",
    hint: "Combine without spaces",
    answer: "darknetops",
  },
  {
    prompt: "Prove you're human: what color is our neon signal?",
    hint: "It's the classic hacker green",
    answer: "green",
  },
];

const products = [
  {
    name: "Spectre Hooded Jacket",
    price: "$240",
    badge: "New drop",
    description: "Reactive fiber hoodie with EMP shielding and night-vision friendly dyes.",
    signal: "Ultra-secure",
    rating: 4.9,
  },
  {
    name: "Pulse Gloves v3",
    price: "$160",
    badge: "In stock",
    description: "Haptic gloves with capacitive stealth touch for rapid command input.",
    signal: "Ghost-touch",
    rating: 4.7,
  },
  {
    name: "Black ICE Pack",
    price: "$410",
    badge: "Featured",
    description: "Curated toolkit: signal jammer, mesh beacon, and encrypted drive.",
    signal: "Field ready",
    rating: 5,
  },
  {
    name: "Phantom Boots",
    price: "$185",
    badge: "Limited",
    description: "Silent sole technology with adaptive grip for rooftop maneuvers.",
    signal: "Zero-trace",
    rating: 4.8,
  },
];

const adminMetrics = [
  { label: "Live Sessions", value: "128", delta: "+18%", icon: ActivitySquare },
  { label: "Conversion", value: "4.2%", delta: "+0.8%", icon: BarChart3 },
  { label: "Avg. Order", value: "$286", delta: "+12%", icon: Rocket },
  { label: "Threats Blocked", value: "982", delta: "Auto", icon: ShieldCheck },
];

const intelFeeds = [
  {
    title: "Realtime Threat Grid",
    description: "Edge nodes suppressing botnet crawlers across 18 regions.",
    tone: "stabilizing",
    icon: SignalHigh,
  },
  {
    title: "Supply Chain Sync",
    description: "Inventory mirrors updated from zero-trust vendor registry.",
    tone: "healthy",
    icon: Cloudy,
  },
  {
    title: "Anomaly Watch",
    description: "Lateral movement attempts halted via adaptive MFA traps.",
    tone: "mitigated",
    icon: AlertTriangle,
  },
];

const orderLog = [
  {
    id: "#8842",
    client: "Ghostline",
    item: "Black ICE Pack",
    status: "Packed",
    eta: "08m",
  },
  {
    id: "#8838",
    client: "NightFox",
    item: "Spectre Hooded Jacket",
    status: "In transit",
    eta: "32m",
  },
  {
    id: "#8831",
    client: "Wraith",
    item: "Pulse Gloves v3",
    status: "Queued",
    eta: "12m",
  },
];

const badgeTone: Record<string, string> = {
  "New drop": "from-emerald-500/60 via-emerald-400/50 to-lime-400/40",
  "In stock": "from-sky-500/60 via-cyan-400/50 to-emerald-400/40",
  Featured: "from-amber-500/70 via-orange-500/60 to-red-500/40",
  Limited: "from-purple-500/70 via-fuchsia-500/60 to-cyan-500/50",
};

const CaptchaGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [challenge, setChallenge] = useState(() =>
    challenges[Math.floor(Math.random() * challenges.length)]
  );
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("Answer fast—60 seconds before lock.");
  const [timeLeft, setTimeLeft] = useState(60);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (locked) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setLocked(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [locked]);

  const reset = () => {
    setChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
    setInput("");
    setFeedback("Fresh challenge loaded. 60 seconds to prove you're human.");
    setTimeLeft(60);
    setLocked(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (locked) return;
    if (input.trim().toLowerCase() === challenge.answer.toLowerCase()) {
      setFeedback("Signature verified. Access granted.");
      onUnlock();
    } else {
      setFeedback("Signature mismatch. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-emerald-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 p-6 text-center">
        <div className="flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-emerald-200/80 ring-1 ring-emerald-500/40">
          <LockKeyhole className="h-4 w-4" />
          Black Hat Access Gateway
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-slate-200">{challenge.prompt}</p>
          <p className="text-sm text-emerald-300/80">Hint: {challenge.hint}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-slate-900/80 p-5 ring-1 ring-emerald-500/30"
        >
          <div className="flex items-center justify-between text-sm text-emerald-200/90">
            <span className="flex items-center gap-2">
              <Fingerprint className="h-4 w-4" />
              Human Verification
            </span>
            <span className="flex items-center gap-2 font-mono text-emerald-300">
              <Timer className="h-4 w-4" />
              {timeLeft}s
            </span>
          </div>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type the decoded keyword"
            className="w-full rounded-xl border border-emerald-400/40 bg-slate-950/70 px-4 py-3 text-emerald-50 shadow-[0_0_30px_rgba(16,185,129,0.18)] outline-none transition focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-400/30 disabled:opacity-60"
            disabled={locked}
          />
          <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-200/80">
            <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
              <Command className="h-4 w-4" />
              Solve before timeout.
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-amber-200/90">
              <AlertTriangle className="h-4 w-4" />
              Access locks at zero.
            </span>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={locked}
              className="group flex-1 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-4 py-3 font-semibold text-slate-950 shadow-[0_10px_60px_rgba(16,185,129,0.45)] transition hover:from-emerald-400 hover:via-emerald-300 hover:to-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Validate Access
              </span>
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/70 hover:text-emerald-50"
            >
              <RefreshCw className="h-4 w-4" />
              New challenge
            </button>
          </div>
          <p
            className={`text-sm ${
              locked ? "text-rose-200/80" : "text-emerald-200/80"
            }`}
          >
            {locked
              ? "Access temporarily locked. Request a new challenge to try again."
              : feedback}
          </p>
        </form>
      </div>
    </div>
  );
};

const GlowingPanel = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: ElementType;
  children: ReactNode;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 shadow-[0_30px_120px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/10">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 opacity-70" />
    <div className="flex items-center gap-3 text-emerald-100">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    </div>
    <div className="mt-4 space-y-4 text-sm text-slate-200/90">{children}</div>
  </div>
);

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [selectedMetric, setSelectedMetric] = useState("Live Sessions");

  const featuredCopy = useMemo(
    () =>
      ({
        title: "Black Hat Bazaar",
        subtitle: "E-commerce built for operators who prefer the shadows",
        paragraph:
          "Encrypted storefront, kinetic product reveals, and an admin cockpit wired for anomaly response.",
      }),
    []
  );

  if (!unlocked) {
    return <CaptchaGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 opacity-70 blur-3xl">
          <div className="absolute left-[-15%] top-[-5%] h-72 w-72 rounded-full bg-emerald-500/30" />
          <div className="absolute right-[-10%] top-[30%] h-72 w-72 rounded-full bg-cyan-400/30" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
          <header className="flex flex-col gap-6 rounded-3xl border border-emerald-500/15 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(16,185,129,0.12)] backdrop-blur">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-emerald-200/80">
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-400/40">
                <Skull className="h-4 w-4" />
                Black Hat E-Commerce
              </span>
              <span className="flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-emerald-100 ring-1 ring-emerald-500/20">
                <Bolt className="h-4 w-4" />
                Interactive + Futuristic
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight text-emerald-100 sm:text-5xl">
                  {featuredCopy.title}
                </h1>
                <p className="text-lg text-slate-200/90">{featuredCopy.subtitle}</p>
                <p className="text-sm text-slate-300/80">{featuredCopy.paragraph}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Encrypted checkout", "Zero-trace shipping", "Night ops ready"].map((label) => (
                    <span
                      key={label}
                      className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-emerald-100 ring-1 ring-emerald-400/30"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-950/80 p-6 shadow-[0_20px_120px_rgba(16,185,129,0.18)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(56,189,248,0.08),transparent_25%)]" />
                <div className="relative flex items-center justify-between text-sm text-emerald-100/90">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Secure session</p>
                      <p className="text-xs text-emerald-200/70">Multi-layer cloaking enabled</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    <ActivitySquare className="h-4 w-4" />
                    Live
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-900/70 p-3 ring-1 ring-emerald-500/10">
                    <p className="text-xs text-slate-300/80">Signal Strength</p>
                    <p className="flex items-center gap-2 text-lg font-semibold text-emerald-200">
                      <SignalHigh className="h-4 w-4" />
                      99.98%
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3 ring-1 ring-emerald-500/10">
                    <p className="text-xs text-slate-300/80">Stealth Delivery</p>
                    <p className="flex items-center gap-2 text-lg font-semibold text-emerald-200">
                      <CheckCircle2 className="h-4 w-4" />
                      7 regions
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3 ring-1 ring-emerald-500/10">
                    <p className="text-xs text-slate-300/80">Latency</p>
                    <p className="flex items-center gap-2 text-lg font-semibold text-emerald-200">
                      <Timer className="h-4 w-4" />
                      23ms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-emerald-200/80">Products</p>
                <h2 className="text-2xl font-bold text-emerald-50">Stealthware catalog</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-slate-900/70 px-2 py-1 text-sm text-emerald-100">
                <button
                  onClick={() => setLayout("grid")}
                  className={`flex items-center gap-2 rounded-full px-3 py-1 ${
                    layout === "grid"
                      ? "bg-emerald-500/20 text-emerald-50"
                      : "text-emerald-200"
                  }`}
                >
                  <CircuitBoard className="h-4 w-4" /> Grid
                </button>
                <button
                  onClick={() => setLayout("list")}
                  className={`flex items-center gap-2 rounded-full px-3 py-1 ${
                    layout === "list"
                      ? "bg-emerald-500/20 text-emerald-50"
                      : "text-emerald-200"
                  }`}
                >
                  <Command className="h-4 w-4" /> Rows
                </button>
              </div>
            </div>
            <div
              className={`grid gap-4 ${
                layout === "grid" ? "md:grid-cols-2" : "md:grid-cols-1"
              }`}
            >
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_30px_120px_rgba(16,185,129,0.16)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(16,185,129,0.14),transparent_28%)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full bg-gradient-to-r ${badgeTone[product.badge]} px-3 py-1 text-xs font-semibold uppercase text-slate-950`}
                      >
                        {product.badge}
                      </span>
                      <span className="text-sm text-emerald-200/90">{product.signal}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-50">{product.name}</h3>
                    <p className="text-sm text-slate-300/90">{product.description}</p>
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-emerald-200">
                      <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-400/30">
                        <ShoppingBag className="h-4 w-4" />
                        {product.price}
                      </span>
                      <span className="flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 ring-1 ring-emerald-500/15">
                        <Brain className="h-4 w-4" />
                        Rating {product.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button className="rounded-xl bg-emerald-500/80 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_45px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400">
                        Deploy to cart
                      </button>
                      <button className="rounded-xl border border-emerald-500/30 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/50">
                        Quick view
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
            <div className="flex flex-col gap-4 rounded-3xl border border-emerald-500/15 bg-slate-900/60 p-6 shadow-[0_24px_120px_rgba(16,185,129,0.14)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-200/80">Admin cockpit</p>
                  <h2 className="text-2xl font-bold text-emerald-50">Realtime operations</h2>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  <ActivitySquare className="h-4 w-4" /> Live feed
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {adminMetrics.map(({ label, value, delta, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => setSelectedMetric(label)}
                    className={`flex flex-col gap-1 rounded-2xl border border-emerald-500/15 bg-slate-950/60 p-4 text-left transition ${
                      selectedMetric === label
                        ? "ring-2 ring-emerald-400/60 shadow-[0_12px_60px_rgba(16,185,129,0.22)]"
                        : "hover:border-emerald-300/30"
                    }`}
                  >
                    <div className="flex items-center justify-between text-sm text-emerald-100/90">
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {label}
                      </span>
                      <span className="text-xs text-emerald-200/80">{delta}</span>
                    </div>
                    <p className="text-2xl font-semibold text-emerald-50">{value}</p>
                    <p className="text-xs text-slate-300/80">Tap to focus telemetry</p>
                  </button>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                <GlowingPanel title="Orders in motion" icon={ShoppingBag}>
                  <div className="space-y-3">
                    {orderLog.map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-center justify-between rounded-xl border border-emerald-500/10 bg-slate-950/80 px-3 py-2 text-sm text-emerald-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/30">
                            <Rocket className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-emerald-50">{entry.item}</p>
                            <p className="text-xs text-slate-300/80">
                              {entry.id} • {entry.client}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-emerald-100/90">
                          <span className="rounded-full bg-emerald-500/15 px-3 py-1">{entry.status}</span>
                          <span className="rounded-full bg-slate-800/90 px-3 py-1">ETA {entry.eta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowingPanel>
                <GlowingPanel title="System signals" icon={ShieldCheck}>
                  <div className="grid gap-3">
                    {intelFeeds.map(({ title, description, tone, icon: Icon }) => (
                      <div
                        key={title}
                        className="flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-slate-950/80 p-3 text-sm text-emerald-100"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-emerald-50">{title}</p>
                          <p className="text-slate-300/80">{description}</p>
                          <span className="inline-flex rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                            {tone}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowingPanel>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-emerald-500/15 bg-slate-900/60 p-6 shadow-[0_24px_120px_rgba(16,185,129,0.12)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-200/80">Security first</p>
                  <h2 className="text-2xl font-bold text-emerald-50">Defense overlays</h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                  <ShieldCheck className="h-4 w-4" />
                  Focus: {selectedMetric}
                </div>
              </div>
              <div className="space-y-3 text-sm text-emerald-100">
                {["Adaptive MFA traps", "Edge encryption nodes", "Autonomous fraud radar"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-emerald-500/10 bg-slate-950/80 px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      <span>{item}</span>
                    </div>
                    <span className="text-xs text-slate-300/80">Synced</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-emerald-500/15 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 p-5 text-sm text-emerald-50 shadow-[0_18px_90px_rgba(16,185,129,0.15)]">
                <div className="flex items-center gap-3 text-emerald-100">
                  <Target className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Command Center</p>
                    <p className="text-xs text-emerald-200/80">
                      Issue live commands to your storefront mesh with zero downtime.
                    </p>
                  </div>
                </div>
                <div className="mt-3 grid gap-2 text-xs text-slate-300/90">
                  {["sync-mirror --inventory", "deploy shield --all --policy=mfa", "trace orders --region=night"]
                    .map((cmd) => (
                      <div
                        key={cmd}
                        className="flex items-center justify-between rounded-lg bg-slate-950/80 px-3 py-2 font-mono text-emerald-200 ring-1 ring-emerald-500/15"
                      >
                        <span>{cmd}</span>
                        <span className="text-emerald-300/80">ready</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-500/15 bg-slate-900/60 p-6 shadow-[0_24px_120px_rgba(16,185,129,0.12)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-emerald-200/80">Community</p>
                <h2 className="text-2xl font-bold text-emerald-50">Operator chatter</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                <Brain className="h-4 w-4" /> Neural relay
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {["Zero-click checkout feels snappier tonight.", "Admin cockpit caught a spoof before it landed.", "Mesh delivery drone synced to the night route."]
                .map((message, index) => (
                  <div
                    key={message}
                    className="rounded-2xl border border-emerald-500/15 bg-slate-950/60 p-4 text-sm text-emerald-100 shadow-[0_12px_70px_rgba(16,185,129,0.12)]"
                  >
                    <div className="mb-2 flex items-center gap-2 text-emerald-200">
                      <Skull className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.2em]">Cell {index + 1}</span>
                    </div>
                    <p className="text-slate-200/90">{message}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">Encrypted</p>
                  </div>
                ))}
            </div>
          </section>

          <footer className="flex flex-col gap-3 border-t border-emerald-500/15 py-8 text-sm text-emerald-200/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                <Skull className="h-4 w-4" />
                Black Hat Bazaar
              </span>
              <span className="flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-100">
                <LockKeyhole className="h-4 w-4" />
                Encrypted commerce
              </span>
            </div>
            <p className="text-slate-300/70">
              Crafted for future-proof operators. Adaptive e-commerce, secured admin dashboards, and neon-drenched vibes.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
