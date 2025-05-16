import nx from "@nx/eslint-plugin";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    ...compat.plugins("import"),
    {
        ignores: ["**/dist"],
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        rules: {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: "*",
                            onlyDependOnLibsWithTags: ["*"],
                        },
                        {
                            sourceTag: "type:utilities",
                            onlyDependOnLibsWithTags: ["type:utilities"],
                        },
                        {
                            sourceTag: "type:data-access",
                            onlyDependOnLibsWithTags: ["type:utilities", "type:data-access"],
                        },
                        {
                            sourceTag: "type:domain-utils",
                            onlyDependOnLibsWithTags: [
                                "type:utilities",
                                "type:data-access",
                                "type:domain-utils",
                            ],
                        },
                        {
                            sourceTag: "type:state-management",
                            onlyDependOnLibsWithTags: [
                                "type:utilities",
                                "type:data-access",
                                "type:domain-utils",
                                "type:state-management",
                            ],
                        },
                        {
                            sourceTag: "type:ui",
                            onlyDependOnLibsWithTags: [
                                "type:utilities",
                                "type:data-access",
                                "type:domain-utils",
                                "type:state-management",
                                "type:ui",
                            ],
                        },
                        {
                            sourceTag: "type:feature",
                            onlyDependOnLibsWithTags: [
                                "type:utilities",
                                "type:data-access",
                                "type:domain-utils",
                                "type:state-management",
                                "type:ui",
                                "type:feature",
                            ],
                        },
                        {
                            sourceTag: "type:shell",
                            onlyDependOnLibsWithTags: [
                                "type:utilities",
                                "type:data-access",
                                "type:domain-utils",
                                "type:state-management",
                                "type:ui",
                                "type:feature",
                                "type:shell",
                            ],
                        },
                        {
                            sourceTag: "scope:shared",
                            onlyDependOnLibsWithTags: ["scope:shared", "scope:utils"],
                        },
                        {
                            sourceTag: "scope:utils",
                            onlyDependOnLibsWithTags: ["scope:utils", "scope:shared"],
                        },
                    ],
                },
            ],
            "import/order": [
                "error",
                {
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                    groups: ["builtin", "external", "internal"],
                    "newlines-between": "always",
                    pathGroups: [
                        {
                            pattern: "react**",
                            group: "builtin",
                            position: "before",
                        },
                        {
                            pattern: "src/**",
                            group: "internal",
                        },
                    ],
                    pathGroupsExcludedImportTypes: [],
                },
            ],
        },
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.cts",
            "**/*.mts",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs",
        ],
        // Override or add rules here
        rules: {},
    },
];
