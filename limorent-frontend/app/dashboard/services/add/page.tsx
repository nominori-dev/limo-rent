import * as React from "react";
import {MainNav} from "@/app/dashboard/components/main-nav";
import {Search} from "@/app/dashboard/components/search";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {getPostBySlug} from "@/app/dashboard/services/actions";
import {PostResponse} from "@/app/dashboard/services/services.types";
import AddServiceForm from "./AddServiceForm";




export default async function AddServicePage() {
    return (
        <div className={"pt-10"}>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <Search/>
                        <UserNav/>
                    </div>
                </div>
            </div>
            <AddServiceForm/>
        </div>
    )

}