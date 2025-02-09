import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const RootLayout: React.FC = () => {
  const { i18n } = useTranslation();

  // Обработчик смены языка
  const handleChangeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <nav className="flex container mx-auto justify-between items-center pt-6 pb-6 bg-transparent z-10">
        {/* Логотип и меню */}
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="cursor-pointer">
            <div className="flex justify-center items-center gap-2 w-[300px]">
              <h1 className="text-[48px] font-[700] text-[#ADFF00]">ud</h1>
              <h2 className="text-[24px] mt-3 font-[600] text-black">
                UD academy
              </h2>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between text-black px-4 py-2 ">
          <div className="flex gap-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold border-b-2 border-black"
                  : " hover:text-gray-500"
              }
            >
              О нас
            </NavLink>
            <NavLink
              to="/tips"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold border-b-2 border-black"
                  : " hover:text-gray-500"
              }
            >
              Tips
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold border-b-2 border-black"
                  : " hover:text-gray-500"
              }
            >
              Alerts
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <Select onValueChange={(value) => handleChangeLanguage(value)}>
              <SelectTrigger className="w-[70px] h-[42px] flex items-center justify-between  bg-none border-none shadow-none px-4  cursor-pointer">
                <SelectValue
                  className="text-black"
                  placeholder={i18n.language.toUpperCase()}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uz">O‘Z</SelectItem>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="ru">РУ</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-[#ADFF00] text-black font-bold hover:bg-[#72ce27] hover:text-black">
              {t("cta_Courses")}
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto">
        <div>
          <Outlet />
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-[black] mt-8 text-center ">
        <div className=" flex container mx-auto justify-start gap-[100px] px-[100px] py-[50px]">
          <div className="">
            <h1 className="font-medium text-[32px] text-left text-white">
              Страницы
            </h1>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Главная
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              О нас
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Ивенты
            </p>
          </div>
          <div className="">
            <h1 className="font-medium text-[32px] text-left text-white">
              Курсы
            </h1>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Frontend
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Backend
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Graphic Design
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Motion Design
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666] w-[155px]">
              Введение в кибербезопасность
            </p>
          </div>
          <div className="">
            <h1 className="font-medium text-[32px] text-left text-white">
              Контакты
            </h1>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">
              Telegram
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">
              Instagram
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">
              Instagram
            </p>
          </div>
          <div className="">
            <h1 className="font-medium text-[32px] text-left text-white">
              Язык
            </h1>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Русский
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              O’zbekcha
            </p>
            <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">
              Узбекча
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.533959441285!2d69.33484352143536!3d41.342359263887815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a58c63cbfd%3A0xcb882f0ad7acf773!2sRaqamli%20texnologiyalar%20vazirligi!5e1!3m2!1sru!2s!4v1738686768585!5m2!1sru!2s"
              width="422"
              height="210"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="@apply text-xl font-medium leading-[25.5px] text-left text-white pt-[10px]">
              IT-компания Ustudy по адресу Ташкент, улица Муминова, 7/2, ️ +998
              55 501 5353.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
