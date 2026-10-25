<script setup lang="ts">
const actors = [
  { x: 38, label: 'CLIENTE' },
  { x: 140, label: 'API' },
  { x: 215, label: 'ESTOQUE' },
  { x: 284, label: 'PAGAMENTO' },
]

const messages = [
  { y: 66, from: 38, to: 136, label: 'POST /checkout' },
  { y: 100, from: 144, to: 215, label: 'reservar()' },
  { y: 124, from: 215, to: 144, label: 'ok', reply: true },
  { y: 158, from: 144, to: 284, label: 'autorizar()' },
  { y: 182, from: 284, to: 144, label: 'aprovado', reply: true },
  { y: 246, from: 136, to: 38, label: '201 created', reply: true },
]
</script>

<template>
  <svg
    viewBox="0 0 320 300"
    class="block h-auto w-full"
    role="img"
    aria-labelledby="fig003-title"
    fill="none"
    stroke="#1342ff"
    stroke-width="1.25"
  >
    <title id="fig003-title">
      Diagrama de sequência de um checkout: o cliente envia o pedido para a API, que reserva o estoque,
      autoriza o pagamento, publica o evento pedido.criado no Kafka e responde 201.
    </title>
    <defs>
      <marker id="fig003-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="#1342ff" stroke="none" />
      </marker>
    </defs>

    <g v-for="actor in actors" :key="actor.label">
      <line :x1="actor.x" y1="36" :x2="actor.x" y2="290" stroke="#97acff" stroke-dasharray="3 3" />
      <rect :x="actor.x - 34" y="14" width="68" height="22" fill="#fff" />
      <text :x="actor.x" y="29" text-anchor="middle" class="fig-label-sm" stroke="none">{{ actor.label }}</text>
    </g>

    <rect x="136" y="56" width="8" height="196" fill="#e6ebff" />

    <g v-for="message in messages" :key="message.y">
      <line
        :x1="message.from"
        :y1="message.y"
        :x2="message.to"
        :y2="message.y"
        :stroke-dasharray="message.reply ? '3 3' : undefined"
        marker-end="url(#fig003-arrow)"
      />
      <text
        :x="(message.from + message.to) / 2"
        :y="message.y - 5"
        text-anchor="middle"
        class="fig-label-xs"
        stroke="none"
      >
        {{ message.label }}
      </text>
    </g>

    <rect x="152" y="200" width="150" height="24" fill="#e6ebff" />
    <text x="227" y="216" text-anchor="middle" class="fig-label-xs" stroke="none">pedido.criado → kafka</text>
  </svg>
</template>
