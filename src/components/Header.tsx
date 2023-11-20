import { signOut } from "@/lib/serverActions";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

const Header = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-around items-center h-16 bg-black text-white">
      <div></div>
      <p className="uppercase">Un-Image</p>
      <div>
        {user ? (
          <form action={signOut}>
            <button>Sign Out</button>
          </form>
        ) : (
          <Link href={"/login"}>Sign In</Link>
        )}

        {/* <MyModal signedIn={user ? true : false} /> */}
      </div>
    </header>
  );
};

export default Header;
