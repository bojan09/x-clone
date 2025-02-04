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
        <div className="flex justify-between items-center">
          <section>
            <LeftBar />
          </section>
          <section>{children}</section>
          <section>
            <RightBar />
          </section>
        </div>
      </body>
    </html>
  );
}
