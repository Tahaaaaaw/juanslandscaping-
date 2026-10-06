import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const SERVICE_OPTIONS = [
  "Lawn Maintenance & Scheduled Mowing",
  "Tree Trimming, Pruning & Palm Care",
  "Tree Removal & Emergency Storm Prep",
  "Landscape Design & Tropical Plantings",
  "Mulch, Rock & Sod Installation",
  "Lanai Walkways & Hardscaping",
  "Yard Cleanups & Property Maintenance",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success("Thanks — we'll be in touch within 24 hours.");
      }}
      className="grid gap-3"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Input required name="name" placeholder="Your name" className="h-12 bg-card" />
        <Input required name="phone" type="tel" placeholder="Phone number" className="h-12 bg-card" />
        <Input required name="email" type="email" placeholder="Email address" className="h-12 bg-card" />
        <Select>
          <SelectTrigger className="h-12 bg-card">
            <SelectValue placeholder="Service required" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <Textarea
          name="message"
          placeholder="Tell us about your project or any questions..."
          className="min-h-[50px] resize-y bg-card py-3 text-sm"
          rows={2}
        />
        <Button type="submit" variant="quote" size="xl" className="h-full min-h-[50px] w-full md:w-auto px-8">
          {sent ? (
            <>
              <CheckCircle2 className="size-4" /> Sent
            </>
          ) : (
            <>
              Get My Free Quote <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
