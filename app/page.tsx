import Image from "next/image";
import logo from "../public/image/logo.png";
export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Picture of  logo" width={50} height={50} />
    </div>
  );
}
