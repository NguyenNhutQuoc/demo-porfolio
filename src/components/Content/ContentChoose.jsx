import Container from "../Container";
import Header from "../Header";

const ContentChoose = () => {
    return (
            <div className="py-[150px] px-2">
                <Container>
                <Header subtitle='WHY CHOOSE ME?' title='Here are a few reasons why companies choose me' />
                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    justify-start
                    items-start
                    gap-[50px]
                ">
                    <div className="
                        p-5
                        bg-white
                        shadow-lg
                        rounded-md
                        flex
                        flex-row
                        justify-start
                        items-start
                        h-[500px]
                        flex-1
                        hover:shadow-2xl
                        hover:translate-y-[-5px]
                        transition
                    ">
                        <div className="
                            text-purple-400
                            text-6xl
                            font-mono
                            mr-5
                        "
                        >
                            01
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                            
                        ">
                            <div className="content-header
                                text-gray-700
                                font-semibold
                                text-[30px]
                                mb-2
                            ">
                                Having a love for learning
                            </div>
                            <div className="
                                text-gray-500
                                text-md
                                font-normal
                                text-justify
                            ">
                                Having a love for learning is an incredible quality that opens doors to endless possibilities. It is the genuine curiosity and eagerness to acquire knowledge and expand one's understanding of the world. 
                            </div>
                        </div>
                    </div>

                    <div className="
                        p-5
                        bg-white
                        shadow-lg
                        rounded-md
                        flex
                        flex-row
                        flex-1
                        justify-start
                        items-start
                        hover:shadow-2xl
                        hover:translate-y-[-5px]
                        transition
h-[500px]
                    ">
                        <div className="
                            text-purple-400
                            text-6xl
                            font-mono
                            mr-5
                        "
                        >
                            02
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <div className="content-header
                                text-gray-700
                                font-semibold
                                text-[30px]
                                mb-2
                            ">
                                Diligence
                            </div>
                            <div className="
                                text-gray-500
                                text-md
                                font-normal
                                text-justify
                            ">
                                Diligence is the consistent and earnest effort put forth in accomplishing tasks or goals. It is the quality of being thorough, attentive, and industrious in one's work. Diligence involves staying focused, disciplined, and committed to achieving excellence
                            </div>
                        </div>
                    </div>

                    <div className="
                        p-5
                        bg-white
                        shadow-lg
                        rounded-md
                        flex
                        flex-row
                        justify-start
                        items-start
                        flex-1
                        hover:shadow-2xl
                        hover:translate-y-[-5px]
                        transition
h-[500px]
                    ">
                        <div className="
                            text-purple-400
                            text-6xl
                            font-mono
                            mr-5
                        "
                        >
                            03
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <div className="content-header
                                text-gray-700
                                font-semibold
                                text-[30px]
                                mb-2
                            ">
                                Perseverance
                            </div>
                            <div className="
                                text-gray-500
                                text-md
                                font-normal
                                text-justify
                            ">
                                Perseverance is the unwavering determination to achieve a goal, despite challenges and setbacks along the way. It is the ability to stay focused, motivated, and committed when faced with obstacles. Perseverance pushes individuals to keep going even when things get tough, enabling them to overcome adversity and reach their desired outcome.
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
            </div>
    )
}

export default ContentChoose;