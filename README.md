# Marvel Assemble

Protótipo inicial de um hero shooter 2D lateral em HTML5/Canvas, começando pelo Homem de Ferro numa arena de treino em Nova York.

## Como executar

Abra `index.html` em um navegador moderno. Para editar/testar pelo celular, você pode usar um ambiente de desenvolvimento HTML ou hospedar o repositório com GitHub Pages.

## Oficina de sprites

Para padronizar sprites de novos personagens sem mexer na jogabilidade, use a [Oficina de Sprites](assets/sprites/sprite-workbench.html) e siga o [guia de sprites](docs/SPRITE_PIPELINE.md). A oficina normaliza pose parada, caminhada e retrato para tamanhos consistentes. O protótipo ainda carrega apenas Iron Man diretamente no código; seleção automática de outros personagens é uma etapa futura.

## Controles

- `A`/`D` ou setas esquerda/direita: mover
- `Espaço` ou seta para cima: saltar
- `J`: repulsor
- `K`: rajada
- `L`: míssil
- `U`: sobrecarga

O painel Modo Treino oferece invencibilidade, energia infinita, geração de drones, torres de teste, restauração de HP/energia e limpeza de inimigos.

## Menu e catálogo de personagens

A tela inicial oferece Jogar, Treino e Configurações. Jogar abre a seleção de personagem; Treino abre a arena com o painel de treino; Configurações inclui controles na tela e tela cheia. O catálogo usa uma estrutura de dados por personagem e, nesta versão, inclui Iron Man e um modelo genérico de teste. Novos heróis precisarão de seus sprites e de uma entrada no catálogo; o catálogo já está preparado para expandir, mas ainda não é um sistema de importação automática de pastas.

## Estado do projeto

Esta é uma prova de conceito local, não a versão completa. Seleção de personagens, equipes 6v6, três torres por equipe, sprites finais e multiplayer ainda serão implementados.