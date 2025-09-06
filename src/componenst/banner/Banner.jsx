import bgShadow from "../../assets/bg-shadow.png"
import bannerPik from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div>
            <div
                className="h-72 mx-14 rounded-3xl bg-repeat bg-cover bg-center mt-24"
                style={{ backgroundImage: `url(${bgShadow})` }}
            >
                <div className="absolute inset- bg-black bg-opacity-60"></div>
                <div className="text-center px-4 py-5">
                <img src={bannerPik} alt="banner-img" className="mx-auto mb-4 w-32 object-center " />
                <div>
                <h1 className="text-3xl ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className="bg-yellow-300 rounded-3xl p-2">Claim Free Credit</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
