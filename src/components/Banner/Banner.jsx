

const Banner = () => {
    return (
          <div className="hero min-h-[550px]"data-aos="fade-up-right" style={{backgroundImage: 'url(https://i.ibb.co/4mMJr7c/cover2.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Hello World</h1>
              <p className="mb-5">Technology and electronics encompass a broad spectrum of innovations that shape our modern world. Ranging from the development of cutting-edge devices and systems to the intricate circuits and mechanisms that power them.</p>
              <button className="btn bg-amber-200">Explore</button>
            </div>
          </div>
        </div>
    );
};

export default Banner;