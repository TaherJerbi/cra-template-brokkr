import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// A project most likely has only one API.
// for code splitting, we can use api.injectEndpoints

// const extendedApi = emptySplitApi.injectEndpoints({
//   endpoints: (build) => ({
//     example: build.query({
//       query: () => 'test',
//     }),
//   }),
//   overrideExisting: false,
// })
export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`
    })
  })
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
