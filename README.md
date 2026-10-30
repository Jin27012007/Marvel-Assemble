# Marvel Assemble

Protótipo inicial de um hero shooter 2D lateral em HTML5/Canvas, começando pelo Homem de Ferro numa arena de treino em Nova York.

## Como executar

Abra `index.html` em um navegador moderno. Para editar/testar pelo celular, você pode usar um ambiente de desenvolvimento HTML ou hospedar o repositório com GitHub Pages.

## Oficina de sprites

Para padronizar sprites de novos personagens sem mexer na jogabilidade, use a [Oficina de Sprites](assets/sprites/sprite-workbench.html) e siga o [guia de sprites](docs/SPRITE_PIPELINE.md). A oficina normaliza pose parada, caminhada e retrato para tamanhos consistentes. O jogo carrega os dados do catálogo externo `assets/sprites/character-catalog.js`; veja `docs/SPRITE_PIPELINE.md` para adicionar personagens sem mexer na lógica principal. O cadastro de cada personagem ainda é manual, pois o GitHub Pages não permite descobrir pastas automaticamente.

## Controles

- `A`/`D` ou setas esquerda/direita: mover
- `Espaço` ou seta para cima: saltar
- `J`: repulsor
- `K`: rajada
- `L`: míssil
- `U`: sobrecarga

O painel Modo Treino oferece invencibilidade, energia infinita, geração de drones, torres de teste, restauração de HP/energia e limpeza de inimigos.

## Menu e catálogo de personagens

A tela inicial usa um carrossel horizontal rolável com Jogar, Treino e Configurações. Jogar e Treino abrem a mesma seleção de personagem; no Treino, o painel de opções fica recolhido e pode ser aberto por um botão. Configurações inclui controles na tela e tela cheia. O catálogo usa uma estrutura de dados por personagem e, nesta versão, inclui Iron Man e um modelo genérico de teste. Novos heróis precisam dos sprites e de uma entrada em `assets/sprites/character-catalog.js`.

## Estado do projeto

Esta é uma prova de conceito local, não a versão completa. Seleção de personagens, equipes 6v6, três torres por equipe, sprites finais e multiplayer ainda serão implementados.