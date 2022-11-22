export const tsconfig = {
  "compilerOptions": {
    "target": "es2016",
    "lib": [
      "DOM"
    ],
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "removeComments": true,
    "noEmitOnError": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "./src"
  ],
  "exclude": [
    "node_modules",
    "app/src/**/*.spec.ts",
  ]
}
