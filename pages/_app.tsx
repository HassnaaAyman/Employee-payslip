import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmployeeProvider } from "../context/state";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmployeeProvider>
      <Component {...pageProps} />
    </EmployeeProvider>
  );
}
export default MyApp;
