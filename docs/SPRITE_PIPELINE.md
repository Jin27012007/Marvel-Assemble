# Pipeline de sprites — Marvel Assemble

## Regra principal
O motor não deve conhecer caminhos de arquivos de personagens. Toda arte é definida em `assets/sprites/character-catalog.js`. O personagem selecionado informa portrait, animações e habilidades. Para adicionar outro herói, crie sua pasta e inclua um objeto no catálogo; não edite `index.html`.

## Estrutura recomendada

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
    walk-6frames.png

a assets/skills/                  # Pode ser usada por qualquer personagem
  Elevação de Ego - Salto1.png
  Elevação de Ego1.png ...
```

## Contrato do catálogo
Cada personagem tem `id`, `name`, `visual`, `portrait`, `maxHp`, `maxEn`, `animations` e `skills`. Exemplo:

```js
{
  id: "spiderman",
  name: "SPIDER-MAN",
  visual: "sprite",
  portrait: "assets/sprites/spiderman/portrait.png",
  maxHp: 280,
  maxEn: 220,
  animations: {
    idle: { src: "assets/sprites/spiderman/idle.png", frames: 1, fps: 1, loop: true },
    walk: { src: "assets/sprites/spiderman/walk-6frames.png", frames: 6, fps: 10, loop: true },
    flight: { pattern: "assets/sprites/spiderman/flight{frame}.png", frames: 4, fps: 8, loop: true }
  },
  skills: {
    "Teia": { pattern: "assets/sprites/spiderman/Teia{frame}.png", frames: 5, fps: 12, loop: false }
  }
}
```

Para uma animação em arquivos separados use `pattern` com o marcador `{frame}` (começa em 1). Para uma spritesheet horizontal use `src` e informe `frames`; a largura total precisa ser divisível pelo número de quadros.

## Regras para evitar leitura incorreta
- PNG recomendado, com transparência real; não apague pixels de contorno automaticamente.
- Em spritesheet horizontal, todos os quadros devem ter a mesma largura e altura e estar lado a lado, sem espaçadores externos.
- O carregador valida imagem carregada, dimensões positivas e divisibilidade da largura pelo número de quadros. Arquivo ausente ou folha incompatível é ignorado e cai para arte genérica em vez de quebrar o jogo.
- Use o mesmo tamanho de tela por quadro na mesma animação. Deixe margem transparente interna para evitar cortar mãos, pés ou efeitos.
- Retrato é imagem individual, não spritesheet. Preferência por 128×128 px.
- Idle pode ser imagem individual ou spritesheet de um quadro. Walk padrão tem quatro quadros, mas pode ter qualquer quantidade declarada no catálogo.

## Skins
Uma skin é um conjunto alternativo de caminhos de arte no mesmo contrato. Uma skin não deve exigir lógica de combate nova. Ao adicionar skins, mantenha o mesmo conjunto de animações e proporções para que o motor continue independente da aparência.

## Habilidades
As habilidades ficam em `skills` no objeto do personagem. O catálogo `assets/skills/skill-catalog.js` contém apenas padrões compartilhados. Arquivos numerados usam `{frame}` e começam em 1. Quando uma habilidade não possui sequência, o jogo mantém o efeito visual procedural.

## Limites conhecidos
O GitHub Pages não lista pastas automaticamente; o registro de personagens e nomes dos arquivos ainda é manual no catálogo. O carregador faz verificações estruturais, mas não consegue determinar sozinho se a arte está visualmente correta ou se um quadro tem o personagem cortado. Essa conferência ainda exige abrir o jogo ou inspecionar as imagens.
