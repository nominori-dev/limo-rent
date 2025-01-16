import React from "react";


type HeadingOptions = {
    children?: React.ReactNode;
}

export const Heading = {
    H1: ({ children } : HeadingOptions) => <h1 className="text-2xl text-red-500 py-2 font-bold">{children}</h1>,
    H2: ({ children } : HeadingOptions) => <h2 className="text-xl font-bold">{children}</h2>,
};