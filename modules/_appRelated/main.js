import { dbSync } from './dbSync.js';
import { prepareDir } from './utils.js';
import { startListener } from './listener.js';

export const startApp = async () => {
    try {

        await prepareDir();
        await dbSync();

        startListener();

    } catch (error) {
        console.log('Error in avvioApp', error);    
    }
}