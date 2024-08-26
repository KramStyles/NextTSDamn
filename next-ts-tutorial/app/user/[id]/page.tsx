import Link from "next/link";
import {Metadata} from "next";

interface Props {
    params: { id: string }
}

export const generateMetadata = async ({params: {id}}: Props): Promise<Metadata> => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const data = await fetch(url, {
        next: {
            tags: ["user_details"],
        }
    })
    const user = await data.json()
    return {
        title: user.name
    }
}

const UserInfoPage = async ({params: {id}}: Props) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const data = await fetch(url, {
        next: {
            tags: ["user_details"],
        }
    })
    const user = await data.json()
    const address = user.address
    return <div>
        <p>User ID: {id}</p>
        <p>Name: {user.name}</p>
        <p>Email Address : {user.email}</p>
        <p>Username: {user.username}</p>
        <p>ZipCode: {address?.zipcode ? address.zipcode : "Zipcode not available."}</p>
        <p>Address: {address?.street ? address.street : "No street,"},
                    {address?.suite ? address.suite : "No suite"}.
                    {address?.city ? address.city : "No city"}.
        </p>
        <br/>
        <Link href={"/server"}>Go back to Server Users.</Link>
    </div>
}

export default UserInfoPage;
