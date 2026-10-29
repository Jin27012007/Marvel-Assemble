# Fluxo de sprites de personagens — Marvel Assemble

Use a **[Oficina de Sprites](../assets/sprites/sprite-workbench.html)** para preparar as imagens pelo navegador, inclusive no celular. A ferramenta não altera `index.html` nem envia suas imagens a um servidor: ela padroniza e permite baixar os PNGs.

## Padrão único

Cada personagem tem uma pasta própria em `assets/sprites/<id>/`, com ID em minúsculas, sem espaços nem acentos.

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

- `idle.png`: um quadro de 90×90 px.
- `walk-4frames.png`: folha horizontal de 360×90 px, formada por quatro quadros de 90×90 px.
- `portrait.png`: imagem quadrada de 128×128 px, com o rosto centralizado e margem transparente.

A oficina recorta automaticamente margens transparentes do conteúdo, redimensiona a pose parada e os quatro quadros de caminhada usando a **mesma escala**, centraliza os quadros e alinha os pés. Isso reduz variação de tamanho entre personagens e evita que a animação dê saltos por mudar de escala entre quadros. O retrato é centralizado dentro de uma caixa com margem ajustável.

## Para adicionar ou substituir sprites

1. Abra a [Oficina de Sprites](../assets/sprites/sprite-workbench.html).
2. Informe um ID de pasta e selecione os PNGs de pose parada, caminhada (quatro quadros horizontais iguais) e retrato.
3. Confira os três resultados na prévia. Caso o desenho tenha fundo sólido em vez de transparência real, corrija o arquivo de origem primeiro.
4. Baixe `idle.png`, `walk-4frames.png` e `portrait.png`.
5. Envie os arquivos para `assets/sprites/<id>/` no GitHub, substituindo os arquivos existentes quando estiver atualizando um personagem.

Para editar um sprite, repita o processo com a imagem nova. Para retirar um personagem, confirme antes que nenhuma tela ou catálogo o referencia e remova só a pasta dele.

## O que fica fixo

O padrão de quadros para personagens normais é 90×90 px; não mude o tamanho de quadros por personagem. Personagens propositalmente grandes, como Hulk, precisarão de uma escala individual em um futuro catálogo de personagens, não de alteração da escala global nem da hitbox de todos.

## Limite importante do protótipo

Hoje, o jogo carrega Iron Man diretamente pelo código. A oficina padroniza os assets sem mexer na jogabilidade, mas **não torna um novo personagem selecionável automaticamente**. Para que adicionar ou remover uma pasta no futuro seja suficiente sem editar o código do jogo, ainda será necessário implementar um catálogo/carregador genérico de personagens. Não confunda a padronização dos arquivos com essa integração futura.
