---
name: product-catalog
description: Use this skill whenever someone wants to add, edit, remove, reorder, or feature a product in the Ginga Studio 3D storefront catalog (src/data/products.ts), or just wants to know what's currently listed. Trigger on plain, non-technical requests too — "add this new lamp we're launching," "can you update the stamp's price to R$35," "take the can opener down, we're out of stock," "swap the photo on the jewelry box," "what products do we have live right now," "novo produto," "remover produto do catálogo," "mudar o preço de X." The person asking is usually a designer or shop owner, not a developer — they won't mention file names, TypeScript, or code, so don't wait for technical phrasing before recognizing this task.
---

# Managing the product catalog

The person you're helping is almost always a designer, not an engineer. They think in
terms of photos, prices, and product pages — not files, arrays, or TypeScript. Your job
is to do the technical part invisibly and talk to them the way a helpful shop assistant
would, not the way a code reviewer would.

## How to talk about this

- **Reply in Portuguese** (pt-BR). Ginga Studio 3D is a Brazilian studio and the person
  you're helping — designer or shop owner — will be communicating in Portuguese. Match
  that, regardless of what language they used to invoke Claude Code itself. Product
  names, categories, descriptions, and specs in the catalog are already in Portuguese —
  keep it that way; don't translate them to English.
- Never lead with file names, code, or terms like "array" or "object." Say "the
  catalog" or "the product page," not `src/data/products.ts`.
- Don't show the raw code diff unless they ask to see it. After a change, describe what
  happened in plain language: "Added 'Luminária Concha' to the catalog with the photo
  you sent, priced at R$ 79,00 — it's live on the site now." Not "I edited products.ts."
- Ask for exactly what you need, in plain language, and it's fine to ask for several
  things at once if the request already implies them (e.g. "add this new lamp, R$79,
  here's a photo" already gives you name/price/photo — just confirm the category).
- If a request is ambiguous, ask rather than guess — especially around identifying
  *which* product they mean (search by name first; if more than one is a close match,
  list them and ask which one).

## How the catalog actually works

Everything lives in one file: `src/data/products.ts`. It exports a `products` array —
one entry per product — plus a couple of small conveniences worth knowing about before
you touch anything:

- **The product name generates the page address.** A `slugify()` helper turns the name
  into the URL (e.g. "Luminária Concha" → `/produtos/luminaria-concha`). If you rename
  an existing product, its page address changes too — mention that to whoever asked,
  since any link they've already shared (Instagram bio, ads, WhatsApp) would break.
- **Order in the list is the display order** on the `/produtos` catalog page.
- **The first 4 products in the array are "featured"** on the homepage
  (`featuredProducts = products.slice(0, 4)`). When adding a product, ask if it should
  be featured — if so, insert it within the first 4 entries rather than at the end.
- **Categories aren't a fixed list anywhere** — the filter tabs on `/produtos` are
  generated automatically from whatever category strings exist on the products. A new
  category just works the moment you use it; there's no separate place to register it.
  Reuse an existing category name exactly (matching capitalization) if the product
  belongs with others already on the site — check the file for the current spelling.
- **Prices are plain strings in Brazilian format**, e.g. `"R$ 29,00"` (comma for
  cents, no thousands separator issues to worry about at this scale). Keep this exact
  format — other parts of the site parse this string to compute installment pricing.
- **Photos live in `public/`** and are referenced with a leading slash, e.g.
  `/product-5.png`. If the designer hands you an image file, place it in `public/`
  with a clean, descriptive kebab-case filename (e.g. `luminaria-concha.png`) — don't
  reuse another product's filename even if it seems similar.
- **`badges`** are the row of small feature icons under the price (material, "made in
  Natal/RN," shipping time, made-to-order, 3D printing, packaging). Every existing
  product builds this with the `defaultBadges('<material>')` helper already defined in
  the file — always use that helper for new products instead of writing badge objects
  by hand, so new entries automatically match the visual style of the rest of the site.
  Pass it the material description (this also becomes the first badge's label).

### What a full entry looks like

```ts
{
  name: 'Luminária Concha',
  price: 'R$ 79,00',
  category: 'Luminárias',
  image: '/luminaria-concha.png',
  // images: ['/luminaria-concha.png', '/luminaria-concha-2.png'], // optional gallery
  description: 'Luminária inspirada em conchas do mar, com luz difusa e quente.',
  specs: {
    'Materiais': 'PLA biodegradável',
    'Medidas': 'Ø 16cm x A 20cm',
    'Cuidados': 'Não expor a temperaturas acima de 50°C.',
  },
  badges: defaultBadges('PLA biodegradável'),
},
```

`image`, `description`, `specs`, and `images` are all optional, but a product without
`image` shows a blank placeholder on its card everywhere in the catalog — always try to
get at least one photo before creating a product. If they only have one photo, don't
add an `images` array — the gallery already falls back to the single `image`
automatically.

## Create a product

1. Gather: name, price, category, at least one photo. Description and specs
   (materials, measurements, care instructions) are optional but make for a better
   product page — offer to add them if the designer has the info handy, don't block on
   it.
2. Check the name isn't already used (case-insensitive) — it determines the page
   address and duplicates would collide.
3. Place any provided photo(s) into `public/`.
4. Ask whether it should be featured on the homepage; insert accordingly (see above).
5. Add the entry using `defaultBadges()` for the badges field.
6. Verify (see below), then confirm in plain language, including the new product's
   page address so they can check it themselves.

## Update a product

1. Find the product by name. If the request is vague ("the lamp"), search the file and
   confirm which one before editing.
2. Change only what was asked. If the change is a new photo, place it in `public/` and
   point `image` at the new file — no need to delete the old image file unless asked,
   in case it's reused elsewhere.
3. If the name itself is changing, flag the page-address change (see above) before
   proceeding.
4. Verify, then confirm in plain language what changed.

## Remove a product

1. Find the product by name and confirm which one if there's any ambiguity.
2. Remove its entry from the array. Leave its image file(s) in `public/` alone by
   default — other products may reuse the same photo — unless the designer explicitly
   asks you to clean them up, in which case check first that no other entry references
   the same file.
3. Verify, then confirm removal in plain language.

## List / check the catalog

When asked what's currently in the catalog, feature, etc. — read the file and answer
with a plain-language summary (name, price, category is usually enough; mention photos
are missing if any are). Don't paste raw code as the answer.

## Always double-check your work

After any change, run `npx astro build` from the project root. This is the fastest way
to catch a typo or broken reference before the designer sees it — frame it to them as
"double-checking the site still builds cleanly," not as running a type checker. If it
fails, fix the issue yourself rather than surfacing the raw error message.
