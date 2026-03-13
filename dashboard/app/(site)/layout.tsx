import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar1
        auth={{
          login: { title: "Login", url: "/login" },
          signup: { title: "Sign up", url: "/signup" },
        }}
      />

      <main>{children}</main>

      <Footer2 />
    </>
  );
}
