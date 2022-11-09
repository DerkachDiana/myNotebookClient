import TEXT from '../src/constants/text';

export const ERROR_MESSAGE: Record<number, string> = {
  400: TEXT.errors.alreadyUsed,
  404: TEXT.errors.userNotFound,
  500: TEXT.errors.serverProblem,
  0: TEXT.errors.serverNotStarted,
};
