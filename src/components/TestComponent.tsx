import axios from 'axios';

export const TestComponent = () => {
    return (
        <h1> Placeholder API Tests </h1>
    )
}

interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
  }

const defaultPosts:IPost[] = [];

export default TestComponent;