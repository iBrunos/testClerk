import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes';

import './globals.css'

export const metadata = {
    title: 'Lionhearth',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            appearance={
                {
                    variables: {
                        colorPrimary: "#750FC5",
                        colorText: "white",
                        colorTextSecondary: "white",

                    },
                    elements: {
                        logoImage: "ml-16 w-[14rem] h-[14rem]",
                        formFieldAction: "text-red-500",
                        footerActionLink: "text-red-500"
                    },
                    baseTheme: dark,
                    layout: {
                        helpPageUrl: "https://clerk.com/support",
                        logoImageUrl: "https://raw.githubusercontent.com/Archei-Software/ClerkLionHearth/main/public/assets/images/Lionhearth.png",
                        logoPlacement: "inside",
                        privacyPageUrl: "https://clerk.com/privacy",
                        showOptionalFields: true,
                        socialButtonsPlacement: "bottom",
                        socialButtonsVariant: "iconButton",
                        termsPageUrl: "https://clerk.com/terms",
                    }
                }
            } >
            <html lang="en">
                <body className={`${inter.className} bg-dark-1 overflow-hidden`}>
                    {children}
                </body>
            </html>
        </ ClerkProvider>
    )
}