import Link from "next/link";
import { IUser } from "../type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calvin App | Users Detail",
  description: "Detail page of user with ID",
};

async function getData() {
  const res = await fetch("http://localhost:2000/user", {
    next: { tags: ["users"] },
  });

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
}

export default async function UsersPage() {
  const data: IUser[] = await getData();
  return (
    <div className="flex flex-col w-screen justify-center items-center text-xl bg-white">
      {data.map((item) => {
        return (
          <Link href={`/users/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
