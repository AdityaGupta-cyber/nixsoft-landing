import Image from "next/image";

export default function PreFooter() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-sm rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="flex justify-center items-center">
          <Image
            className=""
            src="/cybersecurity.jpg"
            alt=""
            width={300}
            height={200}
          />
        </a>
        <div className="p-5 flex flex-col items-center justify-center">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}
