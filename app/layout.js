import { Inter } from "next/font/google";
import "./globals.css";
import Darkmode from "@/components/Darkmode";
import Nav from "@/components/Nav";
// import { AuthContextProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shree Shyam Studio",
  description: "We specialize in an exquisite range of designer gowns, trendy Indo-Western outfits, and stylish crop tops, perfect for retailers and boutique owners seeking high-demand, fashionable apparel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16792490699"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16792490699');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Darkmode>
          {/* to settle the space for the navbar */}
          <div className="w-screen h-[100px]"></div>
          {/* <AuthContextProvider> */}
            {children}
          {/* </AuthContextProvider> */}
          {/* {children} */}
        </Darkmode>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>

    </html>
  );
}
