/*Template generated by NextTSDamn on Thursday (8/29/2024), 2:23 PM.
* Author: Kramstyles (USER)
* Filename: next-ts-tutorial/components/NavBar.tsx
*/

import NavItem from "@/components/NavItem";

const NavBar = () => {
    return (
        <div className="flex dark:bg-amber-600 bg-amber-200 p-7 lg:text-lg justify-center gap-4">
            <NavItem title="Trending" param="fetch-trending"/>
            <NavItem title="Top Rated" param="fetch-top-rated"/>
        </div>
    );
};

export default NavBar