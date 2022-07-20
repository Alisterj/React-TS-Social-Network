import {PostType} from "../App";
import {v1} from "uuid";

export const PostsReducer = (state: PostType[], action: addPostACType): PostType[] => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {id: v1(), title: action.payload.title, img: 'https://sun9-48.userapi.com/s/v1/ig2/BeLFwdk8aLlAb0txQpRpuLiQw9c4CZtMZel_6CrJ5qv0VIrfzYrsDvTmvLskJ8C39dVEnxehRomDeolnJRA7zGyc.jpg?size=100x100&quality=95&crop=46,0,883,883&ava=1'}
            return [newPost,...state]
        default:
            return state
    }
}

type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (title: string) => {
    return {
        type: "ADD-POST",
        payload: {
            title,
        }
    } as const
}