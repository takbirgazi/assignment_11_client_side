import banner from '../../assets/image/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Seven Star</h1>
                <p className="mb-5">Where luxury meets unparalleled hospitality. Book your stay with us for an unforgettable experience in elegance and comfort.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;