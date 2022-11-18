import TemplatesAuditTable from "@/components/TemplateTable/TemplatesAuditTable";
import TemplatesListTable from "@/components/TemplateTable/TemplatesListTable";
import { useGetTemplatesQuery } from "@/redux/api/templateApi";
import { Text, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiListCheck } from "react-icons/bi";

const Templates = () => {
  const { data: templateData, isLoading } = useGetTemplatesQuery({ status: "all" });

  const auditTemplates = templateData?.filter((template) => template.status === "censoring");

  return (
    <Flex flexDirection="column">
      {isLoading && <Text>Please wait while the courts data are loading...</Text>}
      <Heading marginY="50px">Templates management</Heading>

      {templateData && (
        <Tabs variant="enclosed-colored" colorScheme="gray">
          <TabList>
            <Tab gap="0.5rem">
              <AiOutlineUnorderedList />
              Template List
            </Tab>
            <Tab gap="0.5rem">
              <BiListCheck size="24px" />
              Template audit
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TemplatesListTable templates={templateData} />
            </TabPanel>
            <TabPanel>
              <TemplatesAuditTable templates={auditTemplates} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Flex>
  );
};
export default Templates;
