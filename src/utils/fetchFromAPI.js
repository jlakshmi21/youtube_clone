import axios from 'axios';
import React from 'react'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
	port: null,
	params: {
        maxResults: 50,
      },
	headers: {
		'x-rapidapi-key': 'ce01a23694msh84244122a1a7bf6p1d767ajsn1236f64f3f8a',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };