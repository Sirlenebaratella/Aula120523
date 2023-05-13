import	{useQuery } from '@tanstack/react-query'

const fetchUsers = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/")
    return res.json();
};

export const useUsers = () => {
    const { data, error , isLoading } = useQuery(["users", fetchUsers]);

    return {
        users: data,
        isLoading,
        error,
    }

}