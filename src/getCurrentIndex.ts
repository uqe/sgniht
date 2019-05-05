import axios from 'axios';

export const getCurrentIndex = async (accountId: string): Promise<number> => {
  const url = `https://cloud.culturedcode.com/version/1/history/${accountId}/items?start-index=0`;
  const res = await axios.get(url);
  return res.data['current-item-index'];
};
