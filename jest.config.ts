export default {
    displayName: "react-test",
    preset: "./jest.preset.js",
    transform: {
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
        "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/react/babel"] }],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageDirectory: "./coverage/react-test",
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.[jt]s?(x)",
        "<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)",
    ],
};
