# @aapzu/npm-package-template

## Development

### Running
The template app can be run using `tsx`.
```
pnpm start
```

### Building
The template uses `tsup` for builds.
```
pnpm build
```

### Linting
The template has `eslint` & `prettier` setup with pre-commit hooks implemented with `husky` & `lint-staged`
```
pnpm lint
```

### Testing
The template is using Vitest for testing. Run tests with
```
pnpm test
```

## Publishing

### Prequisites

- `PNPM_TOKEN` has been added into secrets in `https://github.com/<account>/<repo>/settings/secrets/actions`

### Steps
To publish, first commit your changes and then run
```
pnpm version [major|minor|patch]
pnpm push --follow-tags
```