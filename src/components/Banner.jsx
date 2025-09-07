import bannerImg from "../assets/img3.jpg";

function Banner() {
   return (
      <>
         <link rel="preload" as="image" href="../assets/img3.jpg" />

         <section className="banner">
            <img
               src={bannerImg}
               alt="Your Website Heading"
               className="banner-img"
               fetchPriority="high"
            />
            <div className="container banner-text">
               <h1>Your Website Heading</h1>
            </div>
         </section>
      </>
   )
}
export default Banner;