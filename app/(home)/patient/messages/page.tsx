"use client"

import { useState } from "react"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState("1")
  const [messageText, setMessageText] = useState("")

  const chats = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your test results look good. No need to worry.",
      time: "10:30 AM",
      unread: 0,
      online: true,
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      role: "Neurologist",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Please take the medication as prescribed.",
      time: "Yesterday",
      unread: 2,
      online: false,
    },
    {
      id: "3",
      name: "Dr. Emily Patel",
      role: "Pediatrician",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let me know if the symptoms persist.",
      time: "2 days ago",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: "m1",
      chatId: "1",
      sender: "doctor",
      text: "Hello! How are you feeling today?",
      time: "10:00 AM",
    },
    {
      id: "m2",
      chatId: "1",
      sender: "patient",
      text: "I'm feeling much better, thank you. The medication seems to be working.",
      time: "10:05 AM",
    },
    {
      id: "m3",
      chatId: "1",
      sender: "doctor",
      text: "That's great to hear! I've reviewed your latest test results, and everything looks good.",
      time: "10:15 AM",
    },
    {
      id: "m4",
      chatId: "1",
      sender: "doctor",
      text: "Your blood pressure has stabilized, and your heart rate is normal. No need to worry.",
      time: "10:30 AM",
    },
    {
      id: "m5",
      chatId: "2",
      sender: "doctor",
      text: "Hello! I'm following up on your last visit. How's your headache?",
      time: "Yesterday",
    },
    {
      id: "m6",
      chatId: "2",
      sender: "doctor",
      text: "Please take the medication as prescribed. It should help reduce the frequency of your migraines.",
      time: "Yesterday",
    },
  ]

  const filteredMessages = messages.filter((message) => message.chatId === selectedChat)
  const selectedChatData = chats.find((chat) => chat.id === selectedChat)

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, you would send this to your backend
      console.log("Sending message:", messageText)
      setMessageText("")
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Messages</h1>

      <div className="bg-card dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Chat List */}
          <div className="border-r border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full p-2 pl-10 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                />
              </div>
            </div>

            <div className="overflow-y-auto h-[500px]">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`
                    p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer
                    ${selectedChat === chat.id ? "bg-primary/10 dark:bg-primary/20" : "hover:bg-gray-50 dark:hover:bg-gray-700"}
                  `}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-start">
                    <div className="relative">
                      <img
                        src={chat.avatar || "/placeholder.svg"}
                        alt={chat.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      {chat.online && (
                        <span className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium dark:text-white truncate">{chat.name}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{chat.role}</p>
                      <p className="text-sm dark:text-gray-300 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-2 flex flex-col h-[600px]">
            {selectedChatData ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={selectedChatData.avatar || "/placeholder.svg"}
                        alt={selectedChatData.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      {selectedChatData.online && (
                        <span className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">{selectedChatData.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedChatData.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Video className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                      <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "patient" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`
                            max-w-[70%] rounded-lg p-3
                            ${
                              message.sender === "patient"
                                ? "bg-primary text-primary-foreground"
                                : "bg-gray-100 dark:bg-gray-700 dark:text-white"
                            }
                          `}
                        >
                          <p>{message.text}</p>
                          <p
                            className={`
                            text-xs mt-1
                            ${
                              message.sender === "patient"
                                ? "text-primary-foreground/80"
                                : "text-gray-500 dark:text-gray-400"
                            }
                          `}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2">
                      <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                      className="p-2 rounded-full bg-primary text-primary-foreground ml-2"
                      onClick={handleSendMessage}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

