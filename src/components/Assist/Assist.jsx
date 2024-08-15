import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Chat from "./Chat";
import MultimodalInput from "./MultimodalInput";

const Assist = () => {
  return (
    <div className="min-h-screen w-full flex flex-col text-white">
      <Helmet>
        <title>Chat Assistant</title>
      </Helmet>
      <div className="w-full">
        <div className="w-full mx-auto p-4">
          <Tabs>
            <TabList className="flex border-b border-gray-700">
              <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-gray-300 hover:text-slate-400 transition-colors duration-300 border-b-2 border-transparent focus:outline-none focus:border-indigo-500">
                Multimodal Assistant
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-gray-300 hover:text-slate-400 transition-colors duration-300 border-b-2 border-transparent focus:outline-none focus:border-indigo-500">
                Chat Assistant
              </Tab>
            </TabList>

            <TabPanel className="p-4">
              <MultimodalInput />
            </TabPanel>
            <TabPanel className="p-4">
              <Chat />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Assist;
