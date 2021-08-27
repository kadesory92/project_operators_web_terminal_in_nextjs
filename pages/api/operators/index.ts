import db from '../../../data/db.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    switch(req.method){
      case "GET":
        return res.status(200).json(db.operator);
      case "POST":
    }
    } 
    