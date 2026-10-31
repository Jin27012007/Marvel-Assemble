# Marvel Assemble

Protótipo 2D em HTML5 Canvas de combate com personagens Marvel, construído para navegador e hospedado no GitHub Pages.

## Executar

Abra a versão publicada: https://jin27012007.github.io/Marvel-Assemble/

Para rodar localmente, sirva a pasta do projeto em um servidor HTTP simples e abra `index.html`. O projeto não usa bibliotecas externas: o motor está no HTML e os catálogos de personagem e habilidades são scripts locais.

## Estrutura atual

- `index.html`: loop, física, câmera, UI, combate, teclado e controles por toque.
- `assets/sprites/character-catalog.js`: personagens, atributos, caminhos de idle, caminhada, voo, pouso e habilidades.
- `assets/skills/skill-catalog.js`: padrões globais opcionais de animações de habilidades.
- `assets/sprites/ironman/`: idle, caminhada e retrato do Iron Man.
- `assets/skills/`: animações de voo, pouso, repulsor simples e carregado.

## Controles

- Analógico virtual: esquerda/direita move; cima/baixo troca de faixa ou altitude no voo.
- Botão Repulsor: dois tiros leves em sequência e, no terceiro ciclo, disparo carregado.
- Elevação de Ego: ativa/desativa voo.
- Trava de Bombardeio: ativa seleção de alvos; toque nos drones para distribuir até cinco mísseis e pressione de novo para lançar.
- Cruzado Tech: golpe em duas fases.
- Teclado: A/D ou setas horizontais movem; F/J disparam repulsor; E alterna voo; I/O ou setas verticais mudam faixa; Espaço/W/Seta para cima atuam no eixo vertical conforme o estado de voo.

## Estado conhecido e limitações

Este é um protótipo, não um jogo completo. A partida e o treino usam uma arena de teste; o treino gera um alvo estacionário e opções de depuração. O projeto ainda não implementa multiplayer, partidas 6v6, equipes completas, campanha, balanceamento final nem suporte integral de todos os heróis.

A auditoria de 31/10/2026 encontrou e corrigiu a escala/âncora da animação de repulsor, a sobreposição do efeito com a pose base de voo, a guarda de imagens ainda não carregadas, a ligação independente do botão de ajuda nas configurações e caminhos globais de três animações antigas que não existiam. A validação do GitHub Actions confirma o empacotamento e a publicação, não substitui teste visual em navegador Android.
