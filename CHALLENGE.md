# Terceiro desafio

Sou um usuário recorrente da área logada do Serasa, estou sempre de olho nos meus dados e como eles estão sendo buscados por outros serviços. Sendo assim, foi mais tranquilo abstrair as informações exibidas e focar na tecnologia empregada, além de vislumbrar quais tecnologias poderiam ser usadas nesse tipo de aplicação.

Essa análise parte dos cenários destacados anteriormente (volumetria, performance, experiência do usuário e quantidade de desenvolvedores envolvidos no projeto), além de pontos adicionais que considero relevantes para essa questão.

Hoje em dia quando pensamos em aplicações web robustas e performáticas, é impossível não lembrar do Next.js. Acompanho esse framework há bastante tempo, tendo trabalhado bastante com ele em projetos pessoais, e com base nos tópicos abaixo, escolheria ele para este desafio.

### Volumetria e performance

O Next.js é focado em performance, há diversos recursos de renderização no servidor e geração de páginas estáticas que tornam a velocidade da aplicação muito mais rápida e agradável para o usuário final. Além disso, muitas soluções nativas são oferecidas para melhorar a performance de uma aplicação com base (e participação) da Core Web Vitals (uma iniciativa do Google para fornecer orientações sobre as melhores práticas de Experiência do Usuário e Performance).

### Experiência do Usuário

Além da performance já mencionada, que tem um grande impacto na experiência de uso do usuário, vale destacar que o uso do React como base no Next.js oferece uma ampla variedade de bibliotecas que podem ser utilizadas para aprimorar ainda mais a aplicação. Com essas bibliotecas, é possível trabalhar melhor em questões importantes como microinterações, acessibilidade e design system.

### Adesão a tecnologia e curva de aprendizado

O Next.js possui uma grande comunidade de desenvolvedores e uma vasta documentação online, o que torna a adoção e a manutenção da tecnologia mais fácil e acessível. Além disso, do início do projeto ao seu deploy, o Next conta com diversas ferramentas integradas que facilitam e enriquecem a experiência do desenvolvedor (DevXP).

### Escalabilidade e uso do mercado

O Next.js também é uma escolha segura para projetos que já tem um grande tráfego mas também projetam um crescimento futuro. Com o uso de tecnologias como o Serverless e o Kubernetes, por exemplo, a escalabilidade é muito mais fácil de ser gerenciada se comparada a outros frameworks e tecnologias. Também vale citar que grandes empresas confiaram o Next para suas aplicações, como: Netflix, Twitch e Western Union.

## Arquitetura

Tendo em vista que o Next.js seria o framework escolhido, é necessário pensar na melhor arquitetura possível para esse projeto.

**Data fetching:** Através de cada especificidade, podemos decidir utilizar SSG (Static-site generation) para páginas estáticas que não recebem atualizações periodicamente, SSR (Server-side rendering) para páginas com conteúdo dinâmico servidas de forma estática (a consulta de Score, por exemplo) e outras soluções mais avançadas, como CSR (Client-side rendering) para páginas com informações em tempo real e Incremental Static Regeneration para atualizar páginas de conteúdo (como Histórico do Score) após o build (publicação) do site.

**CDN:** Pensando em volumetria, também podemos analisar o uso de CND para poupar a carga de uso dos servidores back-end (e mesmo front-end).

**Microsserviços:** Dividir a aplicação em microsserviços independentes pode ser necessário para alcançar uma maior flexibilidade e escalabilidade, permitindo que diferentes partes da aplicação possam ser atualizadas ou escaladas separadamente, sendo usada em conjunto com as ferramentas do tópico de Data fetching.

**Componentização:** Utilizar bibliotecas (como o Styled Components) para trabalhar a componentização do design system (ou biblioteca de componentes) de forma escalável e de fácil manutenção.

**Estrutura dos arquivos:** Escolher uma estrutura de arquivos escalável, de forma com que os arquivos sejam separados por seu tipo e especificidade.

**ESLint e outros linters e padrão de código:** Indispensável o uso de linters de código (como o ESLint) e formatadores (como Prettier) para alcançarmos um padrão e eficiência de codificação para todos os desenvolvedores envolvidos no projeto. Para isso será necessário conversas entre todos os desenvolvedores para alinharmos as convenções de código, nomenclatura de arquivos e design patterns.

**CI/CD:** Pensar em pipelines eficientes que garantem a qualidade do código, além da adoção de boas práticas das etapas de versionamento, como commits semânticos, branchs separadas para cada ambiente e automatização de deploys.

**Regra de negócio no back-end:** Sempre que possível isolar a regra de negócio no back-end, deixando como responsabilidade do front-end a exibição da interface e seu conteúdo da melhor forma para o usuário.

**Hooks:** Uso de hooks do React (ao invés das Clases) a fim de simplificar a codificação dos componentes além de ajudar no entendimento do código por parte dos desenvolvedores.

## Conclusão

É indispensável a participação de arquitetos e desenvolvedores na adoção de uma nova tecnologia, afinal de contas, são essas pessoas que colocarão “mão na massa” para dar vida aos novos produtos e aplicações da empresa. A colaboração também é essencial para a criação de boilerplates (padrões para novos projetos), documentações para outros desenvolvedores e até mesmo pequenas apresentações de conteúdo para o setor de tecnologia da empresa.

As referências para as informações trazidas aqui são: análise do mercado de tecnologia, artigos sobre boas práticas e design patterns e por fim, minha experiência profissional, onde já atuei como fomentador para uso de novas tecnologias através de práticas como Coding Dojo e Pair-programming, além da criação de boilerplates e documentações técnicas para outros desenvolvedores.
