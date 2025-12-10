import { Search } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  const dummyUserList = [
    {
      id: 1,
      name: "Alice Johnson",
      online: true,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Bob Smith",
      online: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Carol White",
      online: true,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "David Brown",
      online: true,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <>
      <div className="bg-muted-foreground px-5">
        <div>
          {/* Image div */}
          <div className="flex ml-10 gap-2 mt-2">
            <img
              src="https://images.unsplash.com/photo-1762770663487-6c03bb94fe84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
              alt="Beautiful landscape"
              className="rounded-full size-10"
            />
            <span className="ml-2 tracking-wide text-center rounded-2xl font-normal text-white hover:text-neutral-400 text-xl transform translate-y-1.5">
              {userSkills.name}
            </span>
          </div>
          <hr className="mt-5 w-3/4 ml-10" />
          {/* All the users here from the backend */}
          <div className=" ml-10 mt-2">
            <h1 className="text-[20px] font-normal text-black/70">
              Search for the users
            </h1>
            <Search size={15} className="translate-y-6 translate-x-1" />
            <input
              className="w-full mx-auto bg-transparent text-xs focus:outline-none placeholder:text-neutral-500 text-neutral-500 border borde focus:ring-5 focus:ring-white/30 active:ring-offset-1"
              placeholder="Search.."
            />
          </div>
          {/* Skills Section */}
          {/* {dummyUserList && (
            
          )} */}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

const userSkills = {
  name: "Tushar kumar",
  image: "/chat2.webp",
  frontEndSkils: [
    { name: "Javascript", experience: "1 Year" },
    { name: "ReactJs", experience: "6 Month" },
    { name: "NextJs", experience: "6 Month" },
    { name: "Tailwind", experience: "1 Year" },
    { name: "BootStrap", experience: "1 Year" },
    { name: "Css", experience: "1.5 Year" },
    { name: "html5", experience: "1.5 Year" },
  ],
  backEndSkills: [
    { name: "NodeJs", experience: "1 Year" },
    { name: "expressJs", experience: "1 Year" },
    { name: "MongoDB", experience: "1 Year" },
    { name: "MySql", experience: "1 Year" },
    { name: "Socket.io", experience: "6 Month" },
  ],
  devOps: [
    { name: "Docker", experience: "6 Month" },
    { name: "Aws Ec2", experience: "6 Month" },
    { name: "Aws S3", experience: "6 Month" },
    { name: "Kafka", experience: "2 Month" },
    { name: "GitHub", experience: "1 Year" },
    { name: "GitHub Actions", experience: "1Year" },
  ],
};
