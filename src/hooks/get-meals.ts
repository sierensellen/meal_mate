import { Meal } from "@shared/types"
import { useQuery } from "react-query"

export const useGetMeals = () => {
    return useQuery('meals', () => (
        fetch("/api/meals/get-all").then((res) => res.json())
    ), {
        keepPreviousData: true
    })
}