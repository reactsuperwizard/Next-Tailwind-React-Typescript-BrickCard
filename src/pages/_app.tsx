import axios from "axios"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useState } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import DefaultLayout from "@layouts/Default"


import "../styles/globals.css"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const { locale = "en" } = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>

        <ReactQueryDevtools initialIsOpen={false} position="top-right" />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default CustomApp
