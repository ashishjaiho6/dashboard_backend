// import { Router } from 'express';
import { getAllEnergy } from 'src/controllers/energy.controller';
// import { getAllRoles } from 'src/controllers/role.controller';

// const energyRoute = () => {
//   const router = Router();

//   //   router.get('/energy', getAllRoles);

//   return router;
// };

// export { energyRoute };

import { Router } from 'express';
import { createRole, deleteRole, getAllRoles, getRole, updateRole } from '../controllers/role.controller';

const energyRoute = () => {
  const router = Router();

  router.post('/roles', createRole);

  //   router.get('/roles', getAllEnergy);

  router.get('/roles/:id', getRole);

  router.put('/roles/:id', updateRole);

  router.delete('/roles/:id', deleteRole);

  return router;
};

export { energyRoute };
