import { HashLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense fallback={<HashLoader className="mt-4" width={"100%"} color="gray" />}>
        {children}
      </Suspense>
    </div>
  );
}
