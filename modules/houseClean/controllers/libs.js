import { TaskCleaning } from '../../../models/TaskCleaning.js';

// const getTaskToDo = async () => {   

//     try {
//         const tasks = await TaskCleaning.findAll({
//         where: {
//             last_time_done: {
//             [Op.lt]: new Date(new Date() - 86400000),
//             },
//         },
//         });
//         return tasks;
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         throw error;
//     }

// }

export const getTaskToDo = async () => {
  try {
    const tasks = await TaskCleaning.findAll({
      limit: 3,
      order: [['id', 'ASC']],
    });
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
