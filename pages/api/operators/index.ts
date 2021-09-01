import db from '../../../data/db.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const httpMethod=req.method;

    switch(httpMethod){
      case "GET":
        return res.status(200).json(db.operator);
        break;
      case "POST":
        const operator:string = req.body.nameOperator
        const newOperator = {
          id: Date.now(),
          name: operator
        }
        db.operator.push(newOperator)
        res.status(201).json(newOperator)
        break;
      default:
        res.setHeader('Allow', ['GET','POST']);
        res.status(405).end(`Method ${httpMethod} Not Allow`);
    }
    } 
    