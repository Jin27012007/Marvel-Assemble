# Integração de animações

O utilitário `sprite-player.js` foi adicionado para reproduzir spritesheets horizontais no Canvas 2D. Ele suporta loop, animações de uma execução, atualização por delta time e inversão horizontal.

Exemplo:

```html
<script src="assets/sprites/sprite-player.js"></script>
<script>
const img = new Image();
img.src = "assets/sprites/ironman/idle.png";
img.onload = () => {
  const player = new SpritePlayer();
  player.add("idle", img, 96, 96, 8, true);
  player.play("idle");
  // No loop principal:
  // player.update(deltaSeconds);
  // player.draw(ctx, x, y, 96, 96, olhandoParaEsquerda);
};
</script>
```

Importante: o exemplo pressupõe um arquivo horizontal de frames iguais, cada um com 96×96 pixels. A folha fornecida tem frames com dimensões e espaçamentos variados, então os recortes precisam ser limpos e exportados nesse formato antes de usar o exemplo. Não apontar o código para a folha inteira.

Estado: player de animação pronto; recortes de referência disponíveis localmente no pacote de assets; exportação final de frames transparentes padronizados e integração ao protótipo ainda pendentes.
