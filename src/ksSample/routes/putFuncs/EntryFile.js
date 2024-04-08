import express from 'express';

var router = express.Router();

import {
    PutFunc, PutToValueFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);
router.put("/toValue/:id/:KeyName", PutToValueFunc);

export { router };