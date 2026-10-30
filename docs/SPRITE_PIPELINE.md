# Pipeline definitivo de sprites — Marvel Assemble

## Personagens

Cada personagem tem uma pasta `assets/sprites/<id>/`, com ID em minúsculas e sem espaços ou acentos. Os dados de seleção ficam em `assets/sprites/character-catalog.js`.

```text
assets/sprites/
  character-catalog.js
  ironman/
    idle.png
    walk-4frames.png
    portrait.png
  spiderman/
    idle.png
    walk-4frames.png
    portrait.png
```

- `idle.png`: 90×90 px, um quadro parado, PNG com transparência real.
- `walk-4frames.png`: 360×90 px, quatro quadros de 90×90 em uma folha horizontal.
- `portrait.png`: 128×128 px, PNG quadrado com transparência.
- Todos os quadros devem usar a mesma caixa e linha de base dos pés. Não corte pés ou contornos rente à borda.
- A oficina em `assets/sprites/sprite-workbench.html` ajuda a preparar os arquivos; confira a prévia antes de publicar.

### Adicionar um personagem

1. Crie `assets/sprites/<id>/` e coloque os três PNGs com os nomes exatos acima.
2. Copie um objeto em `assets/sprites/character-catalog.js`.
3. Altere `id`, `name`, `subtitle`, caminhos dos PNGs, `maxHp` e `maxEn`. Mantenha `visual: "sprite"` e `available: true`.
4. Faça commit e teste a seleção e a animação no navegador.

O jogo carrega o catálogo externo, então não é necessário alterar a lógica principal em `index.html` para cada herói. O cadastro continua manual: GitHub Pages não permite ao navegador descobrir automaticamente todas as pastas do repositório.

## Habilidades

As sequências são configuradas em `assets/skills/skill-catalog.js`. Para cada ataque, defina `frames`, `fps` e `loop`. O jogo procura arquivos em `assets/skills/<nome do ataque><número>.png`.

Exemplo: `Cruzado Tech1.png`, `Cruzado Tech2.png`. O número começa em 1 e indica a ordem do quadro. Para adicionar quadros, envie os PNGs e atualize `frames`; não altere o renderizador.

## Validação antes de publicar

- PNG abre corretamente e tem canal alfa; não use fundo preto no lugar de transparência.
- Nenhum pixel do personagem ou dos pés encosta ou é cortado pela borda.
- Todos os quadros de uma sequência têm dimensões iguais.
- Os nomes e a quantidade de quadros correspondem ao catálogo.
- Teste a prévia e o jogo; sintaxe JavaScript válida não garante aparência visual.

## Escala

O padrão de personagem comum é 90×90 px. Personagens maiores devem receber ajuste individual no catálogo, sem alterar a escala global nem a hitbox de todos.
