import React from 'react'
import { useLoaderData } from 'react-router-dom';
export async function loader({ params }) {
    return params.id;
}
const User = () => {
    const id = useLoaderData()
    console.log(id);
    return (
        <div>User {id}</div>
    )
}

export default User