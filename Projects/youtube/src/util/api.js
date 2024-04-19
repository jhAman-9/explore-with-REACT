// import axios from 'axios';

// const BASE_URL = 'https://youtube138.p.rapidapi.com';
// // const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/'

// const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY
// console.log(apiKey);

// const options = {
//   params: {
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": apiKey,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };


// export const fetchDataFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   // console.log(data);
//   return data;
// };


import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

