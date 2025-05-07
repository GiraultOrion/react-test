import baseConfig from "./eslint.base.config.mjs";
import nx from "@nx/eslint-plugin";

export default [
    ...baseConfig,
    {
        ignores: ["**/dist", "**/vite.config.*.timestamp*", "**/vitest.config.*.timestamp*"],
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
        },
    },
    ...nx.configs["flat/react"],
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        // Override or add rules here
        rules: {
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
                            pattern: "react/**",
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
    {},
];
