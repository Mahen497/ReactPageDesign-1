import LazyImage from "./LazyImage";

function SplitSection() {
  return (
    <section>
      <div className="container split-section">
        <div className="text">
          <h2>About Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque vel posuere ligula. Nam vitae mauris vel odio varius pretium.
          </p>
        </div>
        <LazyImage src="/img3.jpg" alt="About Image" className={"image"}/>
      </div>
    </section>
  );
}

export default SplitSection;
