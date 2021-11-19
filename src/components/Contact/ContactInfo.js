import { GrMailOption, GrLocation } from "react-icons/gr";
import FieldWrapper from "./FieldWrapper";
import IconWrapper from "./IconWrapper";
import GithubButton from "../Social/GithubButton";
import LinkedinButton from "../Social/LinkedinButton";

const ContactInfo = () => {
  return (
    <div className="col-span-1 md:col-span-2 order-2 md:order-1 border-t-2 border-r-0 md:border-t-0 md:border-r-2 border-blue-600 pt-4 pr-0 md:pt-0 md:pr-4 z-40">
      <div className="flex flex-col justify-center gap-3">
        <FieldWrapper form={false}>
          <IconWrapper className="col-span-1 ">
            <GrMailOption className="w-6 h-6" />
          </IconWrapper>
          <p className="text-base md:text-sm col-span-4">
            juan.ag.morello@gmail.com
          </p>
        </FieldWrapper>
        <FieldWrapper form={false}>
          <IconWrapper className="col-span-1">
            <GrLocation className="w-6 h-6" />
          </IconWrapper>
          <p className="text-base md:text-sm col-span-4">
            Ciudad Autónoma de Buenos Aires, Argentina
          </p>
        </FieldWrapper>
        <div className="mt-3 flex justify-center gap-5">
          <GithubButton />
          <LinkedinButton />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
