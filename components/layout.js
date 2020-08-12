// import Footer from '../components/footer'
import Meta from "../components/meta";

export default function Layout({ preview, children, title }) {
  return (
    <>
      <Meta title={title} />
      <div>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
