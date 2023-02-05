import { Request, Response } from 'express';
import { Energy, EnergyInput } from '../models/energy.model';

const createEnergy = async (req: Request, res: Response) => {
  const {
    description,
    added,
    country,
    insight,
    intensity,
    likelihood,
    pestle,
    published,
    region,
    sector,
    source,
    title,
    topic,
    relevance,
    url,
  } = req.body;

  if (!title || !description) {
    return res.status(422).json({
      message: 'The fields title and description are required',
    });
  }

  const energyInput: EnergyInput = {
    description,
    added,
    country,
    insight,
    intensity,
    likelihood,
    pestle,
    published,
    region,
    sector,
    source,
    title,
    topic,
    relevance,
    url,
  };

  const energyCreated = Energy.create(energyInput);

  return res.status(201).json({ data: energyCreated });
};

const getAllEnergies = async (req: Request, res: Response) => {
  const roles = await Energy.find().sort('-intensity').exec();

  return res.status(200).json({ data: roles });
};

const getEnergy = async (req: Request, res: Response) => {
  const { id } = req.params;

  const energy = await Energy.findOne({ _id: id });

  if (!energy) {
    return res.status(404).json({ message: `Energy with id "${id}" not found.` });
  }

  return res.status(200).json({ data: energy });
};

const updateEnergy = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, title } = req.body;

  const energy = await Energy.findOne({ _id: id });

  if (!energy) {
    return res.status(404).json({ message: `Energy with id "${id}" not found.` });
  }

  if (!title || !description) {
    return res.status(422).json({ message: 'The fields title and description are required' });
  }

  await Energy.updateOne({ _id: id }, { title, description });

  const roleUpdated = await Energy.findById(id, { title, description });

  return res.status(200).json({ data: roleUpdated });
};

const deleteEnergy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Energy.findByIdAndDelete(id);

  return res.status(200).json({ message: 'Energy deleted successfully.' });
};

export { createEnergy, getAllEnergies, getEnergy, updateEnergy, deleteEnergy };
