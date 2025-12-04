export default function ChatInput() {
  return (
    <div className="border-t border-gray-300 p-4 flex gap-3">
      <input
        type="text"
        placeholder="Send a message..."
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
      />
      <button className="px-4 py-2 bg-black text-white rounded-lg">
        Send
      </button>
    </div>
  );
}
