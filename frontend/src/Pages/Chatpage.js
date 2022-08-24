import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "..//components/misecellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { Flex, Spacer } from "@chakra-ui/react";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex
        d="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </div>
    // <Flex style={{ width: "100%" }}>
    //   {user && <SideDrawer />}
    //   <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
    //     {user && <MyChats fetchAgain={fetchAgain} />}
    //   </Box>
    //   <Spacer />
    //   <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
    //     {user && (
    //       <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    //     )}
    //   </Box>
    // </Flex>
  );
};

export default Chatpage;
