/*Template generated by PyCharm on Friday (9/20/2024), 10:00 AM.
* Author: Kramstyles (USER)
* Filename: page.jsx
*/

import {revalidateTag} from "next/cache";

const RefreshPage = () => {
    revalidateTag("posts", "single_post")
    return (
        <div>
            <h1 className="text-4xl text-center text-white">On-Demand Validation</h1>
        </div>
    );
};

export default RefreshPage