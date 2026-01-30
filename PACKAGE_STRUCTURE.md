# @mat3ra/prove Package Structure

This document defines what should be included in the new `@mat3ra/prove` package repository, mapping from the current `web-app/src/application/imports/properties_prove` module structure.

## Package Structure

```
@mat3ra/prove/
├── src/
│   ├── components/              # React components
│   │   ├── BandGaps.js         # ✅ Include (no changes)
│   │   ├── ConvergencesList.js  # ✅ Include (no changes)
│   │   ├── DielectricTensor.tsx # ✅ Include (no changes)
│   │   ├── FileContent.js       # ⚠️ Include (needs abstraction)
│   │   ├── HubbardU.jsx         # ✅ Include (no changes)
│   │   ├── HubbardV.jsx         # ✅ Include (no changes)
│   │   ├── HubbardVNN.jsx       # ✅ Include (no changes)
│   │   ├── NonScalarsList.tsx   # ⚠️ Include (needs type abstraction)
│   │   ├── ScalarsList.js       # ⚠️✔️  Include (use @mat3ra/utils)
│   │   ├── Structure.tsx        # ⚠️ Include (needs Material abstraction)
│   │   ├── TwoDimensionalPlot.tsx # ✅ Include (no changes)
│   │   ├── WorkflowLink.tsx     # ⚠️ Include (needs URL generator abstraction)
│   │   ├── include/             # Sub-components
│   │   │   ├── BandGap.js      # ⚠️✔️  Include (use @mat3ra/utils)
│   │   │   └── EigenvaluesAtKpoint.js # ⚠️✔️  Include (use @mat3ra/utils)
│   │   ├── primitive/           # Base components
│   │   │   ├── Chart.tsx        # ✅ Include (no changes)
│   │   │   ├── Object.tsx       # ⚠️ Include (use ESSE types)
│   │   │   ├── PropertyComponent.js # ✅ Include (no changes)
│   │   │   ├── Scalar.tsx       # ✅ Include (no changes)
│   │   │   └── Tensor.tsx       # ⚠️✔️  Include (use @mat3ra/utils)
│   │   └── charts/              # Chart utilities
│   │       ├── HighchartsRemoveEmptySVGPaths.js # ✅ Include (no changes)
│   │       └── ReactHighchartsResizable.js      # ✅ Include (no changes)
│   ├── types/                   # TypeScript interfaces (NEW - minimal, prefer ESSE/Code)
│   │   ├── context.ts           # Minimal context interfaces (use ESSE/Code where possible)
│   │   ├── adapters.ts          # Adapter-specific types only
│   │   └── index.ts
│   ├── adapters/                # Adapter interfaces (NEW)
│   │   ├── MaterialViewer.tsx   # Interface for material viewer injection
│   │   ├── FileDownloader.ts    # Interface for file download handlers
│   │   ├── UrlGenerator.ts      # Interface for URL generation
│   │   └── index.ts
│   ├── config/                  # Configuration (NEW)
│   │   └── scalarViews.ts       # Move getview.ts here
│   └── index.ts                 # Main export file
├── tests/                       # Test files
├── dist/                        # Built package
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## File Mapping

### ✅ Files to Include As-Is (No Changes)

These files have no platform dependencies and can be moved directly:

1. **components/BandGaps.js** - Pure component, no platform deps
2. **components/ConvergencesList.js** - Uses only `@mat3ra/prode` and internal components
3. **components/DielectricTensor.tsx** - Pure component
4. **components/HubbardU.jsx** - Pure component
5. **components/HubbardV.jsx** - Pure component
6. **components/HubbardVNN.jsx** - Pure component
7. **components/TwoDimensionalPlot.tsx** - Pure component
8. **components/primitive/Chart.tsx** - Uses external packages only
9. **components/primitive/PropertyComponent.js** - Base class, no deps
10. **components/primitive/Scalar.tsx** - Pure component
11. **components/charts/HighchartsRemoveEmptySVGPaths.js** - Pure utility
12. **components/charts/ReactHighchartsResizable.js** - Uses external packages only

### ⚠️ Files to Include with Modifications
These files have platform dependencies that need to be abstracted:
1. **components/FileContent.js** - Abstract file download logic via adapter
2. **components/NonScalarsList.tsx** - Use minimal type interfaces from `@mat3ra/prode` or new `@mat3ra/types`
3. **components/ScalarsList.js** - Move number utilities to `@mat3ra/utils` ✔️
4. **components/Structure.tsx** - Abstract Material viewer via adapter
5. **components/WorkflowLink.tsx** - Accept URL generator as prop
6. **components/include/BandGap.js** - Move number utilities to `@mat3ra/utils` ✔️
7. **components/include/EigenvaluesAtKpoint.js** - Move number utilities to `@mat3ra/utils` ✔️
8. **components/primitive/Object.tsx** - Use ESSE/Code types where possible
9. **components/primitive/Tensor.tsx** - Move number utilities to `@mat3ra/utils
