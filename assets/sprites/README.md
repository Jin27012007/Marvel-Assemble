# Personagens e sprites do Marvel Assemble

Este diretório contém os recursos visuais do jogo. Para evitar retrabalho com novos personagens, siga o padrão abaixo. O protótipo atual ainda carrega Iron Man diretamente pelo código; catálogo automático será uma etapa futura.

## Estrutura por personagem

```text
assets/sprites/
  ironman/
    idle.png
    walk-4frames.png
    portrait.png
  spiderman/
    idle.png
    walk-4frames.png
    portrait.png
```

Cada personagem deve ter sua própria pasta com um ID em minúsculas, sem espaços nem acentos.

## Dimensões e alinhamento

- **Idle:** PNG com fundo transparente, personagem inteiro.
- **Walk:** uma folha horizontal de 4 quadros de tamanho idêntico. Cada quadro deve conter o personagem inteiro, não pode tocar nas bordas e deve alinhar os pés e o centro do corpo com os outros quadros.
- **Retrato:** PNG quadrado de 128×128 px, com fundo transparente. Deixe aproximadamente 16–20 px de margem transparente em cada lado; centralize o rosto. Não faça o desenho encostar nas bordas. O perfil do jogo controla o tamanho de exibição.
- **Personagem padrão:** mantenha a caixa de origem e a escala visual consistentes com Iron Man. Atualmente o jogo desenha o corpo a 76 unidades lógicas de altura e calcula a largura a partir da proporção da imagem. Não altere a hitbox para acomodar uma imagem maior.
- Personagens deliberadamente grandes, como Hulk, deverão receber escala visual individual em um futuro catálogo de personagens, sem mudar a escala dos demais.

## Regras para evitar problemas

1. Use PNG verdadeiro com canal alfa (transparência). Não use uma captura de tela nem um arquivo Base64 salvo como texto.
2. Mantenha nomes exatos: `idle.png`, `walk-4frames.png`, `portrait.png`.
3. Ao substituir um sprite, preserve o tamanho dos quadros e o alinhamento; nesse caso não deve ser necessário editar `index.html`.
4. Ao remover um personagem, procure todas as referências ao seu ID e apague apenas a pasta dele depois de conferir se não há dependências.
5. Ao adicionar vários personagens, atualize o futuro catálogo central, em vez de espalhar caminhos de imagem pelo jogo.

## Estado atual

O jogo ainda carrega apenas os sprites de Iron Man diretamente em `index.html`. Este documento é um padrão de preparação dos arquivos, não um sistema automático de importação. A seleção genérica por personagem ainda precisará ser implementada separadamente.
