import { UserRoundSearch } from "lucide-react";

export const ProfileHeader = ({ academic }) => {
  return (
    <header className="bg-primary text-primary-foreground flex items-center px-1 justify-center py-8  max-w-8xl md:px-6  gap-12">
      <UserRoundSearch
        size={250}
        strokeWidth={0.4}
        className="border-2 rounded-2xl border-current"
      />
      <div className="container mx-10 max-w-6xl flex items-start gap-4">
        <div className="text-start">
          <h1 className="text-3xl font-bold">{academic?.fullName}</h1>
          <p className="text-sm text-primary-foreground/80 mt-3 capitalize">
            {academic?.subField}
          </p>
          <p className="text-sm text-primary-foreground/80 mt-3">
            {academic?.title}
          </p>
          <p className="text-sm text-primary-foreground/80 mt-3 capitalize">
            {academic?.university}
          </p>
        </div>
      </div>
    </header>
  );
};
