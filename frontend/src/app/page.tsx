import { Avatar } from "@/shared/ui/avatar";
import { LogoIcon } from "@/shared/ui/logo-icon";

export default async function Home() {
  return (
    <main className="flex min-h-full flex-col ">
      <section className="h-screen">
        <div className="text-9xl font-extrabold w-fit text p-5">Anchor</div>

        <LogoIcon fontSize={"100px"} className="absolute right-5 top-40" />
      </section>
      <section>
        <div className="text-9xl font-extrabold w-fit text p-5">About us</div>
        <div className="flex justify-around gap-20">
          <div className="text-2xl font-bold w-fit text p-5">
            Yakovlev Vladimir
            <Avatar>
              <LogoIcon />
            </Avatar>
          </div>
          <div className="text-2xl font-bold w-fit text p-5">
            Kozlov Michael
            <Avatar />
          </div>
        </div>
      </section>
    </main>
  );
}
