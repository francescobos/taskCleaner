import { format } from 'date-fns/format';
import { getTaskToDo } from "./libs.js";
import { parseISO } from 'date-fns';


export const index = async (req, res) => { 
    const tasks = await getTaskToDo();

    // const menu = yaml.load(fs.readFileSync(`data/Menu/menu-${lang}.yml`, 'utf8'));
    // const metaJson = require (`../data/Meta/index-${lang}.json`);
    // const meta = tools42.generateMeta(metaJson);
    // const testimonianze = require (`../data/Testimonianze/Testimonianze-${lang}.json`);
    // const clienti = require (`../data/Clienti/Clienti-${lang}.json`);
    //res.render(`index-${lang}`, {meta, testimonianze, clienti})
    res.render(`index`, {tasks, formatDate: format});
}