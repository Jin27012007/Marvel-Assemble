# Marvel Assemble — organização dos sprites

Esta pasta documenta a preparação dos gráficos e contém o manifesto de animações. O pacote ZIP com a folha original, a folha com fundo removido e recortes por categoria foi gerado para download nesta conversa; os PNGs binários ainda precisam ser enviados ao repositório como arquivos individuais.

## Estado real dos recursos

Os recortes do pacote são regiões retangulares aproximadas da folha, não sprites individuais perfeitamente separados. A folha inclui rótulos, efeitos e personagens com espaçamentos irregulares; usar células fixas para cortar quadros produziria frames corrompidos. Por isso, os recortes são referências visuais, não animações finalizadas.

## Manifesto

O arquivo `animation-manifest.js` define os nomes dos arquivos esperados, a velocidade inicial e se cada animação deve repetir. Ele ainda não é conectado ao jogo e não deve ser tratado como um carregador funcional até que os PNGs estejam no caminho indicado e cada sequência seja separada em frames.

Alvos sugeridos para exportação final: personagem em caixas consistentes (por exemplo, 96×96 px), fundo transparente, alinhamento dos pés/centro entre quadros e um JSON por sequência com largura, altura, quantidade de quadros, FPS e loop.

## Categorias

`intro`, `idle`, `walk`, `run`, `jump`, `flight`, `repulsor_basic`, `dual_shot`, `charged_attack`, `unibeam`, `missiles`, `air_attack`, `energy_shield`, `power_pose`, `damage`, `defeated`, `get_up`, `slide`, `extras` e `effects`.
