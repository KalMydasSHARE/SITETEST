/**
 * KalMydas — Glossary Tooltip System
 * Shared across all kalmydas.com pages
 *
 * Usage: <span class="g-term" data-g="key">Visible Text</span>
 * The key maps to GLOSSARY_DEFS below.
 */

const GLOSSARY_DEFS = {
  xauusd: "Code boursier international representant le prix de l'or (XAU) en dollars americains (USD). L'un des marches les plus liquides au monde.",
  backtest: "Simulation d'une strategie de trading sur des donnees historiques reelles pour en evaluer les performances passees.",
  base_l2: "Reseau de deuxieme couche (Layer 2) construit au-dessus d'Ethereum par Coinbase. Transactions rapides et peu couteuses (~0.01$ par transaction).",
  smart_contract: "Programme informatique autonome deploye sur la blockchain. S'execute automatiquement selon des regles predefinies, sans intermediaire. Le code est public et verifiable.",
  erc20: "Norme technique standard pour les jetons sur Ethereum et ses reseaux compatibles (comme Base). Garantit l'interoperabilite avec tous les portefeuilles et plateformes.",
  bonding_curve: "Mecanisme mathematique transparent qui determine automatiquement le prix d'un jeton en fonction de la quantite en circulation. Plus la demande augmente, plus le prix monte.",
  buyback_burn: "Mecanisme automatique ou une partie des frais de performance est utilisee pour racheter des jetons KAL sur le marche, puis les detruire definitivement. Reduit l'offre totale.",
  staking: "Action de bloquer des jetons dans un protocole pour fournir de la liquidite ou securiser le reseau, en echange de recompenses.",
  lp: "Fournisseur de liquidite (Liquidity Provider) — personne qui depose des jetons dans un pool d'echange pour faciliter les transactions, en echange de recompenses.",
  hwm: "High-Water Mark — mecanisme de protection : les frais de performance ne s'appliquent que sur les gains au-dessus du plus-haut historique. Empeche de payer deux fois pour les memes gains.",
  dex: "Plateforme d'echange decentralisee (Decentralized Exchange) — permet d'echanger des jetons directement entre utilisateurs, sans intermediaire centralise.",
  dao: "Organisation Autonome Decentralisee — gouvernance communautaire ou les decisions sont prises par vote des detenteurs de jetons, sans autorite centrale.",
  basescan: "Explorateur blockchain permettant de consulter toutes les transactions et contrats deployes sur le reseau Base. Assure une transparence totale.",
  nft: "Jeton Non Fongible (Non-Fungible Token) — actif numerique unique et non interchangeable sur la blockchain. Utilise chez KalMydas pour le Pass d'acces.",
  mainnet: "Reseau principal d'une blockchain, ou les transactions ont une valeur reelle (par opposition au testnet qui utilise des jetons sans valeur).",
  profit_factor: "Ratio gains bruts / pertes brutes. Un PF superieur a 1 signifie que la strategie est globalement profitable. PF > 1.5 = bon, PF > 2 = excellent.",
  win_rate: "Pourcentage de trades gagnants sur le total des trades executes par une strategie.",
  drawdown: "Perte maximale depuis un pic de capital. Mesure le pire recul temporaire subi par une strategie. Indique le risque maximal historique.",
  perf_fee: "Frais de performance — preleves uniquement sur les gains de la strategie, jamais sur le capital initial. Appliques avec le mecanisme High-Water Mark.",
  usdc: "Stablecoin indexe 1:1 sur le dollar americain, emis par Circle. Utilisee comme monnaie d'echange et de depot sur la plateforme.",
  on_chain: "Directement sur la blockchain — toutes les transactions sont publiques, immuables et verifiables par n'importe qui.",
  tvl: "Total Value Locked — valeur totale des actifs deposes dans un protocole DeFi. Indicateur de confiance et de taille du protocole.",
  non_custodial: "Modele ou vos fonds restent sous votre controle total. Aucune entite centralisee ne detient vos cles privees ni ne peut acceder a vos fonds.",
  mt4: "MetaTrader 4 — logiciel professionnel de trading utilise depuis 2005 pour creer, tester et executer des strategies automatisees sur les marches financiers.",
  lock_up: "Periode de blocage pendant laquelle les fonds ne peuvent pas etre retires. Chez KalMydas : aucun lock-up, retrait 24/7.",
  layer2: "Reseau secondaire construit au-dessus d'une blockchain principale (comme Ethereum) pour ameliorer la vitesse et reduire les couts de transaction.",
  defi: "Finance Decentralisee — services financiers (echange, pret, epargne) operes sur blockchain via des smart contracts, sans intermediaire bancaire.",
  blockchain: "Registre numerique distribue et infalsifiable. Chaque transaction est enregistree publiquement et ne peut etre modifiee retroactivement.",
  deflationniste: "Modele economique ou la quantite de jetons en circulation diminue progressivement dans le temps, creant de la rarete (similaire au Bitcoin).",
  forward_test: "Test d'une strategie en conditions reelles de marche, sans risquer de capital reel. Valide que les resultats du backtest se confirment.",
  stress_test: "Evaluation du comportement d'une strategie lors de periodes de forte volatilite ou de crises (2008, 2020). Mesure la resilience.",
  testnet: "Reseau de test d'une blockchain utilisant des jetons sans valeur reelle. Permet de tester les applications avant le lancement officiel.",
  solidity: "Langage de programmation utilise pour ecrire des smart contracts sur Ethereum et ses reseaux compatibles (dont Base L2).",
  oracle: "Service qui transmet des donnees du monde reel (prix, resultats) vers la blockchain. Permet aux smart contracts d'interagir avec des informations externes.",
  epoch: "Periode de temps definie dans un protocole. Chez KalMydas, les recompenses LP sont distribuees par epoques avec des montants decroissants.",
  flywheel: "Boucle de valeur auto-renforcante : les gains generent des frais, qui rachetent du KAL, ce qui augmente le prix, attirant plus de participants.",
  fonds_institutionnels: "Structures financieres gerant des capitaux importants (banques, fonds de pension, hedge funds). Disposent d'outils de trading avances auxquels les particuliers n'ont traditionnellement pas acces.",
  base_sepolia: "Version de test du reseau Base. Permet de tester les contrats et l'application sans utiliser de fonds reels avant le lancement officiel.",
  orderbook: "Carnet d'ordres — systeme qui met en relation acheteurs et vendeurs sur un marche. Chez KalMydas, le prix est determine par la courbe de valorisation, sans orderbook.",
};

