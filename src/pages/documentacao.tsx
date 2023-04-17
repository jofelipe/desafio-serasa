import Head from 'next/head';

import Button from 'components/Button';
import Heading from 'components/Heading';

export default function Documentacao() {
  return (
    <>
      <Head>
        <title>Documentação</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Serasa Design System</Heading>
        <p>
          Documentação do componente <i>Heading</i> e <i>Button</i>
        </p>
        <hr className="divider" />

        <div className="component">
          <Heading level={2} size="large" color="darkHigh">
            Heading
          </Heading>
          <Heading level={3} size="small" color="dark">
            Importação
          </Heading>
          <code>{"import Heading from 'components/Heading';"}</code>

          <Heading level={3} size="small" color="dark">
            Como usar
          </Heading>
          <p>
            O componente pode receber três <em>props</em>, como <em>level</em>{' '}
            que determina qual tag (H1 a H6) será usada, <em>size</em> que
            determina o tamanho da fonte e <em>color</em> que define a cor do
            texto com base nas cores do Design System. <br />
            <b>Obs:</b> Por padrão é renderizado <em>level</em> 1 (H1), no
            tamanho <em>display</em> e na cor <em>primary</em>
          </p>

          <Heading>Olá, sou um Heading Display!</Heading>
          <Heading size="large">Olá, sou um Heading Large!</Heading>
          <Heading size="medium" color="darkHigh">
            Olá, sou um Heading Medium!
          </Heading>
          <Heading size="small" color="dark">
            Olá, sou um Heading Small!
          </Heading>
          <Heading size="xsmall" color="darkLow">
            Olá, sou um Heading XSmall!
          </Heading>
          <Heading size="sub" color="darkLow">
            Olá, sou um Subheading!
          </Heading>
          <code>
            {'<Heading>Olá, sou um Heading Display!</Heading>'}
            <br />
            {'<Heading size="large">Olá, sou um Heading Large!</Heading>'}
            <br />
            {
              '<Heading size="medium" color="darkHigh">Olá, sou um Heading Medium!</Heading>'
            }
            <br />
            {
              '<Heading size="small" color="dark">Olá, sou um Heading Small!</Heading>'
            }
            <br />
            {
              '<Heading size="xsmall" color="darkLow">Olá, sou um Heading XSmall!</Heading>'
            }
            <br />
            {
              '<Heading size="sub" color="darkLow">Olá, sou um Subheading!</Heading>'
            }
          </code>

          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Valores</th>
                <th>Tipo</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>level</td>
                <td>1 | 2 | 3 | 4 | 5 | 6</td>
                <td>Number</td>
                <td>1</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  {
                    "'display' | 'large' | 'medium' | 'small' | 'xsmall' | 'sub'"
                  }
                </td>
                <td>String</td>
                <td>{"'display'"}</td>
              </tr>
              <tr>
                <td>color</td>
                <td>
                  {
                    "'primary' | 'darkHigh' | 'dark' | 'darkLow' | 'lightHigh' | 'light'"
                  }
                </td>
                <td>String</td>
                <td>{"'primary'"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="divider" />

        <div className="component">
          <Heading level={2} size="large" color="darkHigh">
            Button
          </Heading>
          <Heading level={3} size="small" color="dark">
            Importação
          </Heading>
          <code>{"import Button from 'components/Button';"}</code>

          <Heading level={3} size="small" color="dark">
            Como usar
          </Heading>
          <p>
            O componente pode receber três <em>props</em>, como <em>color</em>{' '}
            que define a cor de fundo do botão com base nas cores do Design
            System, <em>asLink</em> para transformar a aparência do botão no
            formato de link convencional e <em>loading</em>, para indicar
            visualmente um <i>state</i> de carregando.
            <br />
            <b>Obs:</b> Por padrão é renderizado na cor <em>primary</em>
          </p>

          <Button>Olá, sou um Button!</Button>
          <Button color="darkHigh">Olá, sou um Button!</Button>
          <Button color="dark">Olá, sou um Button!</Button>
          <Button loading>Olá, sou um Button!</Button>
          <Button asLink>Olá, sou um Button no formato de link!</Button>
          <code>
            {'<Button>Olá, sou um Button!</Button>'}
            <br />
            {'<Button color="darkHigh">Olá, sou um Button!</Button>'}
            <br />
            {'<Button color="dark">Olá, sou um Button!</Button>'}
            <br />
            {'<Button loading>Olá, sou um Button!</Button>'}
            <br />
            {'<Button asLink>Olá, sou um Button no formato de link!</Button>'}
          </code>

          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Valores</th>
                <th>Tipo</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asLink</td>
                <td></td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>color</td>
                <td>{"'primary' | 'darkHigh' | 'dark' | 'darkLow'"}</td>
                <td>String</td>
                <td>{"'primary'"}</td>
              </tr>
              <tr>
                <td>loading</td>
                <td></td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
