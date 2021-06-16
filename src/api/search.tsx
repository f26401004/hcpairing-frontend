import axios from '../plugins/axios';

const getTagsByPrefix = async (keyword: string): Promise<Array<string>> => {
  const { data } = await axios.get(`/tags?prefix=${keyword}`)
  return data.tags
};

const searchApi = {
  getTagsByPrefix
};

export default searchApi;
