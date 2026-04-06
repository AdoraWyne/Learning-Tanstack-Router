import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  // loader is to get the data that the component needs before component uses and renders it
  loader: async ({ params }) => {
    throw new Error();
    // fetching the data that this component needs here
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // then you can return the data here
    return {
      postId: params.postId,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>adora please save the fire!!! 🔥</div>,
});

function RouteComponent() {
  const { postId } = Route.useLoaderData();

  return <div>Hello {postId}!</div>;
}
