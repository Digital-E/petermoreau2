// import Footer from '../components/footer'
import Meta from "../components/meta";

export default function Layout({ preview, children, title, content, ogImage }) {

  return (
    <>
      <Meta title={title} content={content} ogImage={ogImage} />
      <div>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
