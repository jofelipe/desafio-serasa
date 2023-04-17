import { ChangeEvent, FormEvent, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Button from 'components/Button';
import Check from 'components/Check';
import Heading from 'components/Heading';

import logo from 'assets/logo.svg';

type Form = {
  rating: string;
  name: string;
  comments: string;
};

export default function Home() {
  const [form, setForm] = useState<Form>({
    rating: '',
    name: '',
    comments: '',
  });
  const [loading, setLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const jsonData = await response.json();

    setLoading(false);
    setFormSent(true);
    setForm({
      ...form,
      rating: '',
      name: '',
      comments: '',
    });

    console.table(jsonData);
  };

  return (
    <>
      <Head>
        <title>Avaliação NPS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="nps">
        <section className="nps-form">
          <Image src={logo} alt="Serasa" width={170} height={80} />

          {!formSent ? (
            <>
              <Heading level={1} size="xsmall">
                Conte o quanto você está satisfeito com nossos serviços
              </Heading>

              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend className="hidden">Avalie nossos serviços</legend>
                  <div className="field">
                    <label htmlFor="rating1">Marque de 1 à 5 estrelas</label>

                    <div className="rating">
                      <input
                        defaultChecked={form.rating === '1'}
                        id="rating1"
                        name="rating"
                        onChange={handleChange}
                        required
                        type="radio"
                        value="1"
                      />
                      <label htmlFor="rating1">
                        <span>1</span>
                      </label>

                      <input
                        defaultChecked={form.rating === '2'}
                        id="rating2"
                        name="rating"
                        onChange={handleChange}
                        required
                        type="radio"
                        value="2"
                      />
                      <label htmlFor="rating2">
                        <span>2</span>
                      </label>

                      <input
                        defaultChecked={form.rating === '3'}
                        id="rating3"
                        name="rating"
                        onChange={handleChange}
                        required
                        type="radio"
                        value="3"
                      />
                      <label htmlFor="rating3">
                        <span>3</span>
                      </label>

                      <input
                        defaultChecked={form.rating === '4'}
                        id="rating4"
                        name="rating"
                        onChange={handleChange}
                        required
                        type="radio"
                        value="4"
                      />
                      <label htmlFor="rating4">
                        <span>4</span>
                      </label>

                      <input
                        defaultChecked={form.rating === '5'}
                        id="rating5"
                        name="rating"
                        onChange={handleChange}
                        required
                        type="radio"
                        value="5"
                      />
                      <label htmlFor="rating5">
                        <span>5</span>
                      </label>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="name">Nome</label>
                    <input
                      autoComplete="name"
                      id="name"
                      inputMode="text"
                      name="name"
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                      type="text"
                      value={form.name}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="comments">
                      Comentário <small>(Opcional)</small>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={form.comments}
                      onChange={handleChange}
                      placeholder="Digite um comentário adicional"
                    ></textarea>
                  </div>

                  <div className="field">
                    <Button
                      loading={loading}
                      type="submit"
                      value="Enviar avaliação"
                    >
                      Enviar avaliação
                    </Button>
                  </div>
                </fieldset>
              </form>
            </>
          ) : (
            <>
              <Check />
              <Heading level={2} size="small" color="success">
                Obrigado por avaliar
                <br />
                nossos serviços.
              </Heading>
              <p>
                O Serasa trabalha arduamente para oferecer a você a melhor
                experiência possível :)
              </p>
              <Button
                asLink
                color="darkLow"
                onClick={() => setFormSent(false)}
                value="Avaliar novamente"
              >
                Avaliar novamente
              </Button>
            </>
          )}
        </section>
      </main>
    </>
  );
}
