import { resume } from "../constants";
import Button from "./button";

import check from "../assets/check.svg";

export default function ResumeList() {
  return (
    <div className="flex justify-center gap-[1.5rem] max-lg:flex-wrap">
      {resume.map((item) => (
        const fileUrl = new URL(item.resume, window.location.origin).href;
      
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-14 [&>h4]:first:text-color-3 [&>h4]:even:text-color-1 hover:scale-105 transition-transform"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

          <a href={fileUrl} download={`AlexandreDresch${item.title}.pdf`}>
          <Button white className="w-full mb-6">
            Download
          </Button>
          </a>

          <ul>
            {
                item.features.map((feature, index) => (
                    <li key={index} className="flex items-start py-5 border-t border-n-6">
                        <img src={check} alt="Check Icon" width={24} height={24} />

                        <p className="body-2 ml-4 text-n-1">{feature}</p>
                    </li>
                ))
            }
          </ul>
        </div>
      ))}
    </div>
  );
}
