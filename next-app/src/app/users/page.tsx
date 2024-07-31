import Link from "next/link";

export default function UsersPage() {
  const data: string[] = ["Andi", "Budi", "Caca", "Dodi"];
  return (
    <div className="flex flex-col w-screen justify-center items-center text-xl bg-white">
      {
      data.map((item) => {
        return (
        <Link href={`/users/${item}`} key={item}>{item}</Link>
        )
      })}
    </div>
  );
}
