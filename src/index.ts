import { getCurrentIndex } from './getCurrentIndex';
import { generateTodo, InputTodo } from './generateTodo';
import { sendRequest } from './sendRequest';

export const createTodo = async (todo: InputTodo, accountId: string): Promise<void> => {
  const currentIndex = await getCurrentIndex(accountId);
  const generatedTodo = await generateTodo(todo);
  await sendRequest(generatedTodo, currentIndex, accountId);
};
