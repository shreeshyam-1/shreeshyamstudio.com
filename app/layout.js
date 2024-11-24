import { Inter } from "next/font/google";
import "./globals.css";
import Darkmode from "@/components/Darkmode";
import Nav from "@/components/Nav";
import { AuthContextProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Singhal Sanitary and Hardware Store: Bathroom fittings",
  description: "Discover the ultimate destination for all your plumbing needs at our shop! Dive into a world of top-notch water pipe fittings, all branded and budget-friendly, catering to every requirement. Explore our extensive collection featuring the latest trends in wash basins, toilet seats, and an array of accessories for your kitchen and bathroom. From sleek towel holders to durable stainless steel sinks, we've got you covered. Elevate your space with our premium selections including soap dispensers, shelves, mirrors, and more. Experience convenience, quality, and style all in one place!   ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16792490699">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16792490699');
</script>
      </head>
      <body className={inter.className}>
          <Darkmode> 
            {/* to settle the space for the navbar */}
            <div className="w-screen h-[100px]"></div>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
        {/* {children} */}
          </Darkmode>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>

    </html>
  );
}
