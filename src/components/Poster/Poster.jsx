import Container from "../Container"

const Poster = () => {
    return (
        <div className="
            flex
            lg:flex-row
            flex-col
            justify-center
            items-center
            w-full
            h-full
        ">
            <div className="
                lg:order-1
                order-2
                bg-gradient-to-r from-violet-300 to-fuchsia-100
                w-full
                flex
                flex-col
                justify-center
                items-center
            ">
                <Container>
                    <div className="
                        flex    
                        flex-col
                        pr-[100px]
                        justify-center
                        md:py-[160px]
                        pt-[200px]
                        pb-[100px]
                        w-full
                    ">
                        <div className="
                                md:text-[60px]
                                text-[45px]
                                font-semibold
                                text-gray-700
                                pb-[30px]
                            "
                        >
                            Hi, I'm <span className="text-purple-500 font-extrabold font-mono">Quốc.</span>
                            <br />
                            I provide solutions to make life easier for my customers.
                        </div>
                        <div className="
                                md:text-[20px]
                                text-[17px]
                                text-gray-500
                                font-semibold
                                pb-[30px]
                            "
                        >
                            I'm a software engineer based in Ho Chi Minh City, Vietnam specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
                        </div>

                        {/* Button */}
                        <div className="pb-30px">
                            <button className="
                                    bg-purple-500
                                    text-white
                                    font-semibold
                                    text-[15px]
                                    px-[20px]
                                    py-[10px]
                                    rounded-[5px]
                                    hover:bg-purple-600
                                    hover:cursor-pointer
                                    transition
                                "
                            >
                                Get in touch
                            </button>
                        </div>

                    </div>
                </Container>
            </div>
            <div className="
                lg:order-2
                order-1
                background-myself
                w-full
                justify-center
                items-center
            ">

            </div>
        </div>
    )
}

export default Poster