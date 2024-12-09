"use client";
import { localdata } from "@/localdata";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function checkLogin(
  { reverse, href } = { reverse: false, href: "/" }
) {
  const router = useRouter();
  useEffect(() => {
    if (
      !reverse
        ? !localdata.username() || !localdata.password()
        : localdata.username() && localdata.password()
    )
      !reverse ? router.push("/errorlogin") : router.push(href);
  });
}