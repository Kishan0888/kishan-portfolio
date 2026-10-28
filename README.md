# Kishan Kumar Jha — Portfolio

Personal portfolio for Kishan Kumar Jha, Full Stack Developer (MERN, React, Next.js).

Built with Next.js 16 (App Router, TypeScript), Tailwind CSS 4, Motion for React and Lucide icons.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Edit content

| What | Where |
| --- | --- |
| Projects (names, copy, links, stack, screenshots) | `src/data/projects.ts` |
| Contact details, services, skills, experience, education, process | `src/data/site.ts` |
| Page title, description, Open Graph | `src/app/layout.tsx` |
| Social preview image | `src/app/opengraph-image.tsx` |

### Adding real project screenshots

Project cards show a labelled illustration until a real screenshot is provided.
Save a screenshot of the live site to `public/projects/` and add an `image` field to that project:

```ts
image: { src: "/projects/the-ca-connect.png", alt: "Home page of The CA Connect", width: 1600, height: 1000 },
```

A 16:10 image works best.

### Adding a code link

Set `repoUrl` on a project only when a public repository exists; the "View Code" link appears automatically.

## Deploy

Deploys to Vercel with no extra configuration. After deploying, set the environment variable
`NEXT_PUBLIC_SITE_URL` to the live domain (for example `https://kishanjha.dev`) so canonical and social-preview URLs are absolute.

## Contact form

No backend or form service is configured. The inquiry form validates input and then opens the visitor's email app
with a prefilled draft to kishanj1093@gmail.com. To collect submissions directly, connect a form service
(Formspree, Resend, etc.) in `src/components/InquiryForm.tsx`.

## Notes

- Fonts (Geist, Bricolage Grotesque; both SIL Open Font License) are self-hosted from `src/fonts/`.
- All animation respects the visitor's reduced-motion setting.
