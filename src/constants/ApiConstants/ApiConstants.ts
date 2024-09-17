const API = {
  fetchNews: (
    country: string,
    category: string,
    language: string,
    page: number,
    pageSize: number
  ): string => {
    return `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&lang=${language}&apikey=4cda69eb6819b29608e535d0e0dd9ca7&page=${page}&max=${pageSize}`;
  },
};

export default API;