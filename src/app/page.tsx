import { PageWrapper } from "@shared/ui/PageWrapper";
import { HeroBanner } from "./Main/HeroBanner";
import { Requests } from "./Main/Requests";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <HeroBanner />
        <Requests />
      </PageWrapper>
    </main>
  );
}
