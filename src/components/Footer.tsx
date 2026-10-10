const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#E1E8E1] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-3 py-4 text-xs text-gray-500 sm:flex-row sm:px-4 sm:py-5 sm:text-sm">
        <p className="text-center sm:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-center sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
