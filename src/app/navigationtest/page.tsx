"use client"

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import { usePathname } from "next/navigation";

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION 
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    // router.push('/');
    // router.replace("/");
    // router.refresh();
    // router.back();
    router.forward();
  }

  return (
    <div>
      <Link href="/" prefetch={false}>CLick here</Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  )
}

export default NavigationTestPage;