import Container from "./Container";
import Header from "./Header";

const EducationList = () => {
  return (
    <>
      <div className="py-[150px] background-image-learning">
        <Container>
          <Header title={"EDUCATION PROCESSING"} />

          <div
            className="
                    flex
                    flex-col
                    justify-start
                    items-start
                    gap-5
                "
          >
            <div
              className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    "
            >
              <div
                className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        "
              >
                09/2020 - 01/2023
              </div>
              <div
                className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        "
              >
                <div
                  className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            "
                >
                  Sai Gon College
                </div>
                <div
                  className="
                                text-gray-100
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-gray-100 text-[19px]">Major: </span>{" "}
                  Computer Programming
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-200
                                text-[16px]
                                font-semibold
                            "
                >
                  I am one of the outstanding students at my school and
                  well-known by many professors. My GPA on a 4-point scale is
                  3.8. Throughout my time in school, I have been fortunate
                  enough to receive the AI Developer scholarship from ISC Quang
                  Trung. Additionally, I am one of the two students chosen to
                  represent our school in the Computer Science Olympiad in
                  Hanoi.
                </div>
              </div>
            </div>
            <br />
            <div
              className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    "
            >
              <div
                className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        "
              >
                06/2021 - 05/2022
              </div>
              <div
                className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        "
              >
                <div
                  className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            "
                >
                  Sai Gon College
                </div>
                <div
                  className="
                                text-gray-100
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-gray-100 text-[19px]">Major: </span>{" "}
                  Tham gia lớp thuật toán
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-200
                                text-[16px]
                                font-semibold
                            "
                >
                  By participating in the algorithm class, I have learned a
                  great deal about AI algorithms, including Backtracking and
                  Dynamic Programming. This knowledge has helped me become one
                  of the two students selected to compete in the Olympics. It
                  has been a process of hard work and continuous development.
                </div>
              </div>
            </div>
            <br />
            <div
              className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-5
                    "
            >
              <div
                className="
                            text-purple-400
                            text-[25px]
                            font-mono
                            flex-1
                        "
              >
                10/2021 - 01/2022
              </div>
              <div
                className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        "
              >
                <div
                  className="
                                text-purple-400
                                text-[20px]
                                font-semibold
                            "
                >
                  Sai Gon College
                </div>
                <div
                  className="
                                text-gray-100
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-white text-[19px]">Major: </span> Tham
                  gia khóa thực tập AI Developer
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-200
                                text-[16px]
                                font-semibold
                            "
                >
                  Participating in this AI course has made it easier for me to
                  access general AI knowledge and specifically, Machine
                  Learning. The course has provided me with a solid foundation
                  of knowledge, enabling me to self-study and create
                  high-quality AI products.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EducationList;
