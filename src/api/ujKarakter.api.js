import axios from "axios";

function extractData(response) {
  return response.data;
}

export function getKarakterNameList() {
  return axios
    .get("http://127.0.0.1:8000/api/karakterek/nevek/")
    .then(extractData);
}
