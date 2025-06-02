import { useState } from "react";

// Aapka diya hua data:
const faqData = [
  {
    que: "How do I place an order?",
    ans: "Browse dishes, add them to your cart, and check out as a guest or by signing in.",
  },
  {
    que: "Who are the cooks on MaclApp?",
    ans: "Browse dishes, add them to your cart, and check out as a guest or by signing in.",
  },
  {
    que: "What is your cancellation policy?",
    ans: "Browse dishes, add them to your cart, and check out as a guest or by signing in.",
  },
  {
    que: "Is delivery available in my area?",
    ans: "Browse dishes, add them to your cart, and check out as a guest or by signing in.",
  },
  {
    que: "Can I track my order?",
    ans: "Browse dishes, add them to your cart, and check out as a guest or by signing in.",
  },
];

function FaqItem({ que, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-base sm:text-lg text-base font-medium text-gray-800">
          {que}
        </span>
        <span className="flex items-center justify-center text-2xl border-2 rounded-full p-3 w-[20px] h-[20px] hover:cursor-pointer text-[#006A5A] border-[#006A5A]">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-sm sm:text-base text-left font-light text-[#667085]">
          {ans}
        </p>
      )}
    </div>
  );
}

function ForChef() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {faqData.map((item, index) => (
        <FaqItem key={index} que={item.que} ans={item.ans} />
      ))}
    </div>
  );
}

export default ForChef;
