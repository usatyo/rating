import { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  readonly children?: ReactElement
}

const Layout = (props: Props): ReactElement => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout