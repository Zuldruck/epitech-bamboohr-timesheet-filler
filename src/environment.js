import dotenv from 'dotenv';

dotenv.config();

export const Login = process.env.LOGIN;
export const Password = process.env.PASSWORD;
export const WorkedDays = process.env.WORKED_DAYS.split(',');
export const PreviousPeriodForgotten = process.env.PREVIOUS_PERIOD_FORGOTTEN
  && (process.env.PREVIOUS_PERIOD_FORGOTTEN.toLowerCase() === 'true'
  || process.env.PREVIOUS_PERIOD_FORGOTTEN === '1');
