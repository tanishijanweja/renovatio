import { Container } from "@renovatio/ui/components/container";
import { Section } from "@renovatio/ui/components/section";

export default function Home() {
  return (
    <Section size="lg">
      <Container size="page">
        <p className="mb-4 text-eyebrow uppercase text-muted-foreground">
          Home
        </p>
        <h1 className="font-display text-display-xl text-balance">Renovatio</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Minimal, enduring spaces.
        </p>
      </Container>
    </Section>
  );
}
