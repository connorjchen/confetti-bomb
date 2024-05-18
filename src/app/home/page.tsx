import Button from "@/components/Button";
import { H5 } from "@/components/Text";
import Link from "next/link";

export default async function Home() {
  async function createNewProject() {
    "use server";
  }

  // look into using twMerge clsx cn correctly to merge classes
  return (
    <div>
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <H5>Start New Project</H5>
          {/* create a large button to start new document - make this button look like an empty page with a big plus sign */}
          <Button className="mt-4 h-60 w-48 bg-white" onClick={createNewProject}>
            <div>+</div>
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <H5 className="pt-2">Recent Projects</H5>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((idx, bombId) => (
            <Link href={`/edit/${bombId}`} className="mt-4 h-60 w-48 bg-primary-content" key={idx}>
              <div>{bombId}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
