/**
 * KalMydas — Glossary Tooltip System
 * Shared across all kalmydas.com pages
 *
 * Usage: <span class="g-term" data-g="key">Visible Text</span>
 * The key maps to GLOSSARY_DEFS below.
 */

const GLOSSARY_DEFS = {
  xauusd: "Code boursier international représentant le prix de l'or (XAU) en dollars américains (USD). L'un des marchés les plus liquides au monde.",
  backtest: "Simulation d'une stratégie de trading sur des données historiques réelles pour en évaluer les performances passées.",
  arbitrum_l2: "Réseau de deuxième couche (Layer 2) construit au-dessus d'Ethereum par Offchain Labs. Transactions rapides et peu coûteuses, sécurité héritée d'Ethereum.",
  smart_contract: "Programme informatique autonome déployé sur la blockchain. S'exécute automatiquement selon des règles prédéfinies, sans intermédiaire. Le code est public et vérifiable.",
  erc20: "Norme technique standard pour les jetons sur Ethereum et ses réseaux compatibles (comme Arbitrum). Garantit l'interopérabilité avec tous les portefeuilles et plateformes.",
  bonding_curve: "Mécanisme mathématique transparent qui détermine automatiquement le prix d'un jeton en fonction de la quantité en circulation. Plus la demande augmente, plus le prix monte.",
  buyback_burn: "Mécanisme automatique où une partie des frais de performance est utilisée pour racheter des jetons KAL sur le marché. Chez KalMydas, les KAL rachetés sont recirculés en liquidité (philosophie Zéro Destruction).",
  staking: "Action de bloquer des jetons dans un protocole pour fournir de la liquidité ou sécuriser le réseau, en échange de récompenses.",
  lp: "Fournisseur de liquidité (Liquidity Provider) — personne qui dépose des jetons dans un pool d'échange pour faciliter les transactions, en échange de récompenses.",
  hwm: "High-Water Mark — mécanisme de protection : les frais de performance ne s'appliquent que sur les gains au-dessus du plus-haut historique. Empêche de payer deux fois pour les mêmes gains.",
  dex: "Plateforme d'échange décentralisée (Decentralized Exchange) — permet d'échanger des jetons directement entre utilisateurs, sans intermédiaire centralisé.",
  dao: "Organisation Autonome Décentralisée — gouvernance communautaire où les décisions sont prises par vote des détenteurs de jetons, sans autorité centrale.",
  arbiscan: "Explorateur blockchain permettant de consulter toutes les transactions et contrats déployés sur le réseau Arbitrum. Assure une transparence totale.",
  nft: "Jeton Non Fongible (Non-Fungible Token) — actif numérique unique et non interchangeable sur la blockchain. Utilisé chez KalMydas pour le Pass d'accès.",
  mainnet: "Réseau principal d'une blockchain, où les transactions ont une valeur réelle (par opposition au testnet qui utilise des jetons sans valeur).",
  profit_factor: "Ratio gains bruts / pertes brutes. Un PF supérieur à 1 signifie que la stratégie est globalement profitable. PF > 1.5 = bon, PF > 2 = excellent.",
  win_rate: "Pourcentage de trades gagnants sur le total des trades exécutés par une stratégie.",
  drawdown: "Perte maximale depuis un pic de capital. Mesure le pire recul temporaire subi par une stratégie. Indique le risque maximal historique.",
  perf_fee: "Frais de performance — prélevés uniquement sur les gains de la stratégie, jamais sur le capital initial. Appliqués avec le mécanisme High-Water Mark.",
  usdc: "Stablecoin indexé 1:1 sur le dollar américain, émis par Circle. Utilisé comme monnaie d'échange et de dépôt sur la plateforme.",
  on_chain: "Directement sur la blockchain — toutes les transactions sont publiques, immuables et vérifiables par n'importe qui.",
  tvl: "Total Value Locked — valeur totale des actifs déposés dans un protocole DeFi. Indicateur de confiance et de taille du protocole.",
  non_custodial: "Modèle où vos fonds restent sous votre contrôle total. Aucune entité centralisée ne détient vos clés privées ni ne peut accéder à vos fonds.",
  mt4: "MetaTrader 4 — logiciel professionnel de trading utilisé depuis 2005 pour créer, tester et exécuter des stratégies automatisées sur les marchés financiers.",
  lock_up: "Période de blocage pendant laquelle les fonds ne peuvent pas être retirés. Chez KalMydas : aucun lock-up, retrait 24/7.",
  layer2: "Réseau secondaire construit au-dessus d'une blockchain principale (comme Ethereum) pour améliorer la vitesse et réduire les coûts de transaction.",
  defi: "Finance Décentralisée — services financiers (échange, prêt, épargne) opérés sur blockchain via des smart contracts, sans intermédiaire bancaire.",
  blockchain: "Registre numérique distribué et infalsifiable. Chaque transaction est enregistrée publiquement et ne peut être modifiée rétroactivement.",
  deflationniste: "Modèle économique où la quantité de jetons en circulation diminue progressivement dans le temps, créant de la rareté (similaire au Bitcoin).",
  forward_test: "Test d'une stratégie en conditions réelles de marché, sans risquer de capital réel. Valide que les résultats du backtest se confirment.",
  stress_test: "Évaluation du comportement d'une stratégie lors de périodes de forte volatilité ou de crises (2008, 2020). Mesure la résilience.",
  testnet: "Réseau de test d'une blockchain utilisant des jetons sans valeur réelle. Permet de tester les applications avant le lancement officiel.",
  solidity: "Langage de programmation utilisé pour écrire des smart contracts sur Ethereum et ses réseaux compatibles (dont Arbitrum).",
  oracle: "Service qui transmet des données du monde réel (prix, résultats) vers la blockchain. Permet aux smart contracts d'interagir avec des informations externes.",
  epoch: "Période de temps définie dans un protocole. Chez KalMydas, les récompenses LP sont distribuées par époques avec des montants décroissants.",
  flywheel: "Boucle de valeur auto-renforçante : les gains génèrent des frais, qui rachètent du KAL, ce qui augmente le prix, attirant plus de participants.",
  fonds_institutionnels: "Structures financières gérant des capitaux importants (banques, fonds de pension, hedge funds). Disposent d'outils de trading avancés auxquels les particuliers n'ont traditionnellement pas accès.",
  arbitrum_sepolia: "Version de test du réseau Arbitrum. Permet de tester les contrats et l'application sans utiliser de fonds réels avant le lancement officiel.",
  orderbook: "Carnet d'ordres — système qui met en relation acheteurs et vendeurs sur un marché. Chez KalMydas, le prix est déterminé par la courbe de valorisation, sans orderbook.",
  vekal: "KAL verrouillé pour la gouvernance (vote-escrowed) — mécanisme inspiré de Curve Finance. En bloquant des KAL, vous recevez des veKAL qui donnent droit au partage des frais en USDC et au vote sur les paramètres du protocole.",
  erc4626: "Norme technique pour les coffres-forts tokenisés sur Ethereum. Permet la composition automatique des gains (auto-compound) de manière standardisée.",
  pol: "Protocol-Owned Liquidity — liquidité détenue directement par le protocole (pas par des utilisateurs). Garantit une liquidité permanente même si les fournisseurs se retirent.",
  rwa: "Real World Assets — actifs du monde réel (bons du Trésor, immobilier) tokenisés sur la blockchain. Offrent une performance décorrélée du marché crypto.",
  base_l2: "Réseau Layer 2 sur Ethereum, optimisé pour les applications grand public. Mainnet KalMydas prévu sur Base.",
};

// Current glossary language (default FR, switched by i18n.js)
let _glossaryLang = document.documentElement.lang || 'fr';

window._glossarySetLang = function(lang) {
  _glossaryLang = lang;
};

function getGlossaryDef(key) {
  if (_glossaryLang === 'en' && typeof GLOSSARY_DEFS_EN !== 'undefined' && GLOSSARY_DEFS_EN[key]) {
    return GLOSSARY_DEFS_EN[key];
  }
  return GLOSSARY_DEFS[key];
}

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
    const def = getGlossaryDef(key);
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
