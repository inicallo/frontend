import { IUser } from "@/app/type";
import { Metadata } from "next";
import { title } from "process";


async function getData(id: string) {
  const res = await fetch(`http://localhost:2000/user/${id}`, {
    next: { tags: ["users"] },
  });

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }: {params: {id: string}}) {
    const data: IUser = await getData(params.id)
    return {
        title: `Calvin App | ${data.name}`,
        description: `Details user ${data.name}`
    }
}

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data: IUser = await getData(params.id);
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="text-center">
        <h1>Detail User With ID: {params.id}</h1>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Age: {data.age}</p>
      </div>
    </div>
  );
}
