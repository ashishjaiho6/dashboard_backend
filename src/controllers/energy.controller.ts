import { Request, Response } from 'express';
// import { Energy, EnergyInput } from '../models/energy.model';

const getAllEnergy = async (req: Request, res: Response) => {
  //   const energies = await Energy.find().sort('-createdAt').exec();

  return res.status(200).json({ data: [] });
};

export { getAllEnergy };
