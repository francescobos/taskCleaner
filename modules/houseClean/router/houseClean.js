import { Router } from 'express';
// import { authenticateByToken } from '../middleware/authByToken.js';

// import { insertCompany, insertContact, getCompanyByUuid, getCompanyByEmail, getCompanyByName, checkIfEmailExists, getAllDataByEmail, checkIfEmailAndInternalCodeExists } from '../modules/company/companyController.js';
// import { insertCompanyVal, insertContactVal, getCompanyByUuidVal, getCompanyByEmailVal, getCompanyByNameVal } from '../modules/company/companyValidator.js';

import { index } from '../controllers/interface.js';

const houseCleanRouter = Router();

// companyRouter.get('/', (req, res) => {
//     res.send('Listner is running');
// });


houseCleanRouter.get('/', index);


// companyRouter.post('/', authenticateByToken, insertCompanyVal, insertCompany);
// companyRouter.post('/contact', authenticateByToken, insertContactVal, insertContact);
// companyRouter.get('/uuid/:uuid', authenticateByToken, getCompanyByUuidVal, getCompanyByUuid);
// companyRouter.get('/email/:email', authenticateByToken, getCompanyByEmailVal, getCompanyByEmail);
// companyRouter.get('/name/:name', authenticateByToken, getCompanyByNameVal, getCompanyByName);
// companyRouter.get('/checkEmail/:email', authenticateByToken, getCompanyByEmailVal, checkIfEmailExists);
// companyRouter.get('/checkEmailId/:email/:internal_code', authenticateByToken, getCompanyByEmailVal, checkIfEmailAndInternalCodeExists);
// companyRouter.get('/all/:email', authenticateByToken, getCompanyByEmailVal, getAllDataByEmail);

export default houseCleanRouter;