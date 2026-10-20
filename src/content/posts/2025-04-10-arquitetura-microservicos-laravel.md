---
title: "Arquitetura de Microserviços com Laravel"
slug: "arquitetura-microservicos-laravel"
date: "2025-04-10"
category: "Arquitetura"
tags: ["laravel", "microservices", "php"]
description: "Como dividir um monolito Laravel em microserviços de forma gradual e segura."
published: false
upcoming: true
---

Migrar de um monolito para microserviços é uma decisão importante. Neste post, compartilho minha experiência liderando essa transição na Leroy Merlin.

## Quando migrar?

Nem sempre microserviços são a resposta. Antes de decidir, considere:

- Tamanho da equipe (mais de 10 desenvolvedores?)
- Domínios de negócio bem definidos?
- Necessidade de escalar partes específicas?

## O padrão Strangler Fig

A melhor forma de migrar é gradualmente. Usamos o padrão Strangler Fig para ir substituindo partes do monolito aos poucos.

## Lições aprendidas

- Comece pequeno
- Invista em observabilidade desde o início
- Mantenha contratos claros entre serviços

A jornada é longa, mas os benefícios compensam.
