// import Link from "next/link";

// const navLinks = [
//   { name: "Coworking Space", href: "/coworking-space" },
//   { name: "Campuses", href: "/campuses" },
//   { name: "Tour", href: "/tour" },
//   { name: "Expo", href: "/expo" },
//   { name: "Navttc", href: "/navttc" },
//   { name: "Certificate Distribution", href: "/certificate-distribution" },
//   { name: "Events", href: "/events" },
// ];

// export default function Header() {
//   return (
//     <div className="py-12 px-6 max-w-screen-xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
//       <div className="h-1 w-10 bg-orange-500 mx-auto mb-8 rounded"></div>

//       {/* Navigation Tabs */}
//       <ul className="flex justify-center flex-wrap gap-4 mb-10">
//         {navLinks.map((item) => (
//           <li key={item.name}>
//              <Link
//               href={item.href}
//               className="px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-cyan-600 to-green-400 hover:border rounded-full transition"
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Coworking Space", href: "/coworking-space" },
  { name: "Campuses", href: "/campuses" },
  { name: "Tour", href: "/tour" },
  { name: "Expo", href: "/expo" },
  { name: "Navttc", href: "/navttc" },
  { name: "Certificate Distribution", href: "/certificate-distribution" },
  { name: "Events", href: "/events" },
];

export default function Header() {
  const pathname = usePathname(); // current route mil gaya

  return (
    <div className="py-12 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
      <div className="h-1 w-10 bg-orange-500 mx-auto mb-8 rounded"></div>

      {/* Navigation Tabs */}
      <ul className="flex justify-center flex-wrap gap-4 mb-10">
        {navLinks.map((item) => {
          const isActive = pathname === item.href; // active check

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-full transition
                  ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-600 to-green-400 text-white"
                      : "text-gray-700 hover:bg-gradient-to-r from-cyan-600 to-green-400 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
