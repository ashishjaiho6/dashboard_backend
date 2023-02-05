import { Router } from 'express';
import { createEnergy, getAllEnergies, getEnergy, updateEnergy, deleteEnergy } from '../controllers/energy.controller';

const energyRoute = () => {
  const router = Router();

  router.post('/energy', createEnergy);

  router.get('/energy', getAllEnergies);

  router.get('/energy/:id', getEnergy);

  router.put('/energy/:id', updateEnergy);

  router.delete('/energy/:id', deleteEnergy);

  return router;
};

export { energyRoute };
