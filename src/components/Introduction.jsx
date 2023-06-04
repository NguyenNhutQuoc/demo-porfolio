import Container from "./Container";
import Header from "./Header";

const Introduction = () => {
  return (
    <>
      <div
        className="
                w-full
                py-[150px]
                background-image-introduction
            "
      >
        <Container>
          <Header title={"Introduction"} />
          <div
            className="
                        text-center
                        font-semibold
                        text-[20px]
                        text-gray-500
                    "
          >
            <p>
              I am a student at Sai Gon College of Technology and I graduated.
              My major is Computer Programming. I'm the type of person who
              always feels happy and peaceful in my job even if that job is such
              pressure. I want to spill over that feeling to everyone around me
              by talking with them and working with them. I talk a bit, but when
              I speak, I want to talk about meaningful things with everyone.
              Without my weak communication skills, I'm continuously improving
              it better. I'm optimistic and want to make everyone who talks with
              me happy. I'm a person who always wants to learn new things, I
              want to learn new things to improve myself, to make myself better.
              I want to learn new things to make my life more meaningful. In
              addition, I want to make the company in which I'm working more
              growth and more develop
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Introduction;
