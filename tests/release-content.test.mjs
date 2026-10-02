import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const exists = (path) => access(new URL(path, root));

test('production CTAs use real destinations and do not simulate downloads', async () => {
  const [app, download] = await Promise.all([
    read('src/App.tsx'),
    read('src/components/DownloadModal.tsx'),
  ]);

  assert.match(app, /window\.location\.assign\('https:\/\/jobs\.quinnverse\.tech'\)/);
  assert.doesNotMatch(download, /alert\(/);
  assert.doesNotMatch(download, /Download \.ZIP/);
});

test('marketing copy does not claim unimplemented notifications or data rights', async () => {
  const [workspace, privacy] = await Promise.all([
    read('src/components/WorkspaceSection.tsx'),
    read('src/components/PrivacyModal.tsx'),
  ]);

  assert.doesNotMatch(workspace, /Proactive notifications/i);
  assert.doesNotMatch(privacy, /export your full dataset as JSON or CSV/i);
  assert.doesNotMatch(privacy, /purge your account and records permanently/i);
});

test('legal and help pages have direct static entry points', async () => {
  await Promise.all([
    exists('privacy/index.html'),
    exists('terms/index.html'),
    exists('help/index.html'),
  ]);
});

test('package metadata has no Gemini or server-template requirements', async () => {
  const [pkg, metadata] = await Promise.all([read('package.json'), read('metadata.json')]);
  assert.doesNotMatch(pkg, /@google\/genai|express|dotenv|tsx|esbuild/);
  assert.doesNotMatch(metadata, /GEMINI|SERVER_SIDE/i);
  assert.match(pkg, /"typescript": "\^5\.7\.3"/);
});
