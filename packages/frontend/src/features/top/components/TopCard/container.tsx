import { Card, CardBody, CardHeader, Heading } from "@yamada-ui/react";

import { TopReorderContainer } from "@/features/top/components/TopReorder/container";

export const TopCardContainer = async () => {
  return (
    <Card height="100%" width="100%">
      <CardHeader justifyContent="center">
        <Heading>Todo</Heading>
      </CardHeader>

      <CardBody>
        <TopReorderContainer />
      </CardBody>
    </Card>
  );
};
