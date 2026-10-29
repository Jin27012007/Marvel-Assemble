# Guia de sprites de personagens — Marvel Assemble

Este diretório define o padrão para adicionar, substituir ou remover sprites sem editar o código do jogo a cada personagem.

## Regras fixas

- **Origem das imagens:** `assets/sprites/<id-do-personagem>/`
- Use IDs simples em minúsculas, sem espaços ou acentos: `ironman`, `spiderman`, `hulk`.
- **Sprites de movimento:** use o mesmo tamanho de quadro para todos os personagens padrão. O padrão atual do jogo é altura de desenho de 76 unidades lógicas; o código calcula a largura a partir da proporção da imagem. Não redimensione o hitbox para encaixar a arte.
- **Idle:** `idle.png`, um único quadro em PNG com transparência.
- **Caminhada:** `walk-4frames.png`, quatro quadros horizontais iguais, todos com a mesma largura e altura, em ordem da animação. Cada quadro deve conter o personagem inteiro.
- **Retrato:** `portrait.png`, PNG quadrado com transparência. O desenho deve ficar centralizado com espaço transparente ao redor para poder ser exibido em tamanhos diferentes sem cortar.
- PNGs devem ter fundo transparente, não fundo branco/preto. Preserve pixel art em escala inteira sempre que possível.
- Não coloque margem transparente diferente entre os quadros da animação: alinhe pés e centro do corpo para evitar que o personagem salte durante a caminhada.

## Estrutura padrão

```
assets/
  sprites/
    ironman/
      idle.png
      walk-4frames.png
      portrait.png
    novo-personagem/
      idle.png
      walk-4frames.png
      portrait.png
```

## Adicionar um personagem

1. Crie `assets/sprites/<id-do-personagem>/`.
2. Adicione `idle.png`, `walk-4frames.png` e `portrait.png` seguindo as regras acima.
3. Mantenha o canvas de origem para animações no mesmo tamanho de quadro do personagem padrão. A imagem do jogo é desenhada pela proporção da arte; o sprite não precisa ser forçado a um quadrado.
4. Registre o personagem no futuro catálogo de personagens quando esse catálogo for implementado. Até lá, o protótipo atual só carrega os sprites de Iron Man.
5. Teste idle, caminhada para os dois lados, troca de faixa e retrato em celular antes de integrar novos estados.

## Substituir ou remover

- Para substituir uma pose, mantenha o mesmo nome e tamanho de quadro; o código não precisa ser alterado.
- Para remover, confirme primeiro que nenhum código ou catálogo referencia o arquivo; apague só os arquivos daquele personagem.
- Não reutilize o nome `ironman` para outro personagem.
- Não altere `index.html` apenas para corrigir o enquadramento interno de um PNG: ajuste a margem transparente do próprio PNG e preserve seu formato.

## Importante: estado atual

O projeto ainda não possui um carregador genérico de seleção de personagens. Hoje, o código do protótipo carrega explicitamente os arquivos de Iron Man. Este documento padroniza os assets atuais para reduzir dificuldades futuras, mas a integração automática de qualquer personagem exigirá um catálogo/carregador em uma etapa posterior.
