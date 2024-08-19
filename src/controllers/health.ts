import { Request, Response } from 'express';

export class Health {
  public health(_req: Request, res: Response) {
    res.status(200).send('API GATEWAY IS HEALTHY AND RUNNING SUCCESSFULLY.');
  }
}
