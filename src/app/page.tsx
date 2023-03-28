import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <Image
              src={"https://void.cat/d/PEmNEqDAuerhGwAZd1cWjL"}
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-zinc-900 dark:text-zinc-100">
              an ambitious nostr client
            </h2>
            <p className="italic dark-text-zinc-400 text-zinc-800">
              <span className="text-red-500">*</span> website is under
              development, a stunning landing page coming later
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="https://github.com/reyamir/lume-desktop/releases/tag/app-v0.2.1"
              className="shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20 hover:bg-zinc-800 hover:dark:bg-zinc-300 font-medium leading-none w-max px-4 h-10 bg-zinc-900 dark:bg-zinc-200 rounded-md inline-flex items-center justify-center text-zinc-100 dark:text-zinc-900"
            >
              Download
            </Link>
            <span className="text-xs text-zinc-500 dark:text-zinc-700">
              Windows, MacOS, and Linux
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative aspect-video w-full px-2 md:px-0 md:w-2/3 h-auto">
            <Image
              src={"https://void.cat/d/2oaFfzJsjnKNye6fHTpaq2"}
              alt="image"
              className="object-contain"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
