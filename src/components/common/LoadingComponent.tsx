import { Loader2 } from "lucide-react";

const LoadingComponent = () => {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 size={20} /> Loading...
    </div>
  );
};

export default LoadingComponent;
