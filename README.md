# Goal

- Understand what is Tanstack Router.
- Followed this YT tutorial: https://www.youtube.com/watch?v=KcKkwF55Pes

# Learned

- Remind me so much of NextJS -> File-based routing system.

**Most Interesting Part:**

- In each component, it has a Route function and component.
  - Route function -> contain metadata about the route, which includes the route component
  - In route component, we can access the route's metadata by using, for example `Route.useLoaderData` or `Route.useSearch`.
- Apparently, `Route.useLoaderData` is optional. You can also use `getRouteApi` if you are deep in the component tree for the current route. Read more [here](https://tanstack.com/router/latest/docs/guide/data-loading#consuming-data-from-loaders).
