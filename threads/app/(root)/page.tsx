import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
export default function Home() {
  return (
    <ClerkProvider>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </ClerkProvider>
  );
}
