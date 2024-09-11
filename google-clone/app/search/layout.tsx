/*Template generated by google-clone on Wednesday (9/11/2024), 4:26 AM.
* Author: Kramstyles (USER)
* Filename: app/search/layout.tsx
*/

import React from "react";
import SearchHeader from "@/components/SearchHeader";
import "../globals.css"

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return (
        <div>
            <SearchHeader />
            { children }
        </div>
    );
};

export default layout