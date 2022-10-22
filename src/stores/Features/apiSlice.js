import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = "NehwvOLmWooi9dd7LuJP3FvChJIOAjPETIAzrkXL"

export const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thenewsapi.com/v1",
    }),
    endpoints: build => ({
        getAllNews: build.query({
            query: () => ({
                url: "/news/all",
                params: {
                    categories: "business,tech",
                    api_token: apiToken,
                    language: "en"
                }
            })
        }),
        getByUuid: build.query({
            query: id => ({
                url: `/news/uuid/${id}`,
                params: {
                    api_token: apiToken
                }
            })
        }),
        getSimilarNews: build.query({
            query: (uuid) => ({
                url: `/news/similar/${uuid}`,
                params: {
                    api_token: apiToken
                }
            })
        }),
        getTopNews: build.query({
            query: () => ({
                url: "/news/top",
                params: {
                    limit: 1,
                    language: "en",
                    api_token: apiToken
                }
            })
        })
    })
})

export const { useGetAllNewsQuery, useGetByUuidQuery, useGetSimilarNewsQuery, useGetTopNewsQuery } = ApiSlice;