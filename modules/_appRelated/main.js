import { dbSync } from './dbSync.js';
import { prepareDir } from './utils.js';

// import { startListener } from './listeners/main.js';


export const startApp = async () => {
    try {

        await prepareDir();
        await dbSync();

        //startListener();
        // end fetch module load server ciaooo

    } catch (error) {
        console.log('Error in avvioApp', error);    
    }
}