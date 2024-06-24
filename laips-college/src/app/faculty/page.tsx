// Page.tsx
import React from "react";
import Banner from "@/components/global/Banner";
import FacultyCard from "./facultyCard";

interface User {
  img: string;
  name: string;
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const users: User[] = [
    {
      img: "/img/person.jpg",
      name: "John Doe",
      title: "Dean",
      description:
        "John Doe is a visionary Dean known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world.",
    },
    {
      img: "/img/person.jpg",
      name: "Carole Steward",
      title: "Professer",
      description:
        "Carole Steward is a visionary Professer known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world.",
    },
    {
      img: "/img/person.jpg",
      name: "Carole Steward",
      title: "Professer",
      description:
        "Carole Steward is a visionary Professer known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world.",
    },
    {
      img: "/img/person.jpg",
      name: "Carole Steward",
      title: "Professer",
      description:
        "Carole Steward is a visionary Professer known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world.",
    },
    {
      img: "/img/person.jpg",
      name: "Carole Steward",
      title: "Professer",
      description:
        "Carole Steward is a visionary Professer known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world.",
    },
  ];

  return (
    <div>
      <Banner name="Faculty" shortDesc="Meet Our Esteemed Faculty" />
      <div className="container grid md:grid-cols-4 md:gap-4 my-8">
        {users.map((user, index) => (
          <FacultyCard
            key={index}
            name={user.name}
            img={user.img}
            title={user.title}
            description={user.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
