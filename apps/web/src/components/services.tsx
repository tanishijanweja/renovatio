import { Container } from "@renovatio/ui/components/container";
import { Section } from "@renovatio/ui/components/section";
import {
  Box,
  Building2,
  Hammer,
  Kanban,
  KeyRound,
  Ruler,
  Sofa,
  type LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    icon: Building2,
    title: "Residential Architecture",
    description: "Distinctive homes tailored to site, climate, and daily life.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description: "Cohesive interiors where materials and light find balance.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Sensitive transformations that respect what already exists.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Projects",
    description: "A single partner from the first sketch to the final handover.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Photorealistic previews of spaces before they are built.",
  },
  {
    icon: Ruler,
    title: "Construction Consultation",
    description: "On-site guidance that keeps the design intent intact.",
  },
  {
    icon: Kanban,
    title: "Project Management",
    description: "Schedules, budgets, and coordination handled end to end.",
  },
];

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow uppercase text-muted-foreground">
            What we do
          </p>
          <h2
            id="services-heading"
            className="mt-6 text-balance text-display-md sm:text-display-lg"
          >
            A full range of services, one studio.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From first concept to final handover, every discipline is under one
            roof — so nothing gets lost between stages.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="h-full">
              <div className="h-full rounded-2xl border bg-card p-6 transition-colors duration-300 hover:border-ring/40">
                <service.icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-6 text-primary"
                />
                <h3 className="mt-5 text-balance text-lg text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
