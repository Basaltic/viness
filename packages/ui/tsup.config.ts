import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    dts: true,
    minify: true,
    clean: true,
    external: ['react'],
    entry: ['index.ts', 'src/lib/*.ts', 'src/components/*.tsx', 'src/components/*.ts'],
    format: ['cjs', 'esm'],
    ...options,
}));
