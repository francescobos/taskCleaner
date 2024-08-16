import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

import { load } from 'js-yaml';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { calculateRandomDateInPast } from '../../_appRelated/utils.js';

import { TaskCleaning } from '../../../models/TaskCleaning.js';


export const insertHouseCleanBaseData = async () => {

    const data = load(await fs.readFile(join(__dirname, './initial_data.yml'), 'utf8'));
    
    for (const item of data.houseTask) {
        // ciclo con un for e non con un forEach o con map per poter usare await. Le insert sono asincrone e quindi devo aspettare che finisca una prima di iniziarne un'altra
        await TaskCleaning.create(
            {
                uuid: uuidv4(),
                name: item.name,
                description: item.description,
                last_time_done: calculateRandomDateInPast(item.frequency_days),
                frequency_days: item.frequency_days
            }
        );
    }
    
    return "Dati per la pulizia della casa inseriti";

}
