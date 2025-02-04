import "./globals.css";
import RightBar from "@/components/RightBar";
import LeftBar from "@/components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-lg xxl:max-w-xxl flex mx-auto justify-between items-center ">
          <section className="px-2 ">
            <LeftBar />
          </section>
          <section className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </section>
          <section className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </section>
        </div>
      </body>
    </html>
  );
}
