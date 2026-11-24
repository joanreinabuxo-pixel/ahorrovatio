import { ADSENSE } from '../config';
// ads.txt se genera solo cuando hay ID de editor en config.ts.
export function GET() {
  const pub = ADSENSE.client.replace('ca-', '');
  const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '# Pendiente de la aprobación de AdSense\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
