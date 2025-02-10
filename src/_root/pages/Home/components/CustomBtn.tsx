import { t } from "i18next";
import { ArrowUpRight } from "lucide-react";

interface CustomButtonProps {
  text: string; // Определяем тип для текста
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div className="relative w-[181px] h-[62px] hover:rounded-full hover:bg-[#ADFF0038] hover:border-[1px] hover:border-[#ADFF00] flex items-center justify-center cursor-pointer">
      <div className="absolute w-[157px] h-[42px] rounded-full bg-[#ADFF00] flex items-center justify-center">
        <button className="text-[#000] text-lg font-semibold flex items-center gap-5">
          <p>
            {t(text)} {/* Убираем лишние фигурные скобки */}
          </p>
          <ArrowUpRight className="w-5 h-5 text-[#000]" />
        </button>
      </div>
    </div>
  );
};

export default CustomButton;
