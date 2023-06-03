import Container from "./Container";
import Header from "./Header";

const EducationList = () => {
    return <>
        <div className="py-[150px]">
            <Container>
                <Header title={'EDUCATION PROCESSING'} />

                <div className="
                    flex
                    flex-col
                    justify-start
                    items-start
                    gap-5
                ">
                    <div className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    ">
                        <div className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        ">
                            09/2020 - 01/2023
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <div className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            ">
                                Sai Gon College
                            </div>
                            <div className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            ">
                                <span className="text-black text-[19px]">Major: </span> Computer Programming
                            </div>
                            {/* Description about what studied */}
                            <div className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            ">
                                Tôi là một trong những sinh viên xuất sắc của trường và được nhiều thầy biết đến. Điểm trung bình thang điểm 4 là 3.8. Trong suốt khoảng thời gian đi học, Tôi đã may mắn đạt được học bổng AI Developer của ISC Quang Trung. Tôi còn là một trong hai sinh viên đại diện trường để đi thi Olympic tin học trên Hà Nội.
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    ">
                        <div className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        ">
                            06/2021 - 05/2022
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <div className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            ">
                                Sai Gon College
                            </div>
                            <div className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            ">
                                <span className="text-black text-[19px]">Major: </span> Tham gia lớp thuật toán
                            </div>
                            {/* Description about what studied */}
                            <div className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            ">
                                Việc tham gia lớp thuật toán, tôi học được rất nhiều thuật toán về AI, Back-tracking, Dynamic. Và trở thành một trong hai sinh viên đại diện để đi thi Olympic. Đó là một quá trình nổ lực và không ngừng phát triển.
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    ">
                        <div className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        ">
                            10/2021 - 01/2022
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <div className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            ">
                                Sai Gon College
                            </div>
                            <div className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            ">
                                <span className="text-black text-[19px]">Major: </span> Tham gia khóa thực tập AI Developer
                            </div>
                            {/* Description about what studied */}
                            <div className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            ">
                                Tham gia khóa học AI này, giúp cho em dễ dàng tiếp cận hơn những kiến thức về AI nói chung, và Machine Learning nói riêng. Khóa học giúp em có một nền tảng kiến thức tốt, từ đó tự học và làm ra các sản phẩm AI chất lượng.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
}

export default EducationList;