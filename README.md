# Desafio Serasa

Olá! Sou o Jonathan e primeiramente gostaria de agradecer pela oportunidade 😀

Este arquivo tem como objetivo descrever o processo de resolução dos desafios, as motivações, os obstáculos e os porquês de cada solução apresentada.

A tecnologia utilizada para a resolução dos desafios foi o [Next.js](https://nextjs.org/) com TypeScript. Escolhi essa stack pela facilidade na componentização, foco em performance (objetivo do exercício) e pelo fácil gerenciamento dos states da aplicação. Perceba que no código-fonte há pouco ou quase nada de dependência utilizada (e quando há, é relatada), já que foquei em utilizar os recursos nativos do framework.

O código-fonte dos desafios está neste repositório.

Vamos começar 🤌

## Desafio #1 - Tipografia

Componentização e Design System é um tema que me interessa bastante, principalmente pelo meu viés de também trabalhar com design de interfaces. Neste desafio utilizei a biblioteca [styled-components](https://styled-components.com/) para melhor gerenciamento do componente, pensando em criação, manutenção e escalabilidade do mesmo. Com isso foi possível criar as props de customização desse componente de tipografia de forma muito fácil.

Além disso, já que seria necessário utilizar esse “design system” no desafio #2, optei por criar mais um componente: Button. Toda a documentação de como usar esses componentes está descrita nessa página: https://serasa-five.vercel.app/documentacao

#### ⚠️ Observações importantes

1. Criei um arquivo para guardar os tokens desse design system, como cores e tamanhos de fonte. O objeto foi estruturado para uma fácil manutenção e adição de novos tokens, além da adaptação para casos em que os valores são diferentes para dispositivos web e mobile.
   `(src/styles/tokens.ts)`
2. Utilizei `rem` para a unidade de medida do tamanho das fontes. Essa solução é ideal para acessibilidade, já que preserva algumas configurações de dispositivos do usuário. Usei o macete de definir um font-size de 62.5% no html para utilizar `rem` sem precisar fazer a conversão de `px` para `px`. Ex.: 16px equivalem a 1.6rem.
3. Já no `line-height` do componente, utilizei `px` para deixar a medida fixa, já que usar `rem` com `line-height` pode acarretar na herança de tamanho de fonte desproporcional.

#### ➡️ Possíveis melhorias

1. Com a escalabilidade do design system, é necessário pensar em uma nomenclatura melhor para uma maior variedade de cores, como escala de cinza (100-900), por exemplo.
2. Na documentação, inserir um botão para “copiar código” dentro das caixas de códigos de exemplo.

#### 📑 Referências

- https://mui.com/material-ui/
- https://chakra-ui.com/docs/components/heading
- https://willianjusten.com.br/criando-componente-de-tipografia-com-styled-components

## Desafio #2 - Formulário NPS

Este desafio foi bastante prazeroso. Transformar uma interface, mesmo que seja apenas um wireframe, em um design funcional é definitivamente um dos meus trabalhos favoritos.

Pensando que esse formulário pode ser incorporado em um modal, popup ou toast no canto da tela, pensei em trabalhar o código como sempre faço: pensando que esse elemento deve ser fluído se adaptando em qualquer tamanho de container, conforme mockups abaixo:

<center>
  <table>
    <tr>
      <td><img width="600" alt="Serasa Exemplo #1" src="https://user-images.githubusercontent.com/1819244/232356333-35885864-d24a-4581-bded-3271db01e38f.png"></td>
      <td><img width="600" alt="Serasa Exemplo #2" src="https://user-images.githubusercontent.com/1819244/232356328-5690bdbe-a6a6-429c-b6cf-0d857c88543a.jpg"></td>
    </tr>
  </table>
</center>

Tenho bastante facilidade em construir interfaces acessíveis, principalmente focando na semântica do código. De qualquer forma, vale destacar que criar um componente de votação por estrelas, de forma acessível, foi de certa forma desafiador.

Link para acessar o formulário: https://serasa-five.vercel.app/

#### ⚠️ Observações importantes

1. Utilizei CSS nativo para estilizar toda essa interface, com exceção dos componentes Heading e Button. Fiz dessa forma para evitar o uso de dependências desnecessárias, além de evidenciar meu conhecimento em CSS. Em uma aplicação real, seria válido analisar ferramentas de reutilização, organização e modularização de código, como o próprio Styled Componentes citado acima, ou outras como SASS/LESS. `(src/styles/global.css)`
2. Modifiquei um pouco a interface de carregamento e sucesso desenvolvida no wireframe, para melhor uso desse formulário em containers como: modais, popups, etc.
3. Utilizei ferramentas de acessibilidade para testar a interface, além de ferramentas de performance como o PageSpeed Insights. O resultado do teste pode ser consultado aqui: https://pagespeed.web.dev/analysis/https-serasa-jofelipe-vercel-app/b4re15fsva?form_factor=mobile
4. Fiz um mock de API usando as API Routes do Next.js. Como o envio do formulário é bastante rápido, usei um setInterval para que a resposta demore mais que três segundos (e assim seja visível o comportamento da interface durante o carregamento). Após a resposta, você pode consultar o console do navegador para ver os dados enviados.

#### ➡️ Possíveis melhorias

1. Trabalhar melhor a validação dos campos do formulário. Neste caso usei a validação nativa do navegador para evitar o uso de dependências desnecessárias.

#### 📑 Referências

- https://www.w3.org/WAI/tutorials/forms/custom-controls/

## Desafio #3 - Arquitetura

A resolução do desafio pode ser consultada no arquivo [CHALLENGE.md](https://github.com/jofelipe/desafio-serasa/blob/main/CHALLENGE.md).

E é isso. Espero ter a oportunidade de apresentar e explicar os códigos criados neste desafio com a equipe técnica, para discutirmos as motivações, os porquês e até outras formas (melhores) de resolver esses desafios. Me chama! 🙋🏻

Por fim, escrevi sobre projetos realizados no arquivo [DELIVERY.md](https://github.com/jofelipe/desafio-serasa/blob/main/DELIVERY.md)

Até mais! 👋
