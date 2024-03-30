	
import { reactive } from 'vue'

export const store = reactive({
  mainTitle: "...Rick&Morty...",
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  errorMsg: '',
  counter: 1,
  queryParams: {
    name: '',
    status: '',
    page: 1,
    allPages: 0
  },
})