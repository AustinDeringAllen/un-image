import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase.storage
    .from("images")
    .list(undefined, { limit: 10 });

  console.log(data);

  return (
    <main>
      <div className="mx-auto max-w-screen-lg">
        <div className="columns-3 space-y-5 space-x-5">
          {data?.map((image) => (
            <Link key={image.id} href={`/image/${image.name}`}>
              <Image
                src={`https://giibmeyimrzkhcpzstdv.supabase.co/storage/v1/object/public/images/${image.name}`}
                width={960}
                height={540}
                alt={image.name}
                className="w-full h-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
