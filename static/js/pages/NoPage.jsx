import { Link } from "react-router-dom";
import SeoMeta from "../component/SeoMeta";
import thumb404 from '../assets/images/general/404.svg'

const NoPage = () => {
  return(
    <>
      <SeoMeta
        title="404 | Chatllat"
        description="Page not found"
        image="https://yourdomain.com/images/404-preview.png"
      />
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <img src={thumb404} className="w-full max-w-2xl mx-auto" alt="404" />
                </div>
                <div className="contant_box_404 text-white mt-10">
                  <h3 className="text-2xl font-medium">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to="/" className="inline-flex px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300 mt-5">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) 
};

export default NoPage;
