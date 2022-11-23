import TemplatesAuditTable from "@/components/TemplateTable/TemplatesAuditTable";
import TemplatesListTable from "@/components/TemplateTable/TemplatesListTable";
import { useGetTemplatesQuery } from "../../redux/api/templateApi";
import { Text, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiListCheck } from "react-icons/bi";
import Loading from "@/components/Loading";

const Templates = () => {
  const { data: templateData, isLoading, isError } = useGetTemplatesQuery({ status: "all" });
  const loadingText = "Please wait while the template data is loading...";
  const auditTemplates = templateData?.filter((template) => template.status === "censoring");

  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Templates management</Heading>
      {isLoading && <Loading loadingText={loadingText} />}
      {isError && (
        <Text>Your request was not sent successfully, please try again or contact IT support.</Text>
      )}
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
