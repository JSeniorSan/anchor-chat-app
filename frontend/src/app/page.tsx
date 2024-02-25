import { Button } from "@/shared/ui/button";
import { LogoIcon } from "@/shared/ui/logo-icon";
import Image from "next/image";
import AnchorIcon from "../../public/Group 6.svg";
import MainPic from "../../public/Group 8.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-semibold w-fit text mt-16 border-b-2 relative border-b-white">
            ANCHOR
            <AnchorIcon className="absolute -right-2 -bottom-10" />
          </h1>
          <h2 className="text-4xl">Chat app</h2>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <p className="max-w-[400px] h-fit flex-shrink">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolore omnis itaque nostrum ratione perferendis. Facere, cum
              incidunt! Voluptatum sint vitae magni earum minus repellendus
              quae, suscipit at, non dolores vel dolore illo amet officia rerum
              modi velit cumque incidunt alias maiores! Libero numquam accusamus
              impedit quam inventore, natus veritatis ullam eius! Similique,
              aliquam! Illum, incidunt temporibus hic, voluptates laborum quis
              officiis suscipit, modi inventore qui veritatis odio? Nostrum
              assumenda blanditiis corporis fugiat ex nesciunt, quod tempora
              obcaecati qui, officiis veritatis consequatur voluptate? Quibusdam
              asperiores sapiente natus, at quidem illum molestiae quae corporis
              facere fugiat quam ea voluptas, ipsam magni?
            </p>
            <div className="flex gap-8">
              <Link href={"/social/messages"}>
                <Button className=" bg-[#005792] text-white shadow-md shadow-slate-400 w-32 h-20 rounded-2xl">
                  Sign in
                </Button>
              </Link>
              <Link href={"/api/registration"}>
                <Button className="bg-[#005792] text-white shadow-md shadow-slate-400 w-32 h-20 rounded-2xl">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
          <MainPic />
        </div>
      </div>
    </main>
  );
}
