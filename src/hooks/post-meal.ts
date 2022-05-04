import { Meal } from "@shared/types"
import { MutationKey, useMutation } from "react-query"

export const usePostMeal = (afterPostMeal?: () => void) => {
    return useMutation((data: Meal) => (
        fetch("/api/meals/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers:
            {
                "Content-Type":
                    "application/json",
            },
        })
    ), {
        onSuccess: afterPostMeal
    })
}