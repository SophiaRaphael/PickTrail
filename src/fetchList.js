import jsonResponse from './sample'

const fetchList = (listName) => 
  (jsonResponse.hasOwnProperty(listName)) ? jsonResponse[listName]: "no data"

export default fetchList;
