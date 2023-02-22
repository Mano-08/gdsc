import Image from "next/image";
import styles from "./WinterSchool.module.scss";
import winterSchoolLogo from "../../images/winterSchoolLogo.png";
import Link from "next/link";
import CourseCard from "../../components/cards/CourseCard";
import winterBackground from "../../images/winterBackground1.jpg";
import webdev from "../../images/webdev.png";
import github from "../../images/github.png";
import dsa from "../../images/dsa.png";
import cert from "../../images/winterSchool/cert.svg";
import certText from "../../images/winterSchool/certText.svg";
import project from "../../images/winterSchool/project.svg";
import projectText from "../../images/winterSchool/projectText.svg";
import intern from "../../images/winterSchool/intern.svg";
import internText from "../../images/winterSchool/internText.svg";
import doubt from "../../images/winterSchool/doubt.svg";
import doubtText from "../../images/winterSchool/doubtText.svg";
import ritvik from "../../images/team/lead.png";

const Card = ({ name, imageURL }) => {
  return (
    <div className={styles.facilitatorCard}>
      <Image src={imageURL} alt="facilitator" />
      <p>{name}</p>
    </div>
  );
};

function index() {
  return (
    <div id={styles.winterSchoolContainer}>
      <Image id={styles.winterBackground} src={winterBackground} alt="" />
      <section id={styles.winterTheme}>
        <Image src={winterSchoolLogo} id={styles.winterSchoolLogo} alt="" />
        <h1 id={styles.winterSchoolTitle}>Winter School</h1>
        <p id={styles.winterSchoolContext}>
          Winter School is an online course conducted by GDSC NIT Andhra
          Pradesh. This online course will guide three of the most demanding
          courses required in the programming field. - Data structures and
          algorithms - Web development - Git and GitHub Winter School aims to
          provide a more profound and in-depth understanding of these topics.
          The subject undertaken will be taught by experienced and qualified
          mentors. The schedule of this course starts on 21st December and ends
          on 30th December 2022. The key aspects that make Winter School stand
          out from other available courses are: - 1-1 doubt sessions - Practical
          problems implementation - Certificate by GDSC - Potential internship
          counseling Renowned professionals will join the course and share their
          insights and knowledge in their respective fields.
        </p>
        <Link href="/events">
          <div id={styles.stayUpdatedBtn}>Stay Updated</div>
        </Link>
      </section>
      <section id={styles.coursesContainer}>
        <h1>Courses Offered</h1>
        <div id={styles.winterSchoolCourses}>
          <CourseCard
            imgURL={github}
            courseName={"Git & GitHub"}
            courseDescription={
              "Learn how the business world uses Git and its cloud sister, Github, to keep track of all its code. By the end of this course, you will be able to comprehend the fundamentals of Git and Github, as well as design a template website using Jekyll or start your portfolio website using Github Pages."
            }
          />
          <CourseCard
            imgURL={dsa}
            courseName={"Data Structure & Algorithm"}
            courseDescription={
              "DSA is a magnet for high-paying professions and a competency required to be a successful programmer. It provides the groundwork for who you want to be. By the end of this course, you should be able to grasp how data structures are used in real-world scenarios and have received some basic training in answering practical interview questions."
            }
          />
          <CourseCard
            imgURL={webdev}
            courseName={"Web Development"}
            courseDescription={
              "Through project-based learning, learn how to build a website using HTML/CSS and Javascript. By the conclusion of this course, you will have built your own personal portfolio website and launched it on Github."
            }
          />
        </div>
      </section>
      <div id={styles.benefitsWrapper}>
        <section id={styles.courseBenefitsContainer}>
          <div className={styles.benefitsIcon}>
            <Image src={cert} alt="" />
            <Image className={styles.benefitText} src={certText} alt="" />
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={doubt} alt="" />
            <Image className={styles.benefitText} src={doubtText} alt="" />
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={intern} alt="" />
            <Image className={styles.benefitText} src={internText} alt="" />
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={project} alt="" />
            <Image className={styles.benefitText} src={projectText} alt="" />
          </div>
        </section>
      </div>
      <h1 id={styles.FacilitatorsTitle}>Course Facilitators</h1>
      <section id={styles.courseFacilitators}>
        <Card name={"Mamoor Jaan Khan"} imageURL={ritvik} />
        <Card name={"Ritvik G"} imageURL={ritvik} />
        <Card name={"Vobugari Raja Karthik"} imageURL={ritvik} />
      </section>
    </div>
  );
}

export default index;