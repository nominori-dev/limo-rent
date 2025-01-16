import { Metadata } from "next"
import { UserAuthForm } from "@/app/(cms)/dashboard/auth/components/UserAuthForm"

export const metadata: Metadata = {
    title: "LimousineRent - Logowanie",
}

export default function AuthenticationPage() {
    return (
        <div
            className="pt-12 container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-24">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900">
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Logowanie do panelu administracyjnego
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Wprowadź e-mail i hasło aby zalogować się na konto
                        </p>
                    </div>
                    <UserAuthForm/>
                </div>
            </div>
        </div>
    )
}
