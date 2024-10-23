import { assets } from "../assets/assets/assets"


const Upload = () => {
    return (
        <div className="pb-16">
            {/* ---Title--- */}
            <h1 className="text-center text-8xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
                See the magic. Try now
            </h1>
            <div className="text-center mb-24">
                <input type="File" id="upload2" hidden />
                <label className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white" htmlFor="upload2"><img className="w-5 sm:w-5" src={assets.upload_btn_icon} />
                    <p>Upload your image</p></label>
            </div>
        </div>
    )
}

export default Upload