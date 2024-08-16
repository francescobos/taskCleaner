import { sequelize } from "../../config/dbConfig.js";

import {config} from 'dotenv'; 
config( {path: '../../.env'} );

import { models } from "../../models/index.js";

let dataReset = false;
if (process.env.DATA_RESET === 'true') { dataReset = true; }

export const dbSync = async () => {

    try {
        await sequelize.sync({ force: dataReset });
        if (dataReset) { 
            /* initialData del modulo houseClean */
            /* questo è import dinamico. Importo solo se serve, altrimenti non lo carico */
            const { insertHouseCleanBaseData } = await import('../../modules/houseClean/initalData/insertInitialData.js');
            console.log(await insertHouseCleanBaseData());
        }
    } catch (error) {
        console.error("Errore durante la sincronizzazione del database:", error);
        process.exit(1);
    }
}