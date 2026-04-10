/**
 * KalMydas — i18n (FR/EN) system
 * Adds data-i18n driven language switching.
 * French is the default (content lives in the HTML).
 * English translations are stored here and swapped via JS.
 */

const I18N_EN = {
  /* ===== META (handled separately) ===== */
  _title: "KalMydas — Algorithmic gold trading, Accessible to all",
  _description: "Participate in algorithmic gold (XAUUSD) trading strategies backtested over 4 to 21 years. From $10. Transparent, decentralized, on Arbitrum. Past results do not guarantee future performance.",
  _og_title: "KalMydas — Gold, algorithmically",
  _og_description: "5 gold trading strategies backtested over 4 to 21 years. Historical annualized returns from ~4% to ~79% per year. From $10. Past results do not guarantee future performance.",

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
  hero_sub: `5 gold trading bots (<span class="g-term" data-g="xauusd">XAUUSD</span>), <span class="g-term" data-g="backtest">backtested</span> over 4 to 21 years. Historical annualized returns from ~4% to ~79% per year depending on the strategy. Starting at $10. Transparent, decentralized, on <span class="g-term" data-g="arbitrum_l2">Arbitrum</span>.<br><span style="font-size:0.78rem; opacity:0.7;">Past results do not guarantee future performance.</span>`,
  hero_btn_primary: `Launch app <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  hero_btn_secondary: "View strategies",

  /* ===== STATS ===== */
  stat_1_label: "Trading strategies",
  stat_2_label: `Of <span class="g-term" data-g="backtest">backtesting</span>`,
  stat_3_label: `<span class="g-term" data-g="smart_contract">Smart contracts</span>`,
  stat_4_label: "Unit tests",

  /* ===== HOW IT WORKS ===== */
  how_label: "Simple and fast",
  how_title: "How does it work?",
  how_desc: "3 steps to access professional algorithmic gold trading",
  step_1_h: "Sign in",
  step_1_p: "Email or wallet — create your account in 30 seconds with simplified authentication",
  step_2_h: "Choose your strategy",
  step_2_p: "From conservative to aggressive — 5 risk profiles tailored to your goals. From $10",
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

  strat_valkyrie_desc: "Breakout + pyramid on gold — balanced risk/reward",
  strat_valkyrie_tag: "Balanced",
  strat_valkyrie_meta: "per year · 329 trades",
  strat_valkyrie_bt: "16 years of backtest",

  strat_revolution_desc: "Trend breakout + triple filter — dynamic returns",
  strat_revolution_tag: "Dynamic",
  strat_revolution_meta: "per year · 2,166 trades",
  strat_revolution_bt: "21 years of backtest",

  strat_treasury_desc: "Phoenix Engine — adaptive trailing + capital protection",
  strat_treasury_tag: "Dynamic",
  strat_treasury_meta: "per year · 1,815 trades",
  strat_treasury_bt: "21 years of backtest",

  strat_orion_desc: "x10 mission on gold — target reached in 4 years historically",
  strat_orion_tag: "Aggressive",
  strat_orion_meta: "per year · 800 trades",
  strat_orion_bt: "20 years of data",

  /* ===== COMPARISON TABLE ===== */
  th_strategy: "Strategy",
  th_return: "Return",
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
  token_f2: `<strong><span class="g-term" data-g="pol">Buyback & Recirculation</span></strong> — Performance fees buy back KAL and recirculate it as liquidity (Zero Destruction philosophy)`,
  token_f3: `<strong>Fee sharing</strong> — Lock your KAL as <span class="g-term" data-g="vekal">veKAL</span> to receive your share of fees in <span class="g-term" data-g="usdc">USDC</span> every week`,
  token_f4: `<strong><span class="g-term" data-g="lp">LP</span> rewards</strong> — Liquidity <span class="g-term" data-g="staking">staking</span> with KAL rewards`,
  token_f5: `<strong>Deposit bonus</strong> — Up to +5% in KAL on your deposits`,
  token_f6: `<strong>Governance</strong> — On-chain community votes (active on testnet)`,
  token_f7: `<strong><span class="g-term" data-g="deflationniste">Deflationary</span></strong> — Supply decreases over time`,

  /* ===== SECURITY ===== */
  sec_label: "Trust & Transparency",
  sec_title: "Security of your funds",
  sec_desc: `Your assets are protected by auditable <span class="g-term" data-g="smart_contract">smart contracts</span>, deployed on the <span class="g-term" data-g="blockchain">blockchain</span>`,
  sec_1_h: `Verifiable <span class="g-term" data-g="smart_contract">smart contracts</span>`,
  sec_1_p: `35+ <span class="g-term" data-g="solidity">Solidity</span> contracts, public source code, verifiable on <span class="g-term" data-g="arbiscan">Arbiscan</span> at any time`,
  sec_2_h: "173+ unit tests",
  sec_2_p: "Every critical function is automatically tested. Complete scenario coverage",
  sec_3_h: `<span class="g-term" data-g="arbitrum_l2">Arbitrum</span> by Offchain Labs`,
  sec_3_p: `Deployed on Arbitrum, Ethereum's <span class="g-term" data-g="layer2">layer 2</span> backed by Offchain Labs. Minimal fees, maximum security`,
  sec_4_h: "Full control",
  sec_4_p: `Your funds stay in the <span class="g-term" data-g="smart_contract">smart contracts</span>. No centralized private key. Withdraw whenever you want`,
  sec_5_h: `<span class="g-term" data-g="hwm">High-Water Mark</span>`,
  sec_5_p: `<span class="g-term" data-g="perf_fee">Performance fees</span> only apply on new gains. Never double-charged`,
  sec_6_h: "Independent audit",
  sec_6_p: "Security audit planned before mainnet launch (Q3 2026). Public results",

  /* ===== ROADMAP ===== */
  road_label: "Long-term vision",
  road_title: "Roadmap",
  road_1_phase: `Phase 1 — Q1 2026 <span class="tag-done">Completed</span>`,
  road_1_h: "Foundations",
  road_1_p: `First <span class="g-term" data-g="smart_contract">smart contracts</span> deployed on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>. E2E tests validated. MVP frontend connected <span class="g-term" data-g="on_chain">on-chain</span>. Whitepaper published. 5 verified <span class="g-term" data-g="backtest">backtests</span>.`,
  road_2_phase: `Phase 2 — Q2 2026 <span class="tag-progress">In progress</span>`,
  road_2_h: "Development & Beta",
  road_2_p: `35+ contracts deployed on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>. veKAL, governance, referral system, auto-compound, yield diversifier, RWA treasury — all coded and tested. Beta testing program active.`,
  road_3_phase: "Phase 3 — Q3 2026",
  road_3_h: "Audit & Launch",
  road_3_p: `Independent security audit. <span class="g-term" data-g="mainnet">Mainnet</span> deployment on <span class="g-term" data-g="arbitrum_l2">Arbitrum One</span>. Official launch of all 5 strategies. <span class="g-term" data-g="nft">NFT</span> access pass activation.`,
  road_4_phase: "Phase 4 — Q4 2026",
  road_4_h: "Growth",
  road_4_p: `Community rewards program. KAL listing on <span class="g-term" data-g="dex">DEX</span>. Advanced analytics dashboard. New asset exploration.`,
  road_5_phase: "2027 and beyond",
  road_5_h: "Expansion",
  road_5_p: `Native mobile app. New strategies and markets. <span class="g-term" data-g="dao">DAO</span> governance. Multi-chain expansion (Arbitrum, Polygon).`,

  /* ===== FAQ ===== */
  faq_label: "Frequently asked questions",
  faq_title: "FAQ",
  faq_1_q: "What exactly is KalMydas?",
  faq_1_a: "KalMydas is a DeFi ecosystem offering 5 algorithmic gold (XAUUSD) trading strategies. Bots execute trades automatically, 24/7. Everything is transparent and verifiable on the Arbitrum blockchain.",
  faq_2_q: "What is the minimum deposit?",
  faq_2_a: "You can start with as little as $10 (in USDC on Arbitrum). There is no maximum amount. Your funds remain under your control in the smart contracts.",
  faq_3_q: "How do withdrawals work?",
  faq_3_a: "Withdrawals are free and instant, 24/7. No lock-up period, no withdrawal fees. You interact directly with the smart contract.",
  faq_4_q: "Are returns guaranteed?",
  faq_4_a: "No. The figures shown are based on historical backtests (up to 21 years of data). Past performance does not guarantee future results. Trading involves risk of capital loss.",
  faq_5_q: "What are the fees?",
  faq_5_a: "No entry or exit fees. The only fees are performance fees (10% to 20% depending on strategy) charged only on new gains thanks to the High-Water Mark system. You only pay when you profit.",
  faq_6_q: "Do I need a crypto wallet to use KalMydas?",
  faq_6_a: "No. You can sign in with a simple email or Google account. A wallet is created automatically for you through Privy. Advanced users can also connect their own wallet (MetaMask, etc.).",

  /* ===== BUILT WITH ===== */
  tech_label: "Infrastructure",
  tech_title: "Built with",

  /* ===== CTA ===== */
  cta_h2: `Ready to participate in <span style="background: var(--gradient-gold-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">algorithmic gold</span>?`,
  cta_p: "Join the early participants of KalMydas. The best KAL token price is now.",
  cta_btn_primary: `Launch app <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cta_btn_secondary: "Read the Whitepaper",

  /* ===== FOOTER ===== */
  footer_app: "Application",
  footer_wp: "Whitepaper",
  footer_about: "About",
  footer_contact: "Contact",
  footer_copy: `&copy; 2026 KalMydas. Decentralized algorithmic gold trading.<br><span style="font-size: 0.72rem;">Past performance does not guarantee future results. Participation involves risks.</span>`,
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
  fonds_institutionnels: "Financial structures managing significant capital (banks, pension funds, hedge funds). They have access to advanced trading tools traditionally unavailable to retail investors.",
  arbitrum_sepolia: "Test version of the Arbitrum network. Allows testing contracts and the app without using real funds before official launch.",
  orderbook: "Order book — a system matching buyers and sellers in a market. At KalMydas, the price is determined by the bonding curve, with no orderbook.",
  vekal: "Vote-escrowed KAL — mechanism inspired by Curve Finance. By locking KAL, you receive veKAL which grants rights to weekly USDC fee sharing and protocol parameter voting.",
  erc4626: "Technical standard for tokenized vaults on Ethereum. Enables standardized auto-compounding of gains.",
  pol: "Protocol-Owned Liquidity — liquidity owned directly by the protocol (not by users). Guarantees permanent liquidity even if providers withdraw.",
  rwa: "Real World Assets — real-world assets (Treasury bonds, real estate) tokenized on the blockchain. Offer returns uncorrelated to the crypto market.",
};

/* ===== i18n ENGINE ===== */
(function () {
  const FR_CACHE = {};
  let currentLang = localStorage.getItem('km_lang') || 'fr';

  function cacheFR() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      FR_CACHE[el.getAttribute('data-i18n')] = el.innerHTML;
    });
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('km_lang', lang);
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
