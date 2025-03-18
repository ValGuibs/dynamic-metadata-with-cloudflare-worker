export const config = {
  domainSource: "https://29055e2f-4a12-4712-b418-2405caa6e396.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/articles/[^/]+",
          metaDataEndpoint: "https://api.fccr.fr/api/site-web/articles/metadata/slug/{article_slug}"
      },
  ]
};
