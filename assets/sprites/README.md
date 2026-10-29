# Personagens e sprites — Marvel Assemble

**Comece pela [Oficina de Sprites](./sprite-workbench.html)**. Ela funciona no navegador e prepara os PNGs com dimensões consistentes para você baixar e enviar ao GitHub.

## Estrutura obrigatória

```text
assets/sprites/<id>/
  idle.png
  walk-4frames.png
  portrait.png
```

IDs simples em minúsculas: `ironman`, `spiderman`, `hulk`. Não use espaços nem acentos.

## Formatos finais

| Arquivo | Tamanho | Conteúdo |
|---|---:|---|
| `idle.png` | 90×90 px | Pose parada em um único quadro transparente |
| `walk-4frames.png` | 360×90 px | Quatro quadros horizontais de 90×90 px |
| `portrait.png` | 128×128 px | Retrato centralizado com margem transparente |

A oficina aplica a mesma escala à pose parada e a todos os quadros de caminhada, alinha os pés e retira margens transparentes variáveis para que os personagens mantenham tamanho consistente. O retrato recebe margem transparente e pode ser aumentado ou reduzido sem cortar as bordas.

Para instruções completas, consulte o [guia de fluxo de sprites](../../docs/SPRITE_PIPELINE.md).

**Limite atual:** o jogo ainda carrega Iron Man diretamente no código. A oficina facilita preparar/substituir os assets sem alterar a jogabilidade, mas a adição automática de personagens sem mexer no código exige futuramente um catálogo/carregador genérico.
