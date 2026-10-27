# Próxima etapa: separar frames reais

Antes de usar a arte da folha em gameplay, executar a seguinte preparação:

1. Manter `sprite_sheet_original.jpg` como referência intacta.
2. Usar a versão transparente como origem, inspecionando halos de fundo branco em volta da silhueta.
3. Recortar manualmente os grupos PARADO/IDLE, ANDANDO e CORRENDO, sem incluir rótulos, sombras de outras poses ou efeitos.
4. Cortar cada pose em PNG próprio com transparência real, sem apagar áreas brancas internas da armadura.
5. Padronizar cada quadro com a mesma caixa (começar com 96×96 px ou 128×128 px), alinhando a linha dos pés.
6. Montar spritesheets horizontais e anotar frame count, FPS e loop.
7. Conferir no `sprite-lab.html` e só depois conectar as sequências ao jogo principal.

## Validação
- Nenhum texto de título dentro dos recortes.
- Sem restos de fundo branco no contorno.
- Pés permanecem estáveis entre frames.
- Os frames têm as mesmas dimensões.
- A primeira e última posição de idle/walk/run não saltam.
- Não assumir que a versão com fundo removido está perfeita sem inspeção visual.

O visualizador `/sprite-lab.html` é uma ferramenta de teste de movimento, com manequim provisório. Ele não carrega ainda a arte final nem altera a jogabilidade do `index.html`.
