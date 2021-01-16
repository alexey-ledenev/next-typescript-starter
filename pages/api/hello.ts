import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200
  res.json({ message: 'Kak dela?', q: req.query })
}
