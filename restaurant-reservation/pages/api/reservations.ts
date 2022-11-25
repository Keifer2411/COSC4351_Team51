import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await createReservation(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function createReservation(req: NextApiRequest, res: NextApiResponse) {
  const data = JSON.parse(req.body);
  try {
    const newReservation = await prisma.reservation.create({
      data,
    });
    return res.status(200).json(newReservation);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating question', success: false });
  }
}
