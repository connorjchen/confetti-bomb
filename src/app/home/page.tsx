import Button from "@/components/button";
import NavBar from "@/components/navbar";
import { H5 } from "@/components/text";

export default function Home() {
  async function createNewProject() {
    "use server";
    console.log("gen id + go to edit page");
    // may need client component- where to pput this logic...
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
  }

  async function openNewProject() {
    "use server";
    console.log("navigate to edit page of existing project");
    // may need client component- where to pput this logic...
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
  }

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <H5>Start New Project</H5>
          {/* create a large button to start new document - make this button look like an empty page with a big plus sign */}
          <Button
            className="mt-4 h-60 w-48 bg-white"
            onClick={createNewProject}
          >
            <div>+</div>
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <H5 className="pt-2">Recent Projects</H5>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((project) => (
            <Button
              className="mt-4 h-60 w-48 bg-primary-content"
              onClick={openNewProject}
            >
              <div>{project}</div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
