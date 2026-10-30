# Pipeline de personagens e skins — Marvel Assemble

## Princípio de arquitetura

Personagens são dados e assets isolados. `index.html` contém apenas o motor de jogo, não deve conter caminhos fixos para um herói específico. Catálogo de personagens: `assets/sprites/character-catalog.js`. Os sprites de cada herói vivem em `assets/sprites/<id>/`.

## Layout de um personagem

```text
assets/sprites/
  character-catalog.js
  ironman/
    portrait.png
    idle.png
    walk-4frames.png
  spiderman/
    portrait.png
    idle.png
    walk-4frames.png
```

- `portrait.png`: 128×128 px.
- `idle.png`: um quadro de 90×90 px.
- `walk-4frames.png`: quatro quadros 90×90 lado a lado, folha 360×90 px.
- PNG com transparência real; manter margens e pés completos dentro da caixa de cada quadro.

## Adicionar personagem

1. Crie `assets/sprites/<id>/` e envie os três arquivos PNG.
2. Copie um objeto em `character-catalog.js` e altere ID, nome, caminhos, HP e EN.
3. O seletor, HUD e carregador usam os mesmos campos do objeto. Não inclua lógica especial por nome/ID no motor.
4. Teste idle, caminhada, retrato e troca de personagem antes de adicionar skins.

## Skins e atualizações

Uma skin é uma variação visual do mesmo personagem: use uma pasta/ID de variante ou `skin` adicional no futuro, sem duplicar a implementação de combate. Todas as versões devem usar o mesmo contrato de assets. A seleção da skin só troca caminhos de PNG e metadados visuais, mantendo o ID lógico do personagem e os mesmos atributos, salvo decisão explícita de balanceamento.

## Habilidades

`assets/skills/skill-catalog.js` é o catálogo de animações. Para cada sequência, informe `frames`, `fps` e `loop`. Os arquivos ficam em `assets/skills/<nome><número>.png`, começando no número 1.

## Limites atuais

O cadastro ainda é uma entrada manual no catálogo; o navegador do GitHub Pages não enumera pastas automaticamente. A seleção de personagem e carregamento de idle/walk/portrait são genéricos, mas novas classes de poderes, animações e hitboxes ainda podem exigir configuração própria. Não alterar o motor para trocar apenas arte.