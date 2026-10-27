# Marvel Assemble — recursos visuais iniciais

Esta pasta contém a folha de sprites enviada pelo criador do projeto, uma versão com o fundo branco removido e recortes aproximados por categoria.

## Limitação atual

Os recortes são regiões retangulares da folha, não sprites individuais perfeitamente separados. A folha inclui rótulos, efeitos e personagens com espaçamentos irregulares; usar células fixas para cortar quadros produziria frames corrompidos. Por isso, os arquivos por categoria são referências, não animações finalizadas.

## Alvos de animação para o protótipo

| Animação | Quadros-alvo | FPS | Loop |
|---|---:|---:|---|
| idle | 6 | 8 | sim |
| walk | 8 | 10 | sim |
| run | 8 | 12 | sim |
| jump | 5 | 10 | não |
| flight | 6 | 10 | sim |
| repulsor_basic | 5 | 10 | não |
| dual_shot | 4 | 10 | não |
| charged_attack | 3 | 8 | não |
| unibeam | 3 | 8 | não |
| missiles | 4 | 10 | não |
| damage | 6 | 10 | não |
| defeated | 6 | 8 | não |
| get_up | 6 | 10 | não |
| slide | 4 | 12 | não |

Esses números são parâmetros iniciais para implementação, não uma indicação de que os quadros já estejam separados. Para exportação final, cada frame deve ser cortado manualmente, alinhado numa caixa consistente (sugestão: 96×96 px) e descrito num JSON com `frameWidth`, `frameHeight`, `frames`, `fps` e `loop`.

## Categorias disponíveis

`intro`, `idle`, `walk`, `run`, `jump`, `flight`, `repulsor_basic`, `dual_shot`, `charged_attack`, `unibeam`, `missiles`, `air_attack`, `energy_shield`, `power_pose`, `damage`, `defeated`, `get_up`, `slide`, `extras` e `effects`.
