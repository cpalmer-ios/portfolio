#!/usr/bin/env bun

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import {
  parseRawFixtures,
  toJsonl,
} from './fixture-parser/parse-raw-fixtures';

interface CliOptions {
  inputPath: string;
  outputPath?: string | undefined;
  format: 'json' | 'jsonl';
  stdout: boolean;
}

const DEFAULT_INPUT = 'raw_fixtures.txt';

function printUsage(): void {
  console.log(`Usage: bun run src/scripts/parse-fixtures.ts [options]

Options:
  -i, --input <path>     Raw copy-pasted fixtures file (default: raw_fixtures.txt)
  -o, --output <path>    Output file path (default: derived from input + format)
  -f, --format <type>    Output format: json | jsonl (default: json)
      --stdout           Print parsed output to stdout instead of writing a file
  -h, --help             Show this help message

Examples:
  bun run src/scripts/parse-fixtures.ts
  bun run src/scripts/parse-fixtures.ts -i raw_fixtures.txt -f jsonl -o parsed.jsonl
  bun run src/scripts/parse-fixtures.ts --stdout -i fixtures.txt
`);
}

function parseArgs(argv: readonly string[]): CliOptions {
  let inputPath = DEFAULT_INPUT;
  let outputPath: string | undefined;
  let format: 'json' | 'jsonl' = 'json';
  let stdout = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '-h' || arg === '--help') {
      printUsage();
      process.exit(0);
    }

    if (arg === '--stdout') {
      stdout = true;
      continue;
    }

    if (arg === '-i' || arg === '--input') {
      inputPath = argv[index + 1] ?? DEFAULT_INPUT;
      index += 1;
      continue;
    }

    if (arg === '-o' || arg === '--output') {
      outputPath = argv[index + 1];
      index += 1;
      continue;
    }

    if (arg === '-f' || arg === '--format') {
      const next = argv[index + 1];
      if (next === 'json' || next === 'jsonl') {
        format = next;
      } else {
        throw new Error(`Unsupported format "${next ?? ''}". Use json or jsonl.`);
      }
      index += 1;
      continue;
    }

    if (!arg.startsWith('-') && inputPath === DEFAULT_INPUT) {
      inputPath = arg;
    }
  }

  return {
    inputPath,
    outputPath,
    format,
    stdout,
  };
}

function deriveOutputPath(inputPath: string, format: 'json' | 'jsonl'): string {
  const extension = format === 'jsonl' ? '.jsonl' : '.json';
  return inputPath.replace(/\.[^./\\]+$/, '') + extension;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const inputPath = resolve(options.inputPath);
  const rawText = await readFile(inputPath, 'utf8');
  const parsed = parseRawFixtures(rawText);
  const serialized =
    options.format === 'jsonl'
      ? toJsonl(parsed)
      : `${JSON.stringify(parsed, null, 2)}\n`;

  if (options.stdout) {
    process.stdout.write(serialized);
    return;
  }

  const outputPath = resolve(
    options.outputPath ?? deriveOutputPath(inputPath, options.format),
  );
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, serialized, 'utf8');

  console.log(`Parsed ${parsed.fixtures.length} fixtures`);
  console.log(`Teams: ${parsed.teams.length}`);
  console.log(`Captains: ${parsed.captains.length}`);
  console.log(`Venues: ${parsed.venues.length}`);
  console.log(`Source: ${parsed.source}`);
  console.log(`Output: ${outputPath}`);

  if (parsed.warnings.length > 0) {
    console.log(`Warnings (${parsed.warnings.length}):`);
    for (const warning of parsed.warnings) {
      console.log(`- ${warning}`);
    }
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to parse fixtures: ${message}`);
  process.exit(1);
});
