import axios from '../plugins/axios';
import Axios from 'axios'
import generateToken from '../plugins/generateToken';

type GeoLocation = {
  lat: number,
  lng: number,
}

type Records = {
  zipcode: string,
  tags: Array<string>
}

const getTagsByPrefix = async (keyword: string): Promise<Array<string>> => {
  const { data } = await axios.get(`/tags?prefix=${keyword}`)
  return data.tags
};

const getZipcode = async (location: GeoLocation): Promise<string> => {
  // Obtain OAuth token
  const token = await generateToken()
  const { data } = await Axios.get(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${location.lat}%2C${location.lng}&lang=en-US`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (data.items.length === 0) return ''

  const zipcode = data.items[0].address.postalCode
  return zipcode
}

const postRecords = async (records: Records): Promise<Array<string>> => {
  const { data } = await axios.post('/records', records)

  return data.specialities
}

const searchApi = {
  getTagsByPrefix,
  getZipcode,
  postRecords,
};

export default searchApi;
