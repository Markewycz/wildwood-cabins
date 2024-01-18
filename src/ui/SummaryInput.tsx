import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SummaryInput({ label, value }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={value}>{label}</Label>
      <Input id={value} value={value} disabled />
    </div>
  );
}
