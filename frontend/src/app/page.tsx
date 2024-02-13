import { Button } from "@/shared/ui/button";
import { LogoIcon } from "@/shared/ui/logo-icon";

import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-full flex-col ">
      <section className="h-screen pl-28">
        <div className="text-9xl font-extrabold w-fit text pt-10 pb-10">
          Anchor
        </div>

        <LogoIcon fontSize={"100px"} className="absolute right-5 top-40" />
        <section>
          <div className="text-6xl font-extrabold w-fit text pb-5 pt-5">
            Author
          </div>
          <div className="">
            <div className="text-4xl font-bold w-fit pt-5">
              Yakovlev Vladimir
            </div>
          </div>
          <div className="flex gap-10 mt-44 ">
            <Link href={"/social/messages"}>
              <Button className="p-10 text-5xl w-60 h-40">Sign in</Button>
            </Link>
            <Link href={"/api/registration"}>
              <Button className="p-10 text-5xl w-60 h-40">Sign up</Button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
