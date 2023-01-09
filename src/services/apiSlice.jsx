import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { APP_ID, APP_KEY } from './config';

export const JobOffersApi = createApi({
  reducerPath: 'JobOffersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.adzuna.com/v1/api',
  }),
  endpoints: (builder) => ({
    getAllOffers: builder.query({
      query: (page = 1) =>
        `/jobs/gb/search/${page}/?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10`,
    }),
    searchOfferById: builder.query({
      query: (id) =>
        `/jobs/gb/search/1/?app_id=${APP_ID}&app_key=${APP_KEY}&what=${id}`,
    }),
  }),
});

export const { useGetAllOffersQuery } = JobOffersApi;
