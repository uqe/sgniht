import axios from 'axios';
import { generatedTodo } from './generateTodo';

export const sendRequest = async (
  generateTodo: generatedTodo,
  currentIndex: number,
  accountId: string
): Promise<void> => {
  const url = 'https://cloud.culturedcode.com/version/1/history/' + accountId + '/items';

  const options = {
    method: 'POST',
    headers: {
      'User-Agent': 'ThingsMac/20808500mas (x86_64; OS X 10.12.2; en_DK)',
      'Content-Type': 'application/json; charset=UTF-8',
      'Content-Encoding': 'UTF-8',
    },
    data: {
      'current-item-index': currentIndex,
      items: [generateTodo],
      schema: 1,
    },
    url,
  };

  await axios(options);
};
