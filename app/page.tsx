import { redirect } from "next/navigation";

export default function Home() {
  // Saat halaman "/" diakses, langsung redirect ke "/login"
  redirect("/login");
}
