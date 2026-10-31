# Pipeline de sprites — Marvel Assemble

## Carregamento ativo

O jogo lê `assets/sprites/character-catalog.js` e `assets/skills/skill-catalog.js` antes do motor inline em `index.html`. O primeiro define os personagens; o segundo oferece configurações de habilidade compartilhadas. A configuração do personagem tem prioridade sobre a global.

## Estrutura do Iron Man

```
assets/sprites/ironman/
  idle.png
  walk-4frames.png
  portrait.png
assets/skills/
  Elevação de Ego - Salto1.png
  Elevação de Ego1.png ... Elevação de Ego4.png
  Elevação de Ego - Pouso1.png ... Pouso3.png
  Repulsor tiro 1 1.png ... 2.png
  Repulsor tiro 2 1.png ... 2.png
  Repulsor carregado1.png ... 5.png
```

Os sprites de personagem usam imagem individual para idle/retrato e spritesheet horizontal para caminhada. Os efeitos de repulsor são PNGs separados numerados; cada arquivo de 360×360 funciona como um quadro-canvas individual, não como uma spritesheet horizontal recortável.

## Contrato

Cada personagem pode declarar `id`, `name`, `visual`, `portrait`, atributos, `animations` e `skills`. Uma habilidade com arquivos separados usa `pattern` com o marcador `{frame}`, começando em 1. O carregador cria e mantém imagens em cache.

## Regras de validação

- Uma imagem só é desenhada depois que `complete` e dimensões naturais válidas são confirmadas.
- Spritesheets horizontais devem ter largura divisível pela contagem `frames`.
- PNGs de efeito 360×360 separados devem ser desenhados como uma imagem inteira. Não aplicar o corte de spritesheet a esses arquivos.
- Arquivos de referência não cadastrados no catálogo não são carregados pelo jogo.
- A existência de um arquivo no GitHub não garante que a pose esteja visualmente alinhada à mão, pé ou ponto de emissão; essa etapa exige comparação visual no navegador.

## Limites

O GitHub Pages não descobre automaticamente pastas. Personagens e caminhos são declarados manualmente. A renderização atual do personagem e as mecânicas ainda vivem em `index.html`; módulos auxiliares como `sprite-player.js` não são dependências ativas do jogo principal. A adição de novos personagens necessita de revisão dos comportamentos específicos que hoje dependem do Iron Man.
