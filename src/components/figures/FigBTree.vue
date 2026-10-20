<template>
  <svg
    viewBox="0 0 320 250"
    class="block h-auto w-full"
    role="img"
    aria-labelledby="fig002-title"
    fill="none"
    stroke="#1342ff"
    stroke-width="1.25"
  >
    <title id="fig002-title">
      Busca pelo id 31 em um índice B-tree: da raiz com as chaves 20 e 40 até a folha com 24 e 31, e
      dali para a linha da tabela.
    </title>
    <defs>
      <marker id="fig002-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="#1342ff" stroke="none" />
      </marker>
    </defs>

    <text x="10" y="20" class="fig-label" stroke="none">WHERE id = 31</text>

    <!-- Raiz -->
    <rect x="120" y="40" width="80" height="24" fill="#fff" />
    <line x1="160" y1="40" x2="160" y2="64" />
    <text x="140" y="56" text-anchor="middle" class="fig-label" stroke="none">20</text>
    <text x="180" y="56" text-anchor="middle" class="fig-label" stroke="none">40</text>
    <text x="208" y="56" class="fig-label-sm" stroke="none">RAIZ</text>

    <!-- Ponteiros -->
    <line x1="122" y1="64" x2="50" y2="118" stroke="#97acff" />
    <line x1="160" y1="64" x2="160" y2="116" stroke-width="2.5" marker-end="url(#fig002-arrow)" />
    <line x1="198" y1="64" x2="270" y2="118" stroke="#97acff" />

    <!-- Folhas -->
    <text x="10" y="112" class="fig-label-sm" stroke="none">FOLHAS</text>
    <g v-for="(node, i) in [['5', '12'], ['24', '31'], ['47', '58']]" :key="i">
      <rect :x="10 + i * 110" y="120" width="80" height="24" :fill="i === 1 ? '#e6ebff' : '#fff'" />
      <line :x1="50 + i * 110" y1="120" :x2="50 + i * 110" y2="144" />
      <rect v-if="i === 1" x="160" y="120" width="40" height="24" fill="#1342ff" />
      <text :x="30 + i * 110" y="136" text-anchor="middle" class="fig-label" stroke="none">{{ node[0] }}</text>
      <text
        :x="70 + i * 110"
        y="136"
        text-anchor="middle"
        class="fig-label"
        stroke="none"
        :style="i === 1 ? 'fill: #fff' : undefined"
      >
        {{ node[1] }}
      </text>
    </g>
    <line x1="90" y1="132" x2="116" y2="132" stroke="#97acff" marker-end="url(#fig002-arrow)" />
    <line x1="200" y1="132" x2="226" y2="132" stroke="#97acff" marker-end="url(#fig002-arrow)" />

    <!-- Linha da tabela -->
    <line x1="180" y1="144" x2="180" y2="186" stroke-dasharray="3 3" marker-end="url(#fig002-arrow)" />
    <rect x="120" y="190" width="120" height="26" fill="#fff" />
    <text x="180" y="207" text-anchor="middle" class="fig-label-sm" stroke="none">LINHA id=31</text>

    <text x="10" y="242" class="fig-label-sm" stroke="none">O(log n) EM VEZ DE O(n)</text>
  </svg>
</template>
