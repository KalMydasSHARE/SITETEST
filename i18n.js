/**
 * KalMydas — i18n (FR/EN) system
 * Adds data-i18n driven language switching.
 * French is the default (content lives in the HTML).
 * English translations are stored here and swapped via JS.
 */

const I18N_EN = {
  /* ===== META (handled separately) ===== */
  _title: "KalMydas — Gold, algorithmically",
  _description: "No broker, no third-party custody: your funds stay in public smart contracts under your own key. Five algorithms take positions on gold (XAUUSD) 24 hours a day, directly on-chain via gTrade. Over 4 to 21 years of historical simulation, annual performance ranges from roughly 4% to 79% depending on the strategy — usually reserved for six-figure deposits, here from $10. Past performance does not guarantee future results.",
  _og_title: "KalMydas — Gold, algorithmically",
  _og_description: "No broker, no third-party custody. Five algorithms trade gold 24/7 directly on-chain via gTrade. ~4% to ~79% annualized over 4 to 21 years of historical simulation. From $10. Past performance does not guarantee future results.",

  /* ===== NAV ===== */
  nav_how: "How it works",
  nav_strategies: "Strategies",
  nav_token: "KAL Token",
  nav_security: "Security",
  nav_roadmap: "Roadmap",
  nav_about: "About",
  nav_cta: "Launch app",

  /* ===== HERO ===== */
  hero_badge: `<span class="dot"></span> Testnet live — Arbitrum Sepolia`,
  hero_h1: `Gold, <span class="gold">algorithmically</span>`,
  hero_sub: `No broker, no third-party custody: your funds stay in public smart contracts under your own key. Five algorithms take positions on gold (<span class="g-term" data-g="xauusd">XAUUSD</span>) 24 hours a day, directly on-chain via gTrade. Over 4 to 21 years of <span class="g-term" data-g="backtest">historical simulation</span>, annual performance ranges from roughly 4% to 79% depending on the strategy — the kind of management usually reserved for six-figure deposits, here accessible from $10. Test network on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>, mainnet planned on Base.<br><span style="font-size:0.78rem; opacity:0.7;">Historical simulations over 4 to 21 years of XAUUSD data. Live execution via gTrade may produce different results. Risk of partial or total capital loss. Past performance does not guarantee future performance.</span>`,
  hero_btn_primary: `Launch app <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  hero_btn_secondary: "View strategies",

  /* ===== STATS ===== */
  stat_1_label: "Trading robots",
  stat_2_label: `Of <span class="g-term" data-g="backtest">backtested</span> data`,
  stat_3_label: `<span class="g-term" data-g="smart_contract">Smart contracts</span>`,
  stat_4_label: "Unit tests",

  /* ===== HOW IT WORKS ===== */
  how_label: "Simple and fast",
  how_title: "How does it work?",
  how_desc: "3 steps to access professional algorithmic gold trading",
  step_1_h: "Sign in",
  step_1_p: "Email or wallet — create your account in 30 seconds with simplified authentication",
  step_2_h: "Choose your strategy",
  step_2_p: "From conservative to high-risk — 5 risk profiles tailored to your goals. From $10",
  step_3_h: "Collect your earnings",
  step_3_p: "Bots trade for you 24/7. Withdraw whenever you want, no lock-up",

  /* ===== STRATEGIES ===== */
  strat_label: "5 approaches, 5 profiles",
  strat_title: "Our trading strategies",
  strat_desc: `Each bot trades gold (<span class="g-term" data-g="xauusd">XAUUSD</span>) with a unique approach, <span class="g-term" data-g="backtest">backtested</span> on real data`,

  strat_horizon_desc: "Trend following on gold — conservative and steady",
  strat_horizon_tag: "Conservative",
  strat_horizon_meta: "per year · 1,098 trades",
  strat_horizon_bt: "11 years of backtest",

  strat_valkyrie_desc: "Breakout + pyramid on gold — balanced risk/performance",
  strat_valkyrie_tag: "Balanced",
  strat_valkyrie_meta: "per year · 329 trades",
  strat_valkyrie_bt: "16 years of backtest",

  strat_revolution_desc: "Trend breakout + triple filter — dynamic performance",
  strat_revolution_tag: "Dynamic",
  strat_revolution_meta: "per year · 2,166 trades",
  strat_revolution_bt: "21 years of backtest",

  strat_treasury_desc: "Phoenix Engine — adaptive trailing + capital protection",
  strat_treasury_tag: "Aggressive",
  strat_treasury_meta: "per year · 1,815 trades",
  strat_treasury_bt: "21 years of backtest",

  strat_orion_desc: "x10 mission on gold — target reached in 4 years historically",
  strat_orion_tag: "High-Risk",
  strat_orion_meta: "per year · 800 trades",
  strat_orion_bt: "20 years of data",

  /* ===== COMPARISON TABLE ===== */
  th_strategy: "Strategy",
  th_return: "Performance",
  th_backtest: "Backtest",
  th_perf_fee: "Perf. fee",

  disclaimer: "Past performance does not guarantee future results. Trading involves risk of capital loss.",

  /* ===== TOKEN KAL ===== */
  token_label: "Utility Token",
  token_title: "The KAL token",
  token_desc: `An <span class="g-term" data-g="erc20">ERC-20</span> token at the heart of the KalMydas ecosystem`,
  token_h3: "Designed to create value",
  token_p: `The KAL token uses a mathematical <span class="g-term" data-g="bonding_curve">bonding curve</span>: the more demand increases, the more the price rises automatically. Early participants get the best price.`,
  token_f1: `<strong><span class="g-term" data-g="bonding_curve">Bonding curve</span></strong> — Price increases with adoption`,
  token_f2: `<strong><span class="g-term" data-g="pol">Buyback &amp; Recirculation</span></strong> — A portion of performance fees buys back KAL on the market and reinjects it as protocol liquidity (permanent buying pressure, no destruction)`,
  token_f3: `<strong>Fee sharing</strong> — Lock your KAL as <span class="g-term" data-g="vekal">veKAL</span> to receive your share of fees in <span class="g-term" data-g="usdc">USDC</span> every week`,
  token_f4: `<strong><span class="g-term" data-g="lp">LP</span> rewards</strong> — Liquidity <span class="g-term" data-g="staking">staking</span> with KAL rewards`,
  token_f5: `<strong>Deposit bonus</strong> — Up to +5% in KAL on your deposits`,
  token_f6: `<strong>Governance</strong> — On-chain community votes + dedicated interface`,
  token_f7: `<strong><span class="g-term" data-g="deflationniste">Deflationary</span></strong> — Supply decreases over time`,

  /* ===== SECURITY ===== */
  sec_label: "Trust & Transparency",
  sec_title: "Security of your funds",
  sec_desc: `Your assets are protected by auditable <span class="g-term" data-g="smart_contract">smart contracts</span>, deployed on the <span class="g-term" data-g="blockchain">blockchain</span>`,
  sec_1_h: `Verifiable <span class="g-term" data-g="smart_contract">smart contracts</span>`,
  sec_1_p: `37 <span class="g-term" data-g="solidity">Solidity</span> contracts, public source code, verifiable on <span class="g-term" data-g="arbiscan">Arbiscan</span> at any time`,
  sec_2_h: "1,100+ unit tests",
  sec_2_p: "Every critical function is automatically tested. Complete scenario coverage",
  sec_3_h: `<span class="g-term" data-g="arbitrum_l2">Arbitrum</span> by Offchain Labs`,
  sec_3_p: `Deployed on Arbitrum, Ethereum's <span class="g-term" data-g="layer2">layer 2</span> backed by Offchain Labs. Minimal fees, maximum security`,
  sec_4_h: "Full control",
  sec_4_p: `Your funds stay in the <span class="g-term" data-g="smart_contract">smart contracts</span>. No centralized private key. Withdraw whenever you want`,
  sec_5_h: `<span class="g-term" data-g="hwm">High-Water Mark</span>`,
  sec_5_p: `<span class="g-term" data-g="perf_fee">Performance fees</span> only apply on new gains. Never double-charged`,
  sec_6_h: "Independent audit",
  sec_6_p: "Three Omniscient Lab audits PASS (4.22 / 4.23 / 4.24) — KAL-001 through KAL-008 Codex resolved. Public reports.",

  /* ===== ROADMAP ===== */
  road_label: "Long-term vision",
  road_title: "Roadmap",
  road_1_phase: `Phase 1 — Q1 2026 <span class="tag-done">Completed</span>`,
  road_1_h: "Foundations",
  road_1_p: `First <span class="g-term" data-g="smart_contract">smart contracts</span> deployed on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>. E2E tests validated. MVP frontend connected <span class="g-term" data-g="on_chain">on-chain</span>. Whitepaper published. 5 verified <span class="g-term" data-g="backtest">backtests</span>.`,
  road_2_phase: `Phase 2 — Q2 2026 <span class="tag-progress">In progress</span>`,
  road_2_h: "Development & Beta",
  road_2_p: `42 contracts deployed on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span> (37 core + 5 KalSoloPool since April 25, 2026). veKAL, governance, referral system, auto-compound, performance diversifier, RWA treasury, individual solo mode per strategy — all coded and tested. 3rd consecutive Omniscient PASS (final retest on April 22, 300,000-transition KalSoloPool fuzz, KalPool individual pause on April 25 — GO Sepolia redeployment on May 3). Beta testing program active.`,
  road_3_phase: "Phase 3 — September 14, 2026",
  road_3_h: "Audit & Launch",
  road_3_p: `Independent security audit. <span class="g-term" data-g="mainnet">Mainnet</span> deployment on <span class="g-term" data-g="base_l2">Base</span>. Official launch of all 5 strategies. <span class="g-term" data-g="nft">NFT</span> access pass activation.`,
  road_4_phase: "Phase 4 — Q4 2026",
  road_4_h: "Growth",
  road_4_p: `Community rewards program. KAL listing on <span class="g-term" data-g="dex">DEX</span>. Advanced analytics dashboard. New asset exploration.`,
  road_5_phase: "2027 and beyond",
  road_5_h: "Expansion",
  road_5_p: `Native mobile app. New strategies and markets. <span class="g-term" data-g="dao">DAO</span> governance. Multi-chain expansion (Base, Arbitrum, Polygon).`,

  /* ===== FAQ ===== */
  faq_label: "Frequently asked questions",
  faq_title: "FAQ",
  faq_1_q: "What exactly is KalMydas?",
  faq_1_a: "KalMydas is a DeFi ecosystem offering 5 algorithmic gold (XAUUSD) trading strategies. Bots execute trades automatically, 24/7. Everything is transparent and verifiable on-chain (Base for mainnet, Arbitrum Sepolia for testnet).",
  faq_2_q: "What is the minimum deposit?",
  faq_2_a: "You can start with as little as $10 (in USDC on Base). There is no maximum amount. Your funds remain under your control in the smart contracts.",
  faq_3_q: "How do withdrawals work?",
  faq_3_a: "Withdrawals are free and instant, 24/7. No lock-up period, no withdrawal fees. You interact directly with the smart contract.",
  faq_4_q: "Is future performance guaranteed?",
  faq_4_a: "No. The figures shown are based on historical backtests (up to 21 years of data). Past performance does not guarantee future results. Trading involves risk of capital loss.",
  faq_5_q: "What are the fees?",
  faq_5_a: "No entry or exit fees. The only fees are performance fees (10% to 20% depending on strategy) charged only on new gains thanks to the High-Water Mark system. You only pay when you profit.",
  faq_6_q: "Do I need a crypto wallet to use KalMydas?",
  faq_6_a: "No. You can sign in with a simple email or Google account. A wallet is created automatically for you through Privy. Advanced users can also connect their own wallet (MetaMask, etc.).",
  faq_7_q: "Are the contracts audited?",
  faq_7_a: "Yes. Three Omniscient Lab audits PASS (4.22, 4.23, 4.24) on the 42 protocol contracts. KAL-001 through KAL-008 Codex findings are all resolved. Audit reports are public and accessible from the official documentation.",
  faq_8_q: "Which strategy should I choose as a beginner?",
  faq_8_a: "HORIZON is the most conservative profile, designed for discovery (modest yield, controlled drawdown on backtest). VALKYRIE offers a balanced profile. The more aggressive strategies (REVOLUTION, TREASURY, ORION) require a clear understanding of volatility. You can pick several and split your capital as you wish.",

  /* ===== BUILT WITH ===== */
  tech_label: "Infrastructure",
  tech_title: "Built with",

  /* ===== CTA ===== */
  cta_h2: `Ready to participate in <span style="background: var(--gradient-gold-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">algorithmic gold</span>?`,
  cta_p: "Join the early participants of KalMydas. The best KAL token price is now.",
  cta_btn_primary: `Launch app <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cta_btn_secondary: "Read the Whitepaper",

  /* ===== ABOUT ===== */
  about_label: "Genesis",
  about_title: "About KalMydas",
  about_desc: "Why this project exists and how it works",
  about_why_h3: "Why KalMydas exists",
  about_why_p: `KalMydas was born from a simple frustration: why does professional algorithmic trading, which has generated consistent historical performance for decades, remain reserved for banks and large financial structures? Our platform, built on <span class="g-term" data-g="base_l2">Base</span>, gives everyone — starting from $10 — access to the same algorithmic strategies as the professionals.`,
  about_approach_h3: "Our approach",
  about_approach_p: `Our 5 trading robots are developed and optimized on <span class="g-term" data-g="mt4">MetaTrader 4</span>. They have been rigorously backtested on real historical broker data (4 to 21 years depending on the strategy), forward-tested, and stress-tested on the 2008 and 2020 crises. Each strategy operates exclusively on the gold market (<span class="g-term" data-g="xauusd">XAUUSD</span>).`,
  about_part_h3: "How to participate",
  about_part_p: `A single Access Pass is enough — a subscription verifiable on the <span class="g-term" data-g="blockchain">blockchain</span> ($1/day). Choose your strategy, deposit your funds, and withdraw 24/7 with no delays. We earn only when you earn: performance fees apply only on new gains thanks to the <span class="g-term" data-g="hwm">High-Water Mark</span>.`,
  about_arch_h3: "Technical architecture",
  about_arch_contracts: "Solidity contracts",
  about_arch_tests: "Unit tests",
  about_arch_control: "User-controlled funds",
  about_arch_withdrawals: "Free withdrawals",
  about_arch_desc: `A secure bridge connects the <span class="g-term" data-g="mt4">MT4</span> robots to the blockchain. No private key is centralized — your funds remain under your control. Everything is verifiable in real-time on <span class="g-term" data-g="arbiscan">Arbiscan</span>.`,
  about_token_h3: "The KAL token",
  about_token_desc2: `The KAL token (<span class="g-term" data-g="erc20">ERC-20</span>, 10M max supply) uses a transparent <span class="g-term" data-g="bonding_curve">bonding curve</span>: the price rises with adoption. 30% of performance fees are used for buyback and recirculation (Zero Destruction philosophy). Lock your KAL as <span class="g-term" data-g="vekal">veKAL</span> to receive your share of fees in <span class="g-term" data-g="usdc">USDC</span> every week.`,
  about_token_reserve: "50.5% Ecosystem Reserve",
  about_token_lp_mining: "15% LP Mining",
  about_token_treasury: "10% Treasury",
  about_token_pool_rewards: "10% Pool Rewards",
  about_token_presale: "7.5% Presale",
  about_token_curve: "4.5% Curve",
  about_token_community: "0.5% Airdrop",
  about_risk_h3: "Risk disclaimer",
  about_risk_p: "We promise nothing magical. Past performance does not guarantee future results. Trading carries risk of capital loss, including temporary drawdowns of up to 70% on some strategies. We fully own that and publish everything: source code, test histories, audits.",
  about_status_p: `We are in testing phase on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>. Official launch on the main network is planned for September 2026.`,
  about_timeline_h3: "Where we are",
  about_tl_1: "<strong>Q1 2026</strong> — Foundations laid, first contracts, connected MVP",
  about_tl_2: "<strong>Q2 2026</strong> — 42 contracts deployed (core + 5 KalSoloPool), active beta testing, veKAL + governance",
  about_tl_3: "<strong>September 14, 2026</strong> — Mainnet launch on Base (Omniscient audits already PASS, conditional on 75,000 USDC presale viability gate)",
  about_tl_4: "<strong>Q4 2026+</strong> — Growth, DEX listing, mobile app, DAO",
  about_tl_link: "View full roadmap →",

  /* ===== FOOTER ===== */
  footer_tagline: "Algorithmic gold trading, accessible to all. Non-custodial, your keys, your funds.",
  footer_col_platform: "Platform",
  footer_app: "Application",
  footer_wp: "Whitepaper",
  footer_strategies: "Strategies",
  footer_token: "KAL Token",
  footer_security: "Security",
  footer_roadmap: "Roadmap",
  footer_col_community: "Community",
  footer_contact: "Contact",
  footer_col_resources: "Resources",
  footer_docs: "Documentation",
  footer_architecture: "Architecture",
  footer_tokenomics: "Tokenomics",
  footer_governance: "Governance",
  footer_addresses: "On-chain addresses",
  footer_audits: "Audits",
  footer_col_legal: "Legal",
  footer_about: "About",
  footer_faq: "FAQ",
  footer_privacy: "Privacy",
  footer_cookies: "Cookies",
  footer_terms: "Terms of use",
  footer_manage_cookies: "Manage cookies",
  footer_risk_title: "Risk disclaimer:",
  footer_risk_text: "KalMydas is an experimental DeFi platform. Algorithmic trading and crypto-assets carry a high risk of total capital loss. Past performance does not guarantee future results. This website does not constitute investment advice, solicitation, or an offer to buy or sell financial instruments. You are solely responsible for your decisions. Check the applicable legislation in your jurisdiction before participating.",
  footer_copy: `&copy; 2026 KalMydas — Decentralized algorithmic gold trading. Non-custodial, your keys, your funds.`,
};

/* ===== ENGLISH GLOSSARY ===== */
const GLOSSARY_DEFS_EN = {
  xauusd: "International ticker symbol for the price of gold (XAU) in US dollars (USD). One of the most liquid markets in the world.",
  backtest: "Simulation of a trading strategy on real historical data to evaluate its past performance.",
  arbitrum_l2: "Layer 2 network built on top of Ethereum by Offchain Labs. Fast, low-cost transactions with security inherited from Ethereum.",
  smart_contract: "Autonomous computer program deployed on the blockchain. Executes automatically according to predefined rules, with no intermediary. Code is public and verifiable.",
  erc20: "Standard technical norm for tokens on Ethereum and compatible networks (like Arbitrum). Ensures interoperability with all wallets and platforms.",
  bonding_curve: "Transparent mathematical mechanism that automatically determines a token's price based on circulating supply. The more demand increases, the higher the price.",
  buyback_burn: "Automatic mechanism where a portion of performance fees is used to buy back KAL tokens. At KalMydas, bought-back KAL is recirculated as liquidity (Zero Destruction philosophy).",
  staking: "The act of locking tokens in a protocol to provide liquidity or secure the network, in exchange for rewards.",
  lp: "Liquidity Provider — a person who deposits tokens into an exchange pool to facilitate transactions, in exchange for rewards.",
  hwm: "High-Water Mark — protection mechanism: performance fees only apply on gains above the all-time high. Prevents paying twice for the same gains.",
  dex: "Decentralized Exchange — a platform that allows users to trade tokens directly with each other, without a centralized intermediary.",
  dao: "Decentralized Autonomous Organization — community governance where decisions are made by token holder votes, with no central authority.",
  arbiscan: "Blockchain explorer for viewing all transactions and contracts deployed on the Arbitrum network. Ensures complete transparency.",
  nft: "Non-Fungible Token — a unique, non-interchangeable digital asset on the blockchain. Used at KalMydas for the access pass.",
  mainnet: "The main network of a blockchain where transactions have real value (as opposed to testnet which uses worthless tokens).",
  profit_factor: "Gross gains / gross losses ratio. A PF above 1 means the strategy is overall profitable. PF > 1.5 = good, PF > 2 = excellent.",
  win_rate: "Percentage of winning trades out of the total trades executed by a strategy.",
  drawdown: "Maximum loss from a capital peak. Measures the worst temporary decline experienced by a strategy. Indicates maximum historical risk.",
  perf_fee: "Performance fee — charged only on strategy gains, never on initial capital. Applied with the High-Water Mark mechanism.",
  usdc: "Stablecoin pegged 1:1 to the US dollar, issued by Circle. Used as the exchange and deposit currency on the platform.",
  on_chain: "Directly on the blockchain — all transactions are public, immutable, and verifiable by anyone.",
  tvl: "Total Value Locked — the total value of assets deposited in a DeFi protocol. An indicator of trust and protocol size.",
  non_custodial: "A model where your funds remain under your full control. No centralized entity holds your private keys or can access your funds.",
  mt4: "MetaTrader 4 — professional trading software used since 2005 to create, test, and execute automated strategies on financial markets.",
  lock_up: "A period during which funds cannot be withdrawn. At KalMydas: no lock-up, withdraw 24/7.",
  layer2: "A secondary network built on top of a main blockchain (like Ethereum) to improve speed and reduce transaction costs.",
  defi: "Decentralized Finance — financial services (trading, lending, savings) operated on blockchain via smart contracts, without banking intermediaries.",
  blockchain: "A distributed, tamper-proof digital ledger. Every transaction is publicly recorded and cannot be retroactively modified.",
  deflationniste: "An economic model where the circulating supply of tokens decreases progressively over time, creating scarcity (similar to Bitcoin).",
  forward_test: "Testing a strategy under real market conditions without risking real capital. Validates that backtest results hold up.",
  stress_test: "Evaluating a strategy's behavior during periods of high volatility or crises (2008, 2020). Measures resilience.",
  testnet: "A blockchain test network using worthless tokens. Allows testing applications before official launch.",
  solidity: "Programming language used to write smart contracts on Ethereum and compatible networks (including Arbitrum).",
  oracle: "A service that transmits real-world data (prices, results) to the blockchain. Enables smart contracts to interact with external information.",
  epoch: "A defined time period in a protocol. At KalMydas, LP rewards are distributed per epoch with decreasing amounts.",
  flywheel: "Self-reinforcing value loop: gains generate fees, which buy back KAL, increasing the price, attracting more participants.",
  fonds_institutionnels: "Financial structures managing significant capital (banks, pension funds, hedge funds). They have access to advanced trading tools traditionally unavailable to retail participants.",
  arbitrum_sepolia: "Test version of the Arbitrum network. Allows testing contracts and the app without using real funds before official launch.",
  orderbook: "Order book — a system matching buyers and sellers in a market. At KalMydas, the price is determined by the bonding curve, with no orderbook.",
  vekal: "Vote-escrowed KAL — mechanism inspired by Curve Finance. By locking KAL, you receive veKAL which grants rights to weekly USDC fee sharing and protocol parameter voting.",
  erc4626: "Technical standard for tokenized vaults on Ethereum. Enables standardized auto-compounding of gains.",
  pol: "Protocol-Owned Liquidity — liquidity owned directly by the protocol (not by users). Guarantees permanent liquidity even if providers withdraw.",
  rwa: "Real World Assets — real-world assets (Treasury bonds, real estate) tokenized on the blockchain. Offer performance uncorrelated to the crypto market.",
  base_l2: "Layer 2 network on Ethereum, optimized for consumer-facing applications. KalMydas mainnet planned on Base.",
};

/* ===== i18n ENGINE ===== */
(function () {
  const FR_CACHE = {};

  /**
   * Cross-subdomain language preference, shared between kalmydas.com, app.kalmydas.com, docs.kalmydas.com.
   * Stored in a cookie scoped to .kalmydas.com (root domain) so all subdomains read the same value.
   * In local dev (localhost), falls back to localStorage only.
   * A language preference cookie is exempt from GDPR consent (functional cookie, ePrivacy art. 5.3).
   *
   * NOTE: Safari ITP 2.1+ caps client-set cookies (document.cookie) to 7 days regardless of
   * max-age. To survive that cap across cross-subdomain navigation, we also accept
   * ?lang=fr|en as a query param (decorated on outgoing links by installCrossSubdomainClickShim).
   */
  function readSharedCookie() {
    const m = document.cookie.match(/(?:^|; )km_lang=([^;]+)/);
    if (m && (m[1] === 'fr' || m[1] === 'en')) return m[1];
    return null;
  }

  function readQueryLang() {
    try {
      const m = (location.search || '').match(/[?&]lang=(fr|en)\b/);
      return m ? m[1] : null;
    } catch (e) { return null; }
  }

  function isKalmydasHost(host) {
    // Strict: exactly kalmydas.com OR any proper .kalmydas.com subdomain.
    // Avoids false positives on e.g. evilkalmydas.com.
    return host === 'kalmydas.com' || host.endsWith('.kalmydas.com');
  }

  function writeSharedCookie(lang) {
    const isKalmydas = isKalmydasHost(location.hostname);
    const domainPart = isKalmydas ? '; domain=.kalmydas.com' : '';
    const securePart = location.protocol === 'https:' ? '; Secure' : '';
    // 1 year, root path, SameSite=Lax (allows top-level cross-subdomain navigation)
    document.cookie = `km_lang=${lang}; path=/${domainPart}; max-age=31536000; SameSite=Lax${securePart}`;
  }

  function cleanLangFromUrl() {
    try {
      if (!window.history || typeof history.replaceState !== 'function') return;
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        const newSearch = url.searchParams.toString();
        const newUrl = url.pathname + (newSearch ? '?' + newSearch : '') + url.hash;
        history.replaceState(null, '', newUrl);
      }
    } catch (e) {}
  }

  /**
   * Detect preferred language.
   * Priority:
   *   0. URL query (?lang=fr|en) — survives Safari ITP 7-day cookie cap across cross-subdomain nav
   *   1. cross-subdomain cookie (user choice on landing/app/docs)
   *   2. localStorage (legacy fallback for users who chose before cookie was added)
   *   3. browser/system locale (navigator.language follows OS settings: "fr-FR", "en-US", etc.)
   *   4. fallback FR
   * Anything starting with "fr" → French. Everything else → English.
   */
  function detectInitialLang() {
    const qLang = readQueryLang();
    if (qLang) return qLang;
    const cookieLang = readSharedCookie();
    if (cookieLang) return cookieLang;
    const stored = localStorage.getItem('km_lang');
    if (stored === 'fr' || stored === 'en') return stored;
    const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  }

  /**
   * Intercept clicks on anchors that leave the current host but stay inside kalmydas.com
   * and append ?lang=XX so the destination page adopts the right language even if its cookie
   * has been purged (Safari ITP). Does not rewrite modifier-clicks (ctrl/cmd/middle button)
   * so standard browser behaviors are preserved.
   */
  function installCrossSubdomainClickShim() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target && e.target.closest && e.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      let url;
      try { url = new URL(href, location.href); } catch (err) { return; }
      if (url.hostname === location.hostname) return; // same host, no need
      if (!isKalmydasHost(url.hostname)) return;      // not our family
      if (url.searchParams.has('lang')) return;       // already decorated
      url.searchParams.set('lang', currentLang);
      anchor.setAttribute('href', url.toString());
    }, true); // capture: update href before the browser starts navigation
  }

  let currentLang = detectInitialLang();

  function cacheFR() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      FR_CACHE[el.getAttribute('data-i18n')] = el.innerHTML;
    });
  }

  function applyLang(lang) {
    currentLang = lang;
    // Persist to both: cookie (shared across *.kalmydas.com) + localStorage (legacy/local-dev).
    writeSharedCookie(lang);
    try { localStorage.setItem('km_lang', lang); } catch {}
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang === 'en' && I18N_EN[key] !== undefined) {
        el.innerHTML = I18N_EN[key];
      } else if (lang === 'fr' && FR_CACHE[key] !== undefined) {
        el.innerHTML = FR_CACHE[key];
      }
    });

    // Update meta tags
    if (lang === 'en') {
      document.title = I18N_EN._title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = I18N_EN._description;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = I18N_EN._og_title;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = I18N_EN._og_description;
    } else {
      document.title = FR_CACHE._title || document.title;
      // meta tags restore from cache would need special handling; left as-is for SEO
    }

    // Update glossary definitions
    if (typeof window._glossarySetLang === 'function') {
      window._glossarySetLang(lang);
    }

    // Update toggle button appearance
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.querySelector('.lang-option[data-lang="fr"]').classList.toggle('active', lang === 'fr');
      toggle.querySelector('.lang-option[data-lang="en"]').classList.toggle('active', lang === 'en');
    }

    // Re-init glossary click handlers for new elements
    if (typeof window.glossaryTooltipInit === 'function') {
      window.glossaryTooltipInit();
    }
  }

  function init() {
    // Merge page-specific EN translations (e.g. about page)
    if (window.PAGE_I18N_EN) {
      Object.assign(I18N_EN, window.PAGE_I18N_EN);
    }

    // Cache all French content
    cacheFR();
    FR_CACHE._title = document.title;

    // Create toggle button
    const nav = document.querySelector('.nav-links');
    if (nav) {
      const li = document.createElement('li');
      li.innerHTML = `<div id="langToggle" class="lang-toggle" role="button" aria-label="Switch language">
        <span class="lang-option active" data-lang="fr">FR</span>
        <span class="lang-option" data-lang="en">EN</span>
      </div>`;
      // Insert before last <li> (the CTA button)
      const cta = nav.querySelector('.nav-cta');
      if (cta) {
        nav.insertBefore(li, cta.parentElement);
      } else {
        nav.appendChild(li);
      }

      document.getElementById('langToggle').addEventListener('click', function () {
        applyLang(currentLang === 'fr' ? 'en' : 'fr');
      });
    }

    // Ensure the shared cookie reflects the current detected/saved language on every page load,
    // so if the user opened the landing first (auto-detected FR/EN), app.kalmydas.com picks it up.
    writeSharedCookie(currentLang);

    // If we arrived with ?lang=XX (came from another subdomain), promote it to cookie and
    // strip the query so it does not pollute copy/paste of the URL.
    cleanLangFromUrl();

    // Decorate outgoing links to sibling subdomains with ?lang=XX so Safari ITP's 7-day cookie
    // cap cannot desynchronize the user's language choice.
    installCrossSubdomainClickShim();

    // Apply saved language preference
    if (currentLang === 'en') {
      applyLang('en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
