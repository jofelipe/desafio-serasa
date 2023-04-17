import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Apenas requisições POST' });
    return;
  }

  setTimeout(function () {
    res.status(200).json({ form: req.body });
  }, 3000);
}
