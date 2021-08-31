import db from '../../../data/db.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const httpMethod=req.method;
    const {id, name}=req.body;

    switch(httpMethod){
      case "GET":
        return res.status(200).json(db.operator);
        break;
      case "POST":
        res.status(200).json({
          id:id+1,
          name:name
        });
        break;
      default:
        res.setHeader('Allow', ['GET','POST']);
        res.status(405).end(`Method ${httpMethod} Not Allow`);
    }
    } 
    