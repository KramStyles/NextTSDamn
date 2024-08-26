/*Template generated by PyCharm on Sunday (8/25/2024), 2:34 PM.
* Author: Kramstyles (USER)
* Filename: server/page.tsx
*/

import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Server Side Rendering (SSR)",
    description: "Description for SSR"
}

const ServerPage = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url, {
        next: {
            // revalidate: 300, // Caches and removes cache after 5 Minutes.
            tags: ["users"],
        }
    });
    const users = await data.json()

    // Get local created api
    const localData = await fetch("http://localhost:3000/api")
    const localResponse = await localData.json()

    return (
        <div>
            <h1>Server Side Data Fetch Rendering:
                ({localResponse.message})</h1>
            <br/>
            <ul>
                {users && users?.map((user: any) =>
                    <li key={user.id}>
                        <Link href={`/user/${user.id}`}>
                            <b>{user.username}</b> {user.name}
                        </Link>
                    </li>
                )
                }
            </ul>
        </div>
    );
};

export default ServerPage