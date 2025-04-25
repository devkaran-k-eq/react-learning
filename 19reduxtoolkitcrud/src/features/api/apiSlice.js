import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost.3500" }),
  tagTypes: ['Post'],
  endpoints: (builder) => {
    {
        
    }
  }
});
