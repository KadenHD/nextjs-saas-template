import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Cta0Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Cta0 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
  },
  className,
}: Cta0Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 overflow-hidden rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-12">
          
          <h3 className="text-2xl font-semibold md:text-4xl">
            {heading}
          </h3>

          <p className="max-w-xl text-muted-foreground lg:text-lg">
            {description}
          </p>

          <div className="flex flex-col gap-2 sm:flex-row justify-center">
            {buttons?.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons?.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export { Cta0 };