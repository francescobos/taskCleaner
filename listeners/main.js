import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
config( {path: '../../.env'} );

import oneClickRouter from '../../router/oneClickRouter.js';
import carbonRouter from '../../router/carbonRouter.js';
import hpRouter from '../../router/hpRouter.js';

export const startListener = (port = process.env.PORT) => {

    const app = express();

    app.listen(port, () => {
        if (process.env.NODE_ENV == "development") {
            console.log(`Main listener running on port ${port} && tested with Node v.20.13.1`);
        };
    });

    app.use(cors({
        "origin": [ "http://localhost:5173", "https://staging.any3dp.app",  "http://localhost:3334",  "http://localhost" ]
    }));
    
    app.use(express.json());
    app.set('x-powered-by', false);
    app.set('trust proxy', true);
    app.use(express.urlencoded( { extended: true } ));

    app.get('/', (req, res) => {
        res.send('Listner is running');
    });

    app.use('/api/v1/oneClickMetal', oneClickRouter);
    app.use('/api/v1/carbon', carbonRouter);
    app.use('/api/v1/hp', hpRouter );

}