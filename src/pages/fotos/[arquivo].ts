import type { APIRoute, GetStaticPaths } from 'astro';
import { generatedPhotos } from '../../data/products';

// Fotos dos produtos enviadas pelo Almanac, gravadas como arquivos na publicação.
export const getStaticPaths: GetStaticPaths = () =>
  [...generatedPhotos.keys()].map((arquivo) => ({ params: { arquivo } }));

export const GET: APIRoute = ({ params }) => {
  const foto = generatedPhotos.get(params.arquivo!);
  if (!foto) return new Response(null, { status: 404 });
  return new Response(foto.bytes, { headers: { 'Content-Type': foto.type } });
};
