import { authMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//   "/(.*)",
//   "/api/webhook(.*)",
//   "/question/:id(.*)",
//   "/tags(.*)",
//   "/tags/:id(.*)",
//   "/profile/:id(.*)",
//   "/community(.*)",
//   "/jobs(.*)",
//   "/ask-question(.*)",
// ]);

// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default authMiddleware(
  // (auth, req) =>
  {
    // if (isProtectedRoute(req)) auth().protect();
    // if (!isPublicRoute(req)) {
    //   auth().protect();
    // }
    publicRoutes: [
      "/",
      "/api/webhook",
      "/question/:id",
      "/tags",
      "/tags/:id",
      "/profile/:id",
      "/community",
      "/jobs",
      "/ask-question",
    ],
    ignoredRoutes: ["/api/webhook", "/api/chatgpt"],
  }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
