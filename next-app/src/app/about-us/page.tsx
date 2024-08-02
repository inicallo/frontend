import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calvin App | About Us",
  description: "About us page",
}
export default function AboutUS() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about us page.</p>
      <p>Now go build something great.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ad veniam nemo vel exercitationem optio animi illum ipsum modi harum. Eius excepturi consequatur unde quia, neque quidem sequi! Quod, quaerat?</p>
    </div>
  );
}
