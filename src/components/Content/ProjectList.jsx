import Container from "../Container";
import Header from "../Header"
const ProjectList = () => {
    return (
        <div className="py-[150px] bg-gradient-to-r from-yellow-300 to-fuchsia-200 px-2">
            <Container>
                <Header title='MY PROJECTS' />
                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    justify-between
                    gap-[50px]
                ">
                    <div className="
                        flex
                        flex-col
                        justify-start
                        gap-[30px]
                        bg-white
                        flex-1
                        shadow-lg
                        hover:shadow-2xl
                        hover:translate-y-[-5px]
                        transition
                        duration-[300ms]
                    ">
                        <div className="
                            bg-cover
                            bg-center
                            bg-no-repeat
                            background-image-project-1
                        ">
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
                        h-[700px]
                        lg:h-[600px]
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
                                    FACE RECOGNITION BASED ON DEEP LEARNING AND HSV COLOR SPACE 
                                </div>
                                <div className="
                                text-gray-500
                                text-md
                                font-normal
                                text-justify
                            ">
                                    This is a scientific research project of mine in collaboration with Dr. Narayan C. Debnath and my supervisor, Professor Nguyen Dinh Vinh, the head of the Faculty of Information Technology at FPT University in Can Tho. The project has been written up as a scientific paper and published at AISI2022 (The 8th Conference on Advanced Intelligent Systems and Informatics). The project focuses on exploring the combination of Deep Learning and HSV Color Space for face recognition with the aim of improving the accuracy of the model. 
                                    <br />
                                    <p className="
                                        text-black
                                        text-md
                                        font-semibold
                                        text-justify
                                        mb-2
                                    ">
                                        The paper link: <a href="https://link.springer.com/chapter/10.1007/978-3-031-20601-6_15" className="
                                            text-blue-500
                                            hover:text-blue-700
                                            transition
                                            duration-300
                                            font-semibold
                                        "> Link paper </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="
                        flex
                        flex-col
                        justify-start
                        items-start
                        gap-[30px]
                        bg-white
                        flex-1
                        shadow-lg
                        hover:shadow-2xl
                        hover:translate-y-[-5px]
                        transition
                        duration-[300ms]
                    ">
                        <div className="
                            bg-cover
                            bg-center
                            bg-no-repeat
                            background-image-project-2
                        ">
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
                        h-[600px]
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
                                    AIR-BNB CLONE
                                </div>
                                <div className="
                                text-gray-500
                                text-md
                                font-normal
                                text-justify
                            ">
                                    Airbnb is an online marketplace and hospitality platform that allows individuals to rent out their properties or spare rooms to travelers. It provides a convenient and alternative option for accommodation, connecting hosts with guests from around the world.
                                    <br />
                                    On the Airbnb website, users can search for various types of accommodations, ranging from apartments and houses to unique properties like castles or treehouses. Each listing includes details such as photos, descriptions, amenities, and reviews from previous guests, helping users make informed decisions.
                                    <br />
                                    <p className="
                                        text-black
                                        text-md
                                        font-semibold
                                        text-justify
                                        mb-2
                                    ">
                                        The Website's Link: <a href="https://airbnb-murex-delta.vercel.app/" className="
                                            text-blue-500
                                            hover:text-blue-700
                                            transition
                                            duration-300
                                            font-semibold
                                        ">https://airbnb-murex-delta.vercel.app/ </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectList;