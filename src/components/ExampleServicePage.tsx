import example from "../microservices/example.service"
import IExampleData from "../ts/IExampleData";
import { create } from 'zustand'

interface ToDoState {
  todos: IExampleData[]
  refresh: () => void
}

const useBearStore = create<ToDoState>()((set) => ({
  todos: [],
  refresh: () => set((state) => ({ todos: example.getAll()})),
}))


let data = await example.getAll();
for (var datum of data) {
    console.log(datum)
}
export const ExampleServicePage = () => {
    return (
        <>
        Test.
        </>
    )

}