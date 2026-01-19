import Card from "./Card";

function Projects() {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-3xl sm:text-4xl text-white text-center font-bold mb-4">
        My Projects
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-[90%] lg:w-[70%] text-white text-center lg:text-left mt-20 mb-20 gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            video="/videos/ash-store.mp4"
            title={"ASH Store"}
            description={
              `A Modern full-stack Freelance Store "ASH Store " built with Next.js and Tailwind CSS, featuring a responsive design and user-friendly interface , This Website is a showcase of my skills in frontend development and design.`
            }
            tags={[
              "Next.js",
              "Tailwind",        
              "Spring Boot",
              "Java",
              "MySQL",
              "Shadcn UI",
              "Vercel",
              "Koyeb",
              "Aiven Console",
              "React Icons",
              "Cloudinary",
              "TypeScript",
            ]}
            link={"https://ash-store1212.vercel.app/"}
          />
          <Card
            video="/videos/admin-dashboard.mp4"
            title={"Admin Dashboard"}
            description={
              "A full-stack Admin Dashboard built with Next.js and Tailwind CSS, featuring a responsive design and user-friendly interface."
            }
            tags={[
              "Next.js",
              "Tailwind",
              "Spring Boot",
              "Java",
              "MySQL",
              "Shadcn UI",
              "Vercel",
              "Koyeb",
              "Aiven Console",
              "React Icons",
              "Cloudinary",
              "TypeScript",
            ]}
            link={""}
          />
          <Card
            images={[
              "p1/ecom1.PNG",
              "p1/ecom2.PNG",
              "p1/ecom3.PNG",
              "p1/ecom4.PNG",
            ]}
            title={"E-Commerce-Shop"}
            description={
              "A modern online store built with Next.js and Tailwind CSS, featuring product listings, dynamic routing, and responsive design for a seamless shopping experience."
            }
            tags={["Next.js", "Tailwind CSS", "TypeScript"]}
            link={"https://e-commerce-shop-nb7y.vercel.app/"}
          />
          <Card
            images={["p2/salon1.PNG", "p2/salon2.PNG", "p2/salon3.PNG"]}
            title={"Salon Project"}
            description={
              "A Back-end salon management system built with Spring Boot microservices and MySQL, handling appointments, clients, and services with a RESTful backend architecture."
            }
            tags={["Java", "Spring Boot", "Microservices", "MySQL"]}
            link={"https://github.com/mohamed-gamal-abuzaid/salon-project"}
          />
          <Card
            images={[
              "p3/Landing-Page.PNG",
              "p3/Landing-Page2.PNG",
              "p3/Landing-Page3.PNG",
              "p3/Landing-Page4.PNG",
              "p3/Landing-Page5.PNG",
            ]}
            title={"Landing-Page"}
            description={
              "A responsive landing page for a headphone brand built with Next.js and Tailwind CSS, focused on clean design, performance, and accessibility."
            }
            tags={["Next.js", "Tailwind CSS", "TypeScript"]}
            link={"https://gimy-shop-nine.vercel.app/"}
          />
          {/*<Card
            images={[""]}
            title={"Egypt-Game-Store"}
            description={""}
            tags={["Next.js", "Tailwind CSS", "TypeScript"]}
            link={""}
          />*/}
          <Card
            images={["p5/pizzamenu.PNG"]}
            title={"Pizza-Menu"}
            description={
              "A simple React app displaying a pizza menu using component-based architecture and dynamic rendering with clean, reusable CSS styling."
            }
            tags={["React.js", "CSS", "JavaScript"]}
            link={"https://github.com/mohamed-gamal-abuzaid/pizza-menu"}
          />
          <Card
            images={["p6/catalog1.PNG", "p6/catalog2.PNG", "p6/catalog3.PNG"]}
            title={"Catalog"}
            description={
              "A full-stack product catalog system integrating a Java Spring Boot backend with a Next.js frontend, featuring CRUD operations and MySQL database ."
            }
            tags={[
              "Java",
              "Spring Boot",
              "MySQL",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
            ]}
            link={"https://github.com/mohamed-gamal-abuzaid/back-end-catalog"}
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