(function() {
  // Create tooltip element
  let tooltip = null;
  let activeTermEl = null;

  function createTooltip() {
    tooltip = document.createElement('div');
    tooltip.className = 'g-tooltip';
    tooltip.innerHTML = '<button class="g-tooltip-close">&times;</button><div class="g-tooltip-title"></div><div class="g-tooltip-text"></div>';
    document.body.appendChild(tooltip);

    tooltip.querySelector('.g-tooltip-close').addEventListener('click', function(e) {
      e.stopPropagation();
      hideTooltip();
    });
  }

  function showTooltip(termEl) {
    if (!tooltip) createTooltip();

    const key = termEl.getAttribute('data-g');
    const def = GLOSSARY_DEFS[key];
    if (!def) return;

    // If same term is clicked, toggle off
    if (activeTermEl === termEl && tooltip.classList.contains('visible')) {
      hideTooltip();
      return;
    }

    activeTermEl = termEl;

    // Set content
    tooltip.querySelector('.g-tooltip-title').textContent = termEl.textContent.replace(/\*$/, '');
    tooltip.querySelector('.g-tooltip-text').textContent = def;

    // Position tooltip
    tooltip.classList.remove('visible', 'above');
    tooltip.style.left = '0';
    tooltip.style.top = '0';

    // Show first to measure
    tooltip.style.display = 'block';

    const rect = termEl.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const margin = 10;

    let left = rect.left;
    let top = rect.bottom + margin;
    let above = false;

    // Check if tooltip goes off-screen bottom
    if (top + tooltipRect.height > window.innerHeight - margin) {
      top = rect.top - tooltipRect.height - margin;
      above = true;
    }

    // Check if tooltip goes off-screen right
    if (left + tooltipRect.width > window.innerWidth - margin) {
      left = window.innerWidth - tooltipRect.width - margin;
    }

    // Check if tooltip goes off-screen left
    if (left < margin) left = margin;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    if (above) tooltip.classList.add('above');

    // Adjust arrow position
    const arrowLeft = Math.max(12, Math.min(rect.left - left + rect.width / 2 - 6, tooltipRect.width - 24));
    tooltip.style.setProperty('--arrow-left', arrowLeft + 'px');
    if (tooltip.querySelector('style')) tooltip.querySelector('style').remove();
    const arrowStyle = document.createElement('style');
    arrowStyle.textContent = '.g-tooltip::before { left: ' + arrowLeft + 'px; }';
    tooltip.appendChild(arrowStyle);

    // Animate in
    requestAnimationFrame(function() {
      tooltip.classList.add('visible');
    });
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove('visible');
      activeTermEl = null;
    }
  }

  // Attach click events to all g-term elements
  function init() {
    document.querySelectorAll('.g-term').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showTooltip(el);
      });
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (tooltip && !tooltip.contains(e.target) && !e.target.classList.contains('g-term')) {
        hideTooltip();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') hideTooltip();
    });

    // Close on scroll (optional, improves UX)
    window.addEventListener('scroll', function() {
      hideTooltip();
    }, { passive: true });
  }

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose reinit for dynamic content (whitepaper.html)
  window.glossaryTooltipInit = init;
})();
