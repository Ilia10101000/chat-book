import { MessageList } from "@/component/MessagePage/MessageList";
import { MessageFooter } from "@/component/MessagePage/MessageFooter";


const messageList = [
  {
    text: "HelloHell oHelloHe lloHelloHelloHelloHell oHelloHelloHelloHelloHelloHello HelloHelloHelloHelloHelloHelloHello",
  },
  {
    text: "HelloHelloHell  oHelloHelloHelloHe lloHelloHelloHello HelloHelloHelloHelloHelloHelloHelloHelloHello",
  },
  {
    text: "HelloHell oHelloHelloHelloHe lloHelloHelloHelloHe lloHelloHelloHe lloHelloHelloHelloHelloHelloHello",
  },
  {
    text: "Hello",
  },
  {
    text: "?",
  },
  {
    text: "HelloHelloHe  lloHelloHelloHelloHelloHelloHello HelloHelloHelloHelloHelloHelloHelloHelloHelloHel loHelloHelloHelloHelloHelloHelloHelloHelloHelloHello",
  },
  {
    text: "...",
  },
  {
    text: "HelloHelloHelloHelloHelloHelloHe lloHelloHelloHelloHelloHelloHelloHelloHelloHel loHelloHelloHelloHelloHelloHello",
  },
  {
    text: "Hello",
  },
  {
    text: "Hello",
  },
  {
    text: "Hello",
  },
];

const MessagePage = async () => {


  return (
    <>
      <MessageList list={messageList} />
      <MessageFooter />
    </>
  );
};

export default MessagePage;
