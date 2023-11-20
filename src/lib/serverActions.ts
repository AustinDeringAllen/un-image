"use server";

import { cookies } from "next/headers";
import { createClient } from "./supabase/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
};

export const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("error");
    // return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/");
};
