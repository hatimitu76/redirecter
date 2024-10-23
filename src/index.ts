import { Hono } from "hono";
import seting from "./seting";

const app = new Hono();

app.notFound((c) => {
  return c.redirect("https://hatmt.com");
});

seting.forEach((s) => {
  app.get(`/${s.name}`, (c) => {
    return c.redirect(s.link);
  });
});

export default app;
