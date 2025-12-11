"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfilePage = ({ setSelectedUser }) => {
  const [filteredUsers, setFilteredUsers] = React.useState(dummyUserList);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

    const results = dummyUserList.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setFilteredUsers(results);
  };

  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="bg-muted-foreground px-5 h-[75vh] overflow-hidden">
        {/* HEADER SECTION */}
        <div className="flex mt-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1762770663487-6c03bb94fe84?ixlib=rb-4.1.0&auto=format&fit=crop&w=1974&q=80"
            alt="Profile"
            className="rounded-full size-8"
          />

          <span className="ml-2 pt-1 tracking-wide text-center rounded-2xl font-normal text-white text-xl">
            {userSkills.name}
          </span>
        </div>

        <hr className="mt-2 w-full" />

        {/* SEARCH BAR */}
        <div className="mt-3 relative">
          <Search size={15} className="absolute left-2 top-2 text-white" />
          <input
            className="w-full bg-transparent text-xs focus:outline-none placeholder:text-white text-neutral-300 border border-black/30 px-7 py-2 rounded-md"
            placeholder="Search.."
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* USERS SECTION */}
        <div className=" overflow-y-auto h-[73vh] no-scrollbar py-4">
          {filteredUsers?.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center my-2 w-full h-14 border border-neutral-500 rounded-md px-2 hover:border-2 active:scale-99 hover:cursor-pointer transition-all duration-100"
              onClick={() => setSelectedUser(Object.entries(user))}
            >
              <Image
                src={user.image}
                alt={user.name}
                className="rounded-full size-10"
                width={40}
                height={40}
              />

              <div className="ml-3 w-full flex justify-between">
                <div className="text-sm font-normal tracking-wide text-white">
                  {user.name}
                </div>
                <div
                  className={`text-[10px] font-semibold ${
                    user.online ? "text-green-600" : "text-red-400"
                  }`}
                >
                  {user.online ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

// USER DATA
const userSkills = {
  name: "Tushar Kumar",
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
    { name: "GitHub Actions", experience: "1 Year" },
  ],
};

// DUMMY USERS
const dummyUserList = [
  {
    id: 1,
    name: "Sophia Adams",
    online: true,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Liam Parker",
    online: false,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Mia Thompson",
    online: true,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Noah Bennett",
    online: true,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Emma Wilson",
    online: false,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Frank Miller",
    online: true,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Grace Lee",
    online: false,
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Henry Clark",
    online: true,
    image:
      "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Isabella Martinez",
    online: true,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Jack Turner",
    online: false,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 1,
    name: "Sophia Adams",
    online: true,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Liam Parker",
    online: false,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Mia Thompson",
    online: true,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Noah Bennett",
    online: true,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Emma Wilson",
    online: false,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Frank Miller",
    online: true,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Grace Lee",
    online: false,
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Henry Clark",
    online: true,
    image:
      "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Isabella Martinez",
    online: true,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Jack Turner",
    online: false,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];
