import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
			<div className="text-red-500">Hello</div>
			<Component {...pageProps} />
		</div>
}

export default MyApp
