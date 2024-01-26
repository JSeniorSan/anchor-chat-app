import { Button } from "@/shared/ui/button";
import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-full flex-col ">
      <section className="h-screen">
        <div className="text-9xl font-extrabold w-fit text p-10">Anchor</div>

        <LogoIcon fontSize={"100px"} className="absolute right-5 top-40" />
      </section>
      <Link href={"/social/messages"} className=" left-[300px] top-[800px]">
        <Button className="m-10 text-5xl w-60 h-40">Continue</Button>
      </Link>
      <section>
        <div className="text-9xl font-extrabold w-fit text p-10 ml-96">
          Author
        </div>
        <div className="ml-96 pl-14">
          <div className="text-4xl font-bold w-fit p-5">Yakovlev Vladimir</div>
        </div>
      </section>
    </main>
  );
}
