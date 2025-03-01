import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "../backend/src/graphqls/generated": defineConfig({
      resolverRelativeTargetDir: "../../backend/src/graphqls/resolvers",
    }),
  },
};

export default config;
