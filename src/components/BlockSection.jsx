import LazyImage from "./LazyImage";

function BlockSection() {
   return(
      <>
         {/* 3 Blocks Section */}

         <section>
         <div className='container'>
            <div className="blocks">
               <article className="block">
               <LazyImage src="/img1.jpg" alt="Service 1" className="images"/>
               <h2>Heading One</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  vel sapien vel orci feugiat.
               </p>
               </article>

               <article className="block">
               <LazyImage src="/img2.jpg" alt="Service 1" />
               <h2>Heading Two</h2>
               <p>
                  Curabitur sed elit vitae eros dictum porttitor. Integer fermentum
                  nunc et lacus posuere.
               </p>
               </article>

               <article className="block">
               <LazyImage src="/img2.jpg" alt="Service 1" />
               <h2>Heading Three</h2>
               <p>
                  Sed vel risus euismod, consequat eros sed, tincidunt mauris.
                  Vivamus vitae lorem sit amet.
               </p>
               </article>
            </div>
         </div>
         </section>
      </>
   )
}

export default BlockSection;