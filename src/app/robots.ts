import { MetadataRoute } from "next";
import siteMetadata from "@/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteMetadata.SITEURL,
  };
}
