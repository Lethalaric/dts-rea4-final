import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = "k4xmN6ZkE07YQqCAOezfrPs4Kenm9iXp49xGtNld"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thenewsapi.com/v1",
    }),
    endpoints: build => ({
        getAllNewsByCategories: build.query({
            query: ({categories, search, page}) => ({
                url: "/news/all",
                params: {
                    categories,
                    search,
                    page,
                    api_token: apiToken,
                    language: "en"
                }
            })
        }),
        getByUuid: build.query({
            query: id => ({
                url: `/news/uuid/${id}`,
                params: {
                    api_token: apiToken,
                    language: "en"
                }
            })
        }),
        getSimilarNews: build.query({
            query: (uuid) => ({
                url: `/news/similar/${uuid}`,
                params: {
                    api_token: apiToken,
                    language: "en"
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

export const { useGetAllNewsByCategoriesQuery, useGetByUuidQuery, useGetSimilarNewsQuery, useGetTopNewsQuery } = apiSlice;