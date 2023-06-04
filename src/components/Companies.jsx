import Container from "./Container";
import Header from "./Header";

const Companies = () => {
  return (
    <>
      <div className="py-[150px] background-image-working">
        <Container>
          <Header title={"COMPANIES WORKING"} />

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
                08/2022 - 11/2022
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
                  Biz4 Group Company
                </div>
                <div
                  className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-black text-[19px]">Position: </span>{" "}
                  Internship
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            "
                >
                  During my internship at Biz4 Group, I gained valuable
                  experience in web programming, specifically focusing on the
                  back-end and data aspects. For back-end development, I used
                  .NET Core, and for data management, I worked with Microsoft
                  SQL Server. Additionally, I had the opportunity to learn about
                  teamwork, effective work practices, and problem-solving
                  skills.
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
                11/2022 - 06/2023
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
                  Biz4 Group Company
                </div>
                <div
                  className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-black text-[19px]">Position: </span>{" "}
                  Data Admin and Back-end Developer
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            "
                >
                  When I took on both positions officially, I had the
                  opportunity to take on a lot of responsibilities, which
                  naturally came with increased pressure. However, I was able to
                  handle all of those pressures. During my time in these two
                  roles, I learned a great deal about back-end and data
                  development. Specifically, I gained knowledge on organizing
                  data, writing efficient and maintainable C# code, and
                  optimizing stored procedures for maximum effectiveness. I
                  continued to learn and expand my skills in various other areas
                  as well.
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
                06/2023 - NOW
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
                  Công ty TNHH HDWEBSOFT
                </div>
                <div
                  className="
                                text-gray-600
                                text-[18px]
                                font-semibold
                            "
                >
                  <span className="text-black text-[19px]">Position: </span>{" "}
                  Back-end Developer
                </div>
                {/* Description about what studied */}
                <div
                  className="
                                text-gray-400
                                text-[16px]
                                font-semibold
                            "
                >
                  This company has been operating and developing for over 12
                  years and is an outsourcing company, providing me with
                  numerous opportunities to work on different projects and
                  business domains. This allows me to enhance my ability to
                  quickly grasp new business concepts and learn various
                  development skills. By doing so, I can contribute more
                  effectively to the company, ultimately helping to increase its
                  revenue.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Companies;
