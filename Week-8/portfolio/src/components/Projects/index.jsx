import EU from "../../public/EU";

const Projects = () => {
  return (
    <div className="flex flex-col p-8 gap-4 items-center w-full h-screen overflow-scroll">
      <section id="project-1" className="flex flex-col gap-2">
        <h2>
          <a href="https://confluence-alpha.vercel.app/">Confluence</a>
        </h2>
        <p>
          Social hiring platform that helps the content creators to get
          opportunities directly fromt the platform from where they are posting.
          Along with posting their creatives, The users can hire the creator on
          the liking of the creative
        </p>
        <p>The project is still in progress.</p>
      </section>
      <section id="project-2" className="flex flex-col gap-3">
        <h2 className="flex flex-col gap-1">
          <a href="https://eazyupdates.com/">EazyUpdates</a>
          <EU />
        </h2>
        <p>
          Task management application that can help engineering managers track
          the engineers progress to meet the companys goals. Below mentioned are
          some of the notable features
        </p>
        <h4 className="font-semibold">Project timeline</h4>
        <p>
          A project timeline is a comprehensive area which outlines tasks and
          deadlines but also includes employee assignments, work updates,
          stand-up meetings, regular meetings, and release notes. It serves as a
          centralized tool for tracking project progress, facilitating
          communication, and ensuring efficient project management from start to
          finish.
        </p>
        <h4 className="font-semibold">Organisation chart</h4>
        <p>
          A visual representation that illustrates the hierarchical structure of
          an organization. It displays the relationships, roles, and reporting
          lines of employees, helping to clarify the chain of command and the
          distribution of responsibilities within the organization.
        </p>
        <h4 className="font-semibold">My timeline</h4>
        <p>
          This timeline provides a comprehensive overview of your project
          involvement, tracking work updates, and highlighting any missed
          updates. It offers a clear and organized way to monitor your
          contributions across various projects, ensuring effective
          communication and accountability.
        </p>
        <h4 className="font-semibold">Asset management</h4>
        <p>
          Asset management refers to the systematic process of acquiring,
          tracking, maintaining, and optimizing an organizations physical and
          digital assets.
        </p>
        <h4 className="font-semibold">Leaves management</h4>
        <p>
          Leave management is the process of efficiently tracking and managing
          employee leaves within an organization. It encompasses requesting,
          approving, and tracking different types of leaves such as vacation,
          sick leave, or personal time off while ensuring compliance with
          company policies and labor regulations.
        </p>
        <h4 className="font-semibold">Task management</h4>
        <p>
          Streamline your work with our Task Management feature, designed for
          solo entrepreneurs and collaborative teams alike. Stay organized, meet
          deadlines, and achieve success effortlessly. Elevate your productivity
          with our user-friendly solution.
        </p>
      </section>
    </div>
  );
};

export default Projects;
