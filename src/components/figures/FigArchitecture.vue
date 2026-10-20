<template>
  <svg
    viewBox="0 0 760 470"
    class="block h-auto w-full min-w-[600px]"
    role="img"
    aria-labelledby="fig001-title"
    fill="none"
    stroke="#1342ff"
    stroke-width="1.25"
  >
    <title id="fig001-title">
      Diagrama de uma requisição passando por cliente, balanceador de carga, três instâncias de API,
      cache Redis, fila Kafka com três partições, workers em Go e banco PostgreSQL.
    </title>
    <defs>
      <marker id="fig001-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="#1342ff" stroke="none" />
      </marker>
    </defs>

    <!-- Cliente -->
    <rect x="20" y="180" width="120" height="86" fill="#fff" />
    <line x1="20" y1="194" x2="140" y2="194" />
    <circle cx="29" cy="187" r="2" fill="#b9c7fd" stroke="none" />
    <circle cx="36" cy="187" r="2" fill="#b9c7fd" stroke="none" />
    <circle cx="43" cy="187" r="2" fill="#b9c7fd" stroke="none" />
    <rect x="30" y="204" width="70" height="6" fill="#b9c7fd" stroke="none" />
    <rect x="30" y="216" width="96" height="4" fill="#e6ebff" stroke="none" />
    <rect x="30" y="226" width="88" height="4" fill="#e6ebff" stroke="none" />
    <rect x="30" y="242" width="42" height="12" fill="#1342ff" stroke="none" />
    <text x="80" y="284" text-anchor="middle" class="fig-label" stroke="none">CLIENTE</text>
    <line x1="51" y1="256" x2="51" y2="306" stroke-dasharray="2 3" />
    <text x="20" y="320" class="fig-label-sm" stroke="none">CLIQUE EM “COMPRAR”</text>

    <!-- Balanceador -->
    <line x1="140" y1="223" x2="188" y2="223" marker-end="url(#fig001-arrow)" />
    <polygon points="222,193 252,223 222,253 192,223" fill="#e6ebff" />
    <text x="222" y="227" text-anchor="middle" class="fig-label" stroke="none">LB</text>
    <text x="222" y="180" text-anchor="middle" class="fig-label-sm" stroke="none">BALANCEADOR</text>

    <!-- APIs -->
    <text x="290" y="114" class="fig-label-sm" stroke="none">ESCALA HORIZONTAL</text>
    <line x1="252" y1="223" x2="286" y2="151" marker-end="url(#fig001-arrow)" />
    <line x1="252" y1="223" x2="286" y2="223" marker-end="url(#fig001-arrow)" />
    <line x1="252" y1="223" x2="286" y2="295" marker-end="url(#fig001-arrow)" />
    <g v-for="y in [128, 200, 272]" :key="y">
      <rect x="290" :y="y" width="120" height="46" fill="#fff" />
      <text x="300" :y="y + 17" class="fig-label-sm" stroke="none">API · HTTP</text>
      <rect x="300" :y="y + 26" width="60" height="5" fill="#b9c7fd" stroke="none" />
      <rect x="300" :y="y + 35" width="40" height="5" fill="#e6ebff" stroke="none" />
    </g>

    <!-- Cache -->
    <line x1="410" y1="140" x2="466" y2="84" marker-end="url(#fig001-arrow)" />
    <text x="420" y="96" class="fig-label-sm" stroke="none" transform="rotate(-45 420 96)">LEITURA</text>
    <rect x="470" y="40" width="130" height="60" fill="#e6ebff" />
    <text x="480" y="58" class="fig-label-sm" stroke="none">CACHE · REDIS</text>
    <rect
      v-for="i in 5"
      :key="i"
      :x="480 + (i - 1) * 22"
      y="70"
      width="18"
      height="14"
      :fill="i === 3 ? '#1342ff' : '#fff'"
    />

    <!-- Kafka -->
    <text x="700" y="162" text-anchor="end" class="fig-label-sm" stroke="none">EVENTOS ASSÍNCRONOS</text>
    <line x1="410" y1="223" x2="466" y2="223" marker-end="url(#fig001-arrow)" />
    <rect x="470" y="170" width="230" height="106" fill="#fff" />
    <text x="480" y="186" class="fig-label-sm" stroke="none">KAFKA · TOPIC pedidos</text>
    <g v-for="(filled, lane) in [6, 4, 7]" :key="lane">
      <text x="478" :y="210 + lane * 24" class="fig-label-sm" stroke="none">P{{ lane }}</text>
      <rect
        v-for="cell in 8"
        :key="cell"
        :x="500 + (cell - 1) * 24"
        :y="199 + lane * 24"
        width="20"
        height="14"
        :fill="cell === filled ? '#1342ff' : cell < filled ? '#97acff' : '#fff'"
        :stroke="cell <= filled ? '#1342ff' : '#b9c7fd'"
      />
    </g>

    <!-- Workers -->
    <line x1="525" y1="276" x2="525" y2="318" marker-end="url(#fig001-arrow)" />
    <text x="533" y="302" class="fig-label-sm" stroke="none">CONSUMIDORES</text>
    <rect x="478" y="322" width="110" height="44" fill="#fff" />
    <rect x="470" y="330" width="110" height="44" fill="#fff" />
    <text x="480" y="347" class="fig-label-sm" stroke="none">WORKER · GO</text>
    <rect x="480" y="356" width="56" height="5" fill="#b9c7fd" stroke="none" />

    <!-- Postgres -->
    <line x1="580" y1="352" x2="616" y2="352" marker-end="url(#fig001-arrow)" />
    <path d="M620 330 v74 a50 12 0 0 0 100 0 v-74" fill="#e6ebff" />
    <ellipse cx="670" cy="330" rx="50" ry="12" fill="#fff" />
    <path d="M620 355 a50 12 0 0 0 100 0" />
    <path d="M620 380 a50 12 0 0 0 100 0" />
    <text x="670" y="400" text-anchor="middle" class="fig-label-sm" stroke="none">POSTGRES</text>
    <text x="670" y="446" text-anchor="middle" class="fig-label-sm" stroke="none">FONTE DA VERDADE</text>

    <!-- API → Postgres -->
    <path d="M410 295 H450 V458 H670 V422" marker-end="url(#fig001-arrow)" />
    <text x="458" y="450" class="fig-label-sm" stroke="none">SQL</text>
  </svg>
</template>
